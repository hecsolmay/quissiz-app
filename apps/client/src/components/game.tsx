import { APP_STATUS } from '../constants'
import useQuestionsData from '../hooks/useQuestionsData'
import { cn } from '../libs/cn'
import { useTestsStore } from '../store/tests'
import { GameActions } from './actions'
import { Button } from './buttons'
import { GameContainer } from './containers'
import Error from './error'
import { GameFooter } from './game-footer'
import ChevronArrow from './icons/chevron-arrow'
import Clock from './icons/clock'
import Crown from './icons/crown'
import Questions from './questions'

export function Game () {
  const test = useTestsStore(state => state.selectedTest)
  const questions = useTestsStore(state => state.questions)
  const currentQuestionIndex = useTestsStore(
    state => state.currentQuestionIndex
  )
  const goToNextQuestion = useTestsStore(state => state.goToNextQuestion)
  const changeAppStatus = useTestsStore(state => state.changeAppStatus)
  const { unanswered } = useQuestionsData()

  if (test === null) {
    return <Error />
  }

  const currentQuestion = questions[currentQuestionIndex]
  const { isUserAlreadyAnswered } = currentQuestion

  return (
    <>
      <GameActions />
      <GameContainer>
        <h1 className='text-pretty text-3xl font-bold'>{test.name}</h1>
        <div className='w-full md:w-96'>
          <p className='mt-2 text-end'>
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </p>
        </div>
        <Questions>
          <div className='mt-4 inline-flex min-h-7 w-full justify-end'>
            {isUserAlreadyAnswered && unanswered === 0 && (
              <Button
                onClick={() => changeAppStatus(APP_STATUS.GAME_OVER)}
                className='border-gray-500 bg-black/80 text-white'
              >
                Ver resultados
              </Button>
            )}

            {isUserAlreadyAnswered && unanswered > 0 && (
              <Button
                className='border-gray-500 bg-black/80 text-white'
                onClick={goToNextQuestion}
              >
                Siguiente Pregunta
              </Button>
            )}
          </div>
        </Questions>

        <GameFooter />
      </GameContainer>
    </>
  )
}

export function GameResults () {
  const currentQuestionIndex = useTestsStore(
    state => state.currentQuestionIndex
  )
  const questions = useTestsStore(state => state.questions)
  const goToNextQuestion = useTestsStore(state => state.goToNextQuestion)
  const goToPreviousQuestion = useTestsStore(
    state => state.goToPreviousQuestion
  )

  const currentQuestion = questions[currentQuestionIndex]
  const { timeAnswered } = currentQuestion
  const initialSeconds = useTestsStore(state => state.initialSeconds)

  const hasPrev = currentQuestionIndex > 0

  return (
    <>
      <GameActions />
      <GameContainer>
        <header>
          <h1 className='text-pretty text-3xl font-bold'>
            Revision de los resultados
          </h1>

          <p className='mt-2 text-end'>
            Pregunta {currentQuestionIndex + 1} de {questions.length}
          </p>

          <div className='inline-flex items-center gap-1'>
            <Clock />
            <span>
              {timeAnswered}s de {initialSeconds}s
            </span>
          </div>
        </header>

        <Questions>
          <div
            className={cn(
              'mt-4 inline-flex min-h-7 w-full justify-between',
              !hasPrev && 'justify-end'
            )}
          >
            {hasPrev && (
              <Button
                onClick={goToPreviousQuestion}
                className='border-gray-500 bg-black/80 px-2 text-white'
              >
                <ChevronArrow direction='left' />
              </Button>
            )}

            <Button
              className='border-gray-500 bg-black/80 px-2 text-white'
              onClick={goToNextQuestion}
            >
              <ChevronArrow direction='right' />
            </Button>
          </div>
        </Questions>

        <GameFooter />
      </GameContainer>
    </>
  )
}

export function GameOver () {
  const { message } = useQuestionsData()
  const changeAppStatus = useTestsStore(state => state.changeAppStatus)
  const changeCurrentQuestion = useTestsStore(
    state => state.changeCurrentQuestion
  )
  const resetGame = useTestsStore(state => state.resetGame)

  const handleClick = () => {
    changeCurrentQuestion(0)
    changeAppStatus(APP_STATUS.GAME_RESULTS)
  }

  return (
    <>
      <GameActions />
      <div className='grid min-h-[70dvh] place-items-center'>
        <div className='min-h-72 rounded-lg bg-white p-4 text-black shadow-lg sm:p-8 md:w-96'>
          <div className='flex w-full justify-center'>
            <Crown className='size-24 font-bold' />
          </div>

          <div className='mt-4 text-center'>
            <h1 className='text-pretty text-xl font-bold'>
              Haz terminado tu examen
            </h1>
            <p className='mt-3 text-slate-600'>{message}</p>
          </div>

          <div className='mt-4 flex w-full justify-center gap-4'>
            <Button onClick={resetGame}>Reiniciar</Button>
            <Button
              onClick={handleClick}
              className='border-gray-500 bg-black/80 px-2 text-white'
            >
              Ver resultados
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
