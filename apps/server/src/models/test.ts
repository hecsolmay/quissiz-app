import { type Test as TestType } from '../types/tests'
import mongoose, { Schema, type Document } from 'mongoose'

type DocumentTest = Document & TestType

const QuestionSchema: Schema = new Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctIndex: { type: Number, required: true }
}, {
  versionKey: false,
  toJSON: {
    transform: (_doc, ret) => {
      const id = ret._id.toString()
      delete ret._id
      return { id, ...ret }
    }
  }
})

const TestSchema: Schema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  questions: { type: [QuestionSchema], required: true }
}, {
  versionKey: false,
  toJSON: {
    transform: (_doc, ret) => {
      const id = ret._id.toString()
      delete ret._id
      return { id, ...ret }
    }
  }
})

const Test = mongoose.model<DocumentTest>('Test', TestSchema)

export default Test
