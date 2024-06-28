import express from 'express'
import { PORT } from './config'
import cors from 'cors'
import morgan from 'morgan'
import connect from './database/database'

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

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})

export default app
