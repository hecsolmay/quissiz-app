import type { Request, Response } from 'express'
import { TestsService } from '../services/tests'
import { handleError } from '../utils/errors'
import { testSchema } from '../validators/tests'

export async function getTests (req: Request, res: Response) {
  try {
    const result = await TestsService.findAllTests()
    return res.json({
      message: 'Ok',
      data: result
    })
  } catch (error) {
    return handleError(error, res)
  }
}

export async function getTestsById (req: Request, res: Response) {
  try {
    const { id } = req.params
    const test = await TestsService.findTestById(id)

    if (test === null) {
      return res.status(404).json({
        message: 'Test not found'
      })
    }

    return res.json({
      message: 'Test found',
      data: test
    })
  } catch (error) {
    return handleError(error, res)
  }
}

export async function postTests (req: Request, res: Response) {
  try {
    const rawData = req.body
    const result = testSchema.safeParse(rawData)

    if (!result.success) {
      return res.status(400).json({
        message: 'Invalid data',
        errors: result.error.issues
      })
    }

    const newTest = result.data

    const createdTest = await TestsService.createTest(newTest)

    return res.status(201).json({
      message: 'Ok',
      data: createdTest
    })
  } catch (error) {
    return handleError(error, res)
  }
}

export async function putTests (req: Request, res: Response) {
  try {
    const { id } = req.params
    const rawData = req.body
    const result = testSchema.safeParse(rawData)

    if (!result.success) {
      return res.status(400).json({
        message: 'Invalid data',
        errors: result.error.issues
      })
    }

    const updatedTest = result.data

    const updated = await TestsService.updateTest(id, updatedTest)

    if (updated === null) {
      return res.status(404).json({
        message: 'Test not found'
      })
    }

    return res.json({
      message: 'Test Updated Successfully',
      data: updated
    })
  } catch (error) {
    return handleError(error, res)
  }
}

export async function deleteTests (req: Request, res: Response) {
  try {
    const { id } = req.params
    const deleted = await TestsService.deleteTest(id)

    if (deleted === null) {
      return res.status(404).json({
        message: 'Test not found'
      })
    }

    return res.status(204).json({})
  } catch (error) {
    return handleError(error, res)
  }
}
