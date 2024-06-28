import { type Test as TestType } from '../types/tests'
import mongoose, { Schema, type Document } from 'mongoose'

type DocumentTest = Document & TestType

const QuestionSchema: Schema = new Schema({
  id: { type: String, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctIndex: { type: Number, required: true }
})

const TestSchema: Schema = new Schema({
  testName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  questions: { type: [QuestionSchema], required: true }
})

const Test = mongoose.model<DocumentTest>('Test', TestSchema)

export default Test
