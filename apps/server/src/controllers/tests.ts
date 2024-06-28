import { TestsService } from '@/services/tests'
import type { Request, Response } from 'express'

export async function getTests (req: Request, res: Response) {
  try {
    const result = await TestsService.findAllTests()
    return res.json({
      message: 'Hello from the tests controller!',
      data: result
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export async function getTestsById (req: Request, res: Response) {
  try {
    const { id } = req.params
    const result = await TestsService.findTestById(id)
    return res.json({
      message: 'Hello from the tests controller!',
      data: result
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export async function postTests (req: Request, res: Response) {
  try {
    return res.json({
      message: 'Hello from the tests controller!'
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export async function putTests (req: Request, res: Response) {
  try {
    return res.json({
      message: 'Hello from the tests controller!'
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}

export async function deleteTests (req: Request, res: Response) {
  try {
    return res.json({
      message: 'Hello from the tests controller!'
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: 'Internal server error'
    })
  }
}
