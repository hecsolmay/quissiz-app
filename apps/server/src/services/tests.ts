import Test from '../models/test'
import { type Test as TestSchema } from '../validators/tests'

export class TestsService {
  static async findAllTests () {
    return await Test.find({})
  }

  static async findTestById (id: string) {
    return await Test.findOne({ _id: id })
  }

  static async createTest (test: TestSchema) {
    return await Test.create(test)
  }

  static async updateTest (id: string, test: Partial<TestSchema>) {
    return await Test.findOneAndUpdate({ _id: id }, test, { new: true })
  }

  static async deleteTest (id: string) {
    return await Test.findOneAndDelete({ _id: id })
  }
}
