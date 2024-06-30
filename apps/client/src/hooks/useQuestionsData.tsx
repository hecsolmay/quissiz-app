import { useTestsStore } from '../store/tests'

function getMessage (correct: number, total: number) {
  if (correct >= 8) {
    return `Felicitaciones 🎉 conseguiste ${correct} de ${total}`
  }

  if (correct >= 5) {
    return `Que bien 😎 conseguiste ${correct} de ${total}`
  }

  if (correct >= 1) {
    return `Hay que estudiar 🤔 conseguiste ${correct} de ${total}`
  }

  return `Lo siento 😢 conseguiste ${correct} de ${total}`
}

export default function useQuestionsData () {
  const questions = useTestsStore(state => state.questions)
  const total = questions.length

  let correct = 0
  let incorrect = 0
  let unanswered = 0

  questions.forEach(question => {
    const { isCorrectAnswer, isUserAlreadyAnswered } = question
    if (!isUserAlreadyAnswered) unanswered++
    else if (isCorrectAnswer) correct++
    else incorrect++
  })

  return {
    correct,
    incorrect,
    unanswered,
    total,
    message: getMessage(correct, total)
  }
}
