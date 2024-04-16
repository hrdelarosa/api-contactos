import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:4200/'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('not allowed by CORS'))
  }
})
