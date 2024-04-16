import express, { json } from 'express'
// import contacts from './contactos.json'
import { contactRouter } from './routes/contactos.js'
// import { corsMiddleware } from './middlewares/cors.js'
import cors from 'cors'

const app = express()
app.use(json())
// app.use(corsMiddleware())
app.use(cors())
app.disable('x-powered-by')

app.use('/contactos', contactRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listener on port http://localhost:${PORT}`)
})
