import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import testsRouter from './routes/tests'

const app = express()

// UTILITY MIDDLEWARES
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// TEST ENDPOINTS
app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.use('/api/tests', testsRouter)

export default app
