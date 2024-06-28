import express from 'express'
import { PORT } from '@/config'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

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

export default app
