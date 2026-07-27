import { mongooseAdapter } from '@payloadcms/db-mongodb'
import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'
import nodemailer from 'nodemailer'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  collections: [Pages, Posts, Media, Categories, Users],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  plugins,
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        const secret = process.env.CRON_SECRET
        if (!secret) return false

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${secret}`
      },
    },
    tasks: [],
  },
  email: () => {
    // const resend = process.env.RESEND_API_KEY
    //   ? new Resend(process.env.RESEND_API_KEY)
    //   : null

    // if (process.env.SENDGRID_API_KEY) {
    //   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // }

    return ({
      name: 'Remco',
      defaultFromName: 'Shipeezy',
      defaultFromAddress: process.env.EMAIL_FROM || '',
      sendEmail: async () => {
        const provider = process.env.EMAIL_PROVIDER || 'local'

        if (provider === 'local') {
          // Nodemailer (SMTP) – for local dev
          return nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'mailhog',
            port: Number(process.env.SMTP_PORT || 1025),
            secure: false,
          })
        }

        // if (provider === 'sendgrid') {
        //   // Fake transport that proxies through SendGrid API
        //   return {
        //     sendMail: async (options: any) => {
        //       await sgMail.send({
        //         to: options.to,
        //         from: options.from || process.env.EMAIL_FROM!,
        //         subject: options.subject,
        //         text: options.text,
        //         html: options.html,
        //       })
        //     },
        //   } as any
        // }

        // if (provider === 'resend') {
        //   // Fake transport that proxies through Resend API
        //   return {
        //     sendMail: async (options: any) => {
        //       if (!resend) throw new Error('RESEND_API_KEY not set')
        //       await resend.emails.send({
        //         from: options.from || process.env.EMAIL_FROM!,
        //         to: Array.isArray(options.to) ? options.to : [options.to],
        //         subject: options.subject,
        //         text: options.text,
        //         html: options.html,
        //       })
        //     },
        //   } as any
        // }

        throw new Error(`Unknown EMAIL_PROVIDER: ${provider}`)
      },
    })
  },
})
