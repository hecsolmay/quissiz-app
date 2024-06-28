export interface Question {
  question: string
  options: string[]
  correctIndex: number
}

export interface Test {
  name: string
  imageUrl: string
  createdAt: Date
  questions: Question[]
}
