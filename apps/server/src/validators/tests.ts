import { z } from 'zod'

const MESSAGES = {
  QUESTION_REQUIRED: 'Question is required',
  QUESTION_MIN_LENGTH: 'Must be at least 4 characters',
  OPTION_MIN_LENGTH: 'Option cannot be empty',
  CORRECT_INDEX: 'Correct index must be a valid index in options array',
  TEST_NAME_MIN_LENGTH: 'Test name is required',
  IMAGE_URL: 'Invalid URL format for image',
  QUESTIONS_ARRAY_REQUIRED: 'At least one question is required',
  QUESTION_INFO: 'A question must have an question, options (at least one), and correct index'
}

export const questionSchema = z
  .object({
    question: z
      .string({
        message: MESSAGES.QUESTION_MIN_LENGTH,
        required_error: MESSAGES.QUESTION_REQUIRED
      })
      .trim()
      .min(4, MESSAGES.QUESTION_MIN_LENGTH),
    options: z.array(z.string().trim().min(4, MESSAGES.OPTION_MIN_LENGTH)),
    correctIndex: z.number().int().nonnegative()
  })
  .refine(val => {
    const options = val.options
    return val.correctIndex < options.length
  }, MESSAGES.CORRECT_INDEX)

export const testSchema = z.object({
  name: z
    .string({
      message: MESSAGES.TEST_NAME_MIN_LENGTH,
      required_error: MESSAGES.TEST_NAME_MIN_LENGTH
    })
    .trim()
    .min(4, MESSAGES.TEST_NAME_MIN_LENGTH),
  imageUrl: z.string({ message: MESSAGES.IMAGE_URL }).url(MESSAGES.IMAGE_URL),
  questions: z
    .array(questionSchema, {
      message: MESSAGES.QUESTIONS_ARRAY_REQUIRED,
      required_error: MESSAGES.QUESTIONS_ARRAY_REQUIRED
    })
    .nonempty(MESSAGES.QUESTION_INFO)
})

// Export types inferred from schemas
export type Question = z.infer<typeof questionSchema>
export type Test = z.infer<typeof testSchema>
