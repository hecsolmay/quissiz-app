import { MAX_QUANTITY_OF_QUESTIONS } from '../constants'
import { Question } from '../types/tests'

export function getRandomQuestions (questions: Question[], max = MAX_QUANTITY_OF_QUESTIONS) {
  const randomQuestions = questions
    .sort(() => Math.random() - 0.5)
    .slice(0, max)
  const mappedQuestions = randomQuestions.map(question => ({
    ...question,
    userSelectedOption: null,
    isCorrectAnswer: false,
    timeAnswered: 0,
    isUserAlreadyAnswered: false
  }))
  return mappedQuestions
}
