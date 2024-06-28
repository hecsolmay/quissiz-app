import dotenv from 'dotenv'
dotenv.config()

const portString = process.env?.PORT === undefined ? '3000' : process.env.PORT
export const PORT = parseInt(portString)
export const MONGODB_URI = process.env?.MONGODB_URI ?? 'mongodb://localhost:27017/test'
