import { MONGODB_URI } from '../config'
import mongoose from 'mongoose'

let db: typeof mongoose | null = null

const connect = async () => {
  try {
    console.log('Connecting to MongoDB...')
    if (db !== null) {
      console.log('Already connected to MongoDB')
      return db
    }
    db = await mongoose.connect(MONGODB_URI, {})
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connect
