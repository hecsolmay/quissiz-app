import express from 'express'
import { PORT } from '@/config'
import path from 'path'

const CLIENT_INDEX_PATH = path.join(__dirname, '../../', 'client/dist')

const app = express()

app.use(express.json())
app.use(express.static(CLIENT_INDEX_PATH))

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World' })
})

app.get('*', (req, res) => {
  res.sendFile(CLIENT_INDEX_PATH)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
