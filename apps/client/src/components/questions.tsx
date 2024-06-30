import { cn } from '../libs/cn'
import { useTestsStore } from '../store/tests'

interface QuestionsProps {
  children?: React.ReactNode
}

export default function Questions ({ children }: QuestionsProps) {
  const questions = useTestsStore(state => state.questions)
  const currentQuestionIndex = useTestsStore(
    state => state.currentQuestionIndex
  )
  const saveAnswer = useTestsStore(state => state.saveAnswer)

  const currentQuestion = questions[currentQuestionIndex]
  const {
    isUserAlreadyAnswered,
    isCorrectAnswer,
    correctIndex,
    userSelectedOption
  } = currentQuestion

  const getOptionColor = (index: number) => {
    if (!isUserAlreadyAnswered)
      return 'border border-gray-300 bg-white text-gray-800'

    if (userSelectedOption === index && !isCorrectAnswer) {
      return 'bg-red-500'
    }

    if (index === correctIndex) {
      return 'bg-green-500'
    }

    return 'border border-gray-300 bg-white text-gray-800'
  }

  const handleAnswer = (index: number) => () => {
    saveAnswer(currentQuestion.id, index)
  }
  return (
    <article className='w-full rounded-lg bg-white p-4 shadow-lg sm:p-8 md:w-96'>
      <h1 className='text-2xl font-semibold text-gray-800'>
        {currentQuestion.question}
      </h1>
      <div className='mt-8 flex flex-col gap-2'>
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            disabled={isUserAlreadyAnswered}
            className={cn(
              'w-full rounded-lg px-4 py-2 text-sm shadow-sm hover:opacity-80 transition-colors duration-200',
              { 'cursor-default hover:opacity-100': isUserAlreadyAnswered },
              getOptionColor(index),
              'disabled:opacity-70'
            )}
            onClick={handleAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>

      {children}
    </article>
  )
}
