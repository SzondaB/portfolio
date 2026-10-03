import {
  useEffect,
  useRef,
  useState
} from 'react'

import styles
  from './ContactModal.module.css'

import useLanguage
  from '../../hooks/useLanguage'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

type SubmitStatus =
  | 'idle'
  | 'sending'
  | 'success'
  | 'error'

const REQUEST_TIMEOUT_MS = 10_000

function ContactModal({
  isOpen,
  onClose
}: ContactModalProps) {
  const { t } = useLanguage()

  const [email, setEmail] =
    useState('')

  const [subject, setSubject] =
    useState('')

  const [message, setMessage] =
    useState('')

  const [company, setCompany] =
    useState('')

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>('idle')

  const emailInputRef =
    useRef<HTMLInputElement | null>(null)

  const submitStatusRef =
    useRef<SubmitStatus>('idle')

  useEffect(() => {
    submitStatusRef.current =
      submitStatus
  }, [submitStatus])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousBodyOverflow =
      document.body.style.overflow

    const previousHtmlOverflow =
      document.documentElement.style.overflow

    document.body.style.overflow =
      'hidden'

    document.documentElement.style.overflow =
      'hidden'

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (
        event.key === 'Escape' &&
        submitStatusRef.current !==
          'sending'
      ) {
        onClose()
      }
    }

    document.addEventListener(
      'keydown',
      handleKeyDown
    )

    const focusTimeout =
      window.setTimeout(() => {
        emailInputRef.current?.focus()
      }, 100)

    return () => {
      window.clearTimeout(
        focusTimeout
      )

      document.body.style.overflow =
        previousBodyOverflow

      document.documentElement.style.overflow =
        previousHtmlOverflow

      document.removeEventListener(
        'keydown',
        handleKeyDown
      )
    }
  }, [
    isOpen,
    onClose
  ])

  useEffect(() => {
    if (isOpen) {
      setSubmitStatus('idle')
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (
      submitStatus === 'sending'
    ) {
      return
    }

    setSubmitStatus('sending')

    const controller =
      new AbortController()

    const timeoutId =
      window.setTimeout(() => {
        controller.abort()
      }, REQUEST_TIMEOUT_MS)

    try {
      const response = await fetch(
        '/api/contact',
        {
          method: 'POST',

          headers: {
            'Content-Type':
              'application/json'
          },

          body: JSON.stringify({
            email,
            subject,
            message,
            company
          }),

          signal:
            controller.signal
        }
      )

      if (!response.ok) {
        throw new Error(
          `Contact request failed with status ${response.status}`
        )
      }

      const data =
        (await response.json()) as {
          success?: boolean
        }

      if (!data.success) {
        throw new Error(
          'Contact request was not successful.'
        )
      }

      setEmail('')
      setSubject('')
      setMessage('')
      setCompany('')

      setSubmitStatus('success')
    } catch (error) {
      if (
        error instanceof DOMException &&
        error.name === 'AbortError'
      ) {
        console.error(
          'Contact request timed out.'
        )
      } else {
        console.error(
          'Contact form error:',
          error
        )
      }

      setSubmitStatus('error')
    } finally {
      window.clearTimeout(
        timeoutId
      )
    }
  }

  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (
      event.target ===
        event.currentTarget &&
      submitStatus !== 'sending'
    ) {
      onClose()
    }
  }

  const isSending =
    submitStatus === 'sending'

  const isSuccess =
    submitStatus === 'success'

  return (
    <div
      className={styles.backdrop}
      onMouseDown={
        handleBackdropClick
      }
      role="presentation"
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <div
          className={styles.header}
        >
          <div
            className={styles.heading}
          >
            <p
              className={
                styles.eyebrow
              }
            >
              {
                t.home.contact.modal
                  .eyebrow
              }
            </p>

            <h2
              id="contact-modal-title"
              className={styles.title}
            >
              {
                t.home.contact.modal
                  .title
              }
            </h2>
          </div>
        </div>

        <p
          className={
            styles.description
          }
        >
          {
            t.home.contact.modal
              .description
          }
        </p>

        {isSuccess ? (
          <div
            className={
              styles.successState
            }
            role="status"
          >
            <div
              className={
                styles.successIcon
              }
              aria-hidden="true"
            >
              ✓
            </div>

            <p
              className={
                styles.successMessage
              }
            >
              {
                t.home.contact.modal
                  .success
              }
            </p>

            <button
              type="button"
              className={
                styles.sendButton
              }
              onClick={onClose}
            >
              {
                t.home.contact.modal
                  .close
              }
            </button>
          </div>
        ) : (
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div
              className={
                styles.honeypotField
              }
              aria-hidden="true"
            >
              <label
                htmlFor="contact-company"
              >
                Company
              </label>

              <input
                id="contact-company"
                name="company"
                type="text"
                value={company}
                onChange={event =>
                  setCompany(
                    event.target.value
                  )
                }
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div
              className={styles.field}
            >
              <label
                htmlFor="contact-email"
                className={
                  styles.label
                }
              >
                {
                  t.home.contact.modal
                    .email
                }
              </label>

              <input
                ref={emailInputRef}
                id="contact-email"
                name="email"
                type="email"
                value={email}
                onChange={event =>
                  setEmail(
                    event.target.value
                  )
                }
                className={
                  styles.input
                }
                placeholder={
                  t.home.contact.modal
                    .emailPlaceholder
                }
                autoComplete="email"
                spellCheck={false}
                maxLength={254}
                disabled={isSending}
                required
              />
            </div>

            <div
              className={styles.field}
            >
              <label
                htmlFor="contact-subject"
                className={
                  styles.label
                }
              >
                {
                  t.home.contact.modal
                    .subject
                }
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={subject}
                onChange={event =>
                  setSubject(
                    event.target.value
                  )
                }
                className={
                  styles.input
                }
                placeholder={
                  t.home.contact.modal
                    .subjectPlaceholder
                }
                autoComplete="off"
                maxLength={150}
                disabled={isSending}
                required
              />
            </div>

            <div
              className={styles.field}
            >
              <label
                htmlFor="contact-message"
                className={
                  styles.label
                }
              >
                {
                  t.home.contact.modal
                    .message
                }
              </label>

              <textarea
                id="contact-message"
                name="message"
                value={message}
                onChange={event =>
                  setMessage(
                    event.target.value
                  )
                }
                className={
                  styles.textarea
                }
                placeholder={
                  t.home.contact.modal
                    .messagePlaceholder
                }
                autoComplete="off"
                spellCheck
                rows={4}
                maxLength={5000}
                disabled={isSending}
                required
              />
            </div>

            {
              submitStatus ===
                'error' && (
                <p
                  className={
                    styles.errorMessage
                  }
                  role="alert"
                >
                  {
                    t.home.contact.modal
                      .error
                  }
                </p>
              )
            }

            <p
              className={
                styles.privacyNotice
              }
            >
              {
                t.home.contact.modal
                  .privacyPrefix
              }{' '}

              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  styles.privacyLink
                }
              >
                {
                  t.home.contact.modal
                    .privacyLink
                }
              </a>

              {
                t.home.contact.modal
                  .privacySuffix
              }
            </p>

            <div
              className={styles.footer}
            >
              <button
                type="button"
                className={
                  styles.cancelButton
                }
                onClick={onClose}
                disabled={isSending}
              >
                {
                  t.home.contact.modal
                    .cancel
                }
              </button>

              <button
                type="submit"
                className={
                  styles.sendButton
                }
                disabled={isSending}
              >
                {
                  isSending
                    ? t.home.contact
                        .modal.sending
                    : t.home.contact
                        .modal.send
                }
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactModal