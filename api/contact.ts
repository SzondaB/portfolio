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

export default async function handler(
  request: Request
): Promise<Response> {
  if (request.method !== 'POST') {
    return Response.json(
      {
        success: false,
        message: 'Method not allowed.'
      },
      {
        status: 405,
        headers: {
          Allow: 'POST'
        }
      }
    )
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(
      'RESEND_API_KEY is not configured.'
    )

    return Response.json(
      {
        success: false,
        message:
          'The email service is not configured.'
      },
      {
        status: 500
      }
    )
  }

  let body: ContactRequestBody

  try {
    body =
      (await request.json()) as ContactRequestBody
  } catch {
    return Response.json(
      {
        success: false,
        message: 'Invalid request body.'
      },
      {
        status: 400
      }
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
   * Honeypot mező.
   *
   * A normál felhasználó ezt nem látja,
   * viszont az egyszerű botok gyakran
   * automatikusan kitöltik.
   *
   * Ilyenkor úgy teszünk, mintha az
   * üzenet sikeresen elment volna.
   */
  if (company) {
    return Response.json({
      success: true
    })
  }

  if (
    !email ||
    !EMAIL_REGEX.test(email) ||
    email.length > 254
  ) {
    return Response.json(
      {
        success: false,
        message: 'Invalid email address.'
      },
      {
        status: 400
      }
    )
  }

  if (
    !subject ||
    subject.length > 150
  ) {
    return Response.json(
      {
        success: false,
        message: 'Invalid subject.'
      },
      {
        status: 400
      }
    )
  }

  if (
    !message ||
    message.length > 5000
  ) {
    return Response.json(
      {
        success: false,
        message: 'Invalid message.'
      },
      {
        status: 400
      }
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

      return Response.json(
        {
          success: false,
          message:
            'The email could not be sent.'
        },
        {
          status: 500
        }
      )
    }

    return Response.json({
      success: true,
      id: data?.id
    })
  } catch (error) {
    console.error(
      'Contact API error:',
      error
    )

    return Response.json(
      {
        success: false,
        message:
          'The email could not be sent.'
      },
      {
        status: 500
      }
    )
  }
}