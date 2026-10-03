import { useState } from 'react'

import styles
  from './ContactSection.module.css'

import ContactModal
  from './ContactModal'

import useSectionProgress
  from '../../hooks/useSectionProgress'

import useLanguage
  from '../../hooks/useLanguage'

const EMAIL =
  'szondabenjamin00@gmail.com'

function ContactSection() {
  const {
    ref,
    visibility
  } = useSectionProgress<HTMLElement>()

  const { t } = useLanguage()

  const [showEmail, setShowEmail] =
    useState(false)

  const [copied, setCopied] =
    useState(false)

  const [
    isContactModalOpen,
    setIsContactModalOpen
  ] = useState(false)

  const translateY =
    (1 - visibility) * 60

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        EMAIL
      )

      setCopied(true)

      window.setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
    catch {
      setCopied(false)
    }
  }

  const toggleEmail = () => {
    setShowEmail(
      previous => !previous
    )

    setCopied(false)
  }

  return (
    <>
      <section
        ref={ref}
        className={styles.section}
        id="contact"
      >
        <div
          className={styles.content}
          style={{
            opacity: visibility,
            transform:
              `translateY(${translateY}px)`
          }}
        >
          <div className={styles.main}>
            <p className={styles.eyebrow}>
              {t.home.contact.eyebrow}
            </p>

            <h2 className={styles.title}>
              {t.home.contact.title}
            </h2>

            <p
              className={
                styles.description
              }
            >
              {t.home.contact.description}
            </p>

            <div
              className={
                styles.contactArea
              }
            >
              <div
                className={styles.links}
              >
                <button
                  type="button"
                  className={
                    styles.emailToggle
                  }
                  onClick={toggleEmail}
                  aria-expanded={showEmail}
                >
                  E-mail
                </button>

                <a
                  href="https://github.com/SzondaB"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/benjamin-szonda"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  LinkedIn
                </a>
              </div>

              {showEmail && (
                <div
                  className={
                    styles.emailContent
                  }
                >
                  <div
                    className={
                      styles.emailArea
                    }
                  >
                    <div
                      className={
                        styles.emailBox
                      }
                    >
                      <input
                        type="text"
                        value={EMAIL}
                        readOnly
                        className={
                          styles.emailInput
                        }
                        aria-label={
                          t.home.contact
                            .emailAddress
                        }
                      />

                      <button
                        type="button"
                        className={
                          styles.copyButton
                        }
                        onClick={copyEmail}
                      >
                        {copied
                          ? t.home.contact
                              .copied
                          : t.home.contact
                              .copy}
                      </button>
                    </div>

                    <span
                      className={`${
                        styles.copyMessage
                      } ${
                        copied
                          ? styles
                              .copyMessageVisible
                          : ''
                      }`}
                    >
                      {
                        t.home.contact
                          .copiedMessage
                      }
                    </span>
                  </div>

                  <button
                    type="button"
                    className={
                      styles.messageButton
                    }
                    onClick={() =>
                      setIsContactModalOpen(
                        true
                      )
                    }
                  >
                    {
                      t.home.contact
                        .sendMessage
                    }
                  </button>
                </div>
              )}
            </div>
          </div>

          <footer
            className={styles.footer}
          >
            © 2026 Szonda Benjamin Márk
          </footer>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() =>
          setIsContactModalOpen(false)
        }
      />
    </>
  )
}

export default ContactSection