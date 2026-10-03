import { Resend } from 'resend'

const resend = new Resend(
  process.env.RESEND_API_KEY
)

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
  status = 200,
  headers?: HeadersInit
): Response {
  return Response.json(
    data,
    {
      status,
      headers
    }
  )
}

export async function POST(
  request: Request
): Promise<Response> {
  if (!process.env.RESEND_API_KEY) {
    console.error(
      'RESEND_API_KEY is not configured.'
    )

    return jsonResponse(
      {
        success: false,
        message:
          'The email service is not configured.'
      },
      500
    )
  }

  let body: ContactRequestBody

  try {
    body =
      (await request.json()) as ContactRequestBody
  } catch {
    return jsonResponse(
      {
        success: false,
        message:
          'Invalid request body.'
      },
      400
    )
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
   * Normál felhasználó nem tölti ki.
   * Ha egy bot mégis kitölti,
   * sikeres választ adunk, de
   * nem küldünk e-mailt.
   */
  if (company) {
    return jsonResponse({
      success: true
    })
  }

  if (
    !email ||
    !EMAIL_REGEX.test(email) ||
    email.length > 254
  ) {
    return jsonResponse(
      {
        success: false,
        message:
          'Invalid email address.'
      },
      400
    )
  }

  if (
    !subject ||
    subject.length > 150
  ) {
    return jsonResponse(
      {
        success: false,
        message:
          'Invalid subject.'
      },
      400
    )
  }

  if (
    !message ||
    message.length > 5000
  ) {
    return jsonResponse(
      {
        success: false,
        message:
          'Invalid message.'
      },
      400
    )
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
        'Resend error:',
        error
      )

      return jsonResponse(
        {
          success: false,
          message:
            'The email could not be sent.'
        },
        500
      )
    }

    console.log(
      'Contact email sent:',
      data?.id
    )

    return jsonResponse({
      success: true,
      id: data?.id
    })
  } catch (error) {
    console.error(
      'Contact API error:',
      error
    )

    return jsonResponse(
      {
        success: false,
        message:
          'The email could not be sent.'
      },
      500
    )
  }
}