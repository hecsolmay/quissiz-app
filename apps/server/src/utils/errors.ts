import { type Response } from 'express'
import { MongooseError } from 'mongoose'

export function handleError (error: unknown, res: Response) {
  console.error(error)

  if (error instanceof MongooseError) {
    if (error.name === 'CastError') {
      return res.status(404).json({
        message: 'Invalid Id format provided'
      })
    }

    return res.status(400).json({
      message: 'Invalid data'
    })
  }

  if (error instanceof Error) {
    return res.status(500).json({
      message: 'Internal server error'
    })
  }

  return res.status(500).json({
    message: 'Internal server error'
  })
}
