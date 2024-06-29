export interface Question {
  id: string
  question: string
  options: string[]
  correctIndex: number
}

export interface Test {
  id: string
  name: string
  imageUrl: string
  createdAt: Date
  questions: Question[]
}

export interface TestResponse {
  message: string
  data: Test[]
}

export interface QuestionWithAnswer extends Question {
  userSelectedOption: number | null
  isCorrectAnswer: boolean
  timeAnswered: number
  isUserAlreadyAnswered: boolean
}
