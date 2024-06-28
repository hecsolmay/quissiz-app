import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { PORT } from './config'
import connect from './database/database'
import testsRouter from './routes/tests'

const app = express()

// DATABASE CONNECTION
async function main () {
  await connect()

  // UTILITY MIDDLEWARES
  app.use(cors())
  app.use(morgan('dev'))
  app.use(express.json())

  // TEST ENDPOINTS
  app.get('/api', (req, res) => {
    res.json({ message: 'Hello World' })
  })

  app.use('/api/tests', testsRouter)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})

export default app
