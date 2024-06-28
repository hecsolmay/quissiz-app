import { MONGODB_URI } from '../config'
import mongoose from 'mongoose'

const connect = async () => {
  try {
    console.log('Connecting to MongoDB...')
    await mongoose.connect(MONGODB_URI, {})
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connect
