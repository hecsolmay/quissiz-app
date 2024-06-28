import { z } from 'zod'
import crypto from 'node:crypto'

export const questionSchema = z
  .object({
    id: z
      .string()
      .uuid('Invalid UUID format for id')
      .default(crypto.randomUUID()),
    question: z.string().trim().min(4, 'Question is required'),
    options: z.array(z.string().trim().min(4, 'Option cannot be empty')),
    correctIndex: z.number().int().nonnegative()
  })
  .refine(val => {
    const options = val.options
    return val.correctIndex < options.length
  }, 'Correct index must be a valid index in options array')

export const testSchema = z.object({
  name: z.string().trim().min(4, 'Test name is required'),
  imageUrl: z.string().url('Invalid URL format for image'),
  questions: z
    .array(questionSchema)
    .nonempty('At least one question is required')
})

// Export types inferred from schemas
export type Question = z.infer<typeof questionSchema>
export type Test = z.infer<typeof testSchema>
