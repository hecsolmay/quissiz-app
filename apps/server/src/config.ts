import dotenv from 'dotenv'
dotenv.config()

const portString = process.env?.PORT === undefined ? '3000' : process.env.PORT
export const PORT = parseInt(portString)
