import { Resend } from 'resend'

const resend = new Resend(
  process.env.RESEND_API_KEY
)

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MAX_REQUEST_SIZE = 10_000

interface ContactRequestBody {
  email?: unknown
  subject?: unknown
  message?: unknown
  company?: unknown
}

function normalizeString(
  value: unknown
): string {
  return typeof value === 'string'
    ? value.trim()
    : ''
}

function jsonResponse(
  data: object,
  status = 200
): Response {
  return Response.json(
    data,
    {
      status,
      headers: {
        'Cache-Control':
          'no-store'
      }
    }
  )
}

function errorResponse(
  status: number
): Response {
  return jsonResponse(
    {
      success: false,
      message:
        'The request could not be processed.'
    },
    status
  )
}

export async function POST(
  request: Request
): Promise<Response> {
  /*
   * A kapcsolatfelvételi API kizárólag
   * JSON kéréseket fogad.
   */
  const contentType =
    request.headers.get(
      'content-type'
    )

  if (
    !contentType
      ?.toLowerCase()
      .startsWith(
        'application/json'
      )
  ) {
    return errorResponse(415)
  }

  /*
   * Ha a Content-Length alapján már
   * biztosan túl nagy a kérés,
   * nem dolgozzuk fel.
   */
  const contentLength =
    request.headers.get(
      'content-length'
    )

  if (contentLength) {
    const parsedContentLength =
      Number(contentLength)

    if (
      !Number.isFinite(
        parsedContentLength
      ) ||
      parsedContentLength < 0 ||
      parsedContentLength >
        MAX_REQUEST_SIZE
    ) {
      return errorResponse(413)
    }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(
      'RESEND_API_KEY is not configured.'
    )

    return errorResponse(500)
  }

  /*
   * A body-t először szövegként
   * olvassuk be, így a tényleges
   * méretét is ellenőrizhetjük.
   *
   * A Content-Length önmagában
   * nem biztonsági garancia.
   */
  let rawBody: string

  try {
    rawBody =
      await request.text()
  } catch {
    return errorResponse(400)
  }

  const bodySize =
    new TextEncoder()
      .encode(rawBody)
      .byteLength

  if (
    bodySize === 0 ||
    bodySize > MAX_REQUEST_SIZE
  ) {
    return errorResponse(
      bodySize > MAX_REQUEST_SIZE
        ? 413
        : 400
    )
  }

  let body: ContactRequestBody

  try {
    body =
      JSON.parse(
        rawBody
      ) as ContactRequestBody
  } catch {
    return errorResponse(400)
  }

  /*
   * Csak egyszerű JSON objektumot
   * fogadunk el.
   */
  if (
    typeof body !== 'object' ||
    body === null ||
    Array.isArray(body)
  ) {
    return errorResponse(400)
  }

  const email =
    normalizeString(body.email)

  const subject =
    normalizeString(body.subject)

  const message =
    normalizeString(body.message)

  const company =
    normalizeString(body.company)

  /*
   * Honeypot.
   *
   * Normál felhasználó nem látja
   * és nem tölti ki ezt a mezőt.
   *
   * Ha egy egyszerű bot kitölti,
   * sikeres választ kap, de email
   * nem kerül elküldésre.
   */
  if (company) {
    return jsonResponse({
      success: true
    })
  }

  /*
   * Szerveroldali validáció.
   *
   * A frontend korlátai nem
   * tekinthetők biztonsági
   * védelemnek, mert közvetlen
   * HTTP kéréssel megkerülhetők.
   */
  if (
    !email ||
    !EMAIL_REGEX.test(email) ||
    email.length > 254
  ) {
    return errorResponse(400)
  }

  if (
    !subject ||
    subject.length > 150
  ) {
    return errorResponse(400)
  }

  if (
    !message ||
    message.length > 5000
  ) {
    return errorResponse(400)
  }

  try {
    const { data, error } =
      await resend.emails.send({
        from:
          'Portfolio <contact@szondabenjamin.hu>',

        to: [
          'szondabenjamin00@gmail.com'
        ],

        replyTo: email,

        subject:
          `[Portfolio] ${subject}`,

        text: [
          'Új üzenet érkezett a portfólió weboldalról.',
          '',
          `Feladó: ${email}`,
          `Tárgy: ${subject}`,
          '',
          'Üzenet:',
          message
        ].join('\n')
      })

    if (error) {
      console.error(
        'Resend email sending failed.'
      )

      return errorResponse(500)
    }

    /*
     * Az email azonosítóját nem
     * szükséges elküldenünk a
     * böngészőnek.
     */
    console.log(
      'Contact email sent:',
      data?.id
    )

    return jsonResponse({
      success: true
    })
  } catch (error) {
    console.error(
      'Contact API error:',
      error
    )

    return errorResponse(500)
  }
}