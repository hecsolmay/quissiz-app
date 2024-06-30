import { useEffect } from 'react'
import { cn } from '../libs/cn'
import { useTestsStore } from '../store/tests'

interface Props {
  className?: string
}

const Timer = ({  className }: Props) => {
  const secondsLeft = useTestsStore(state => state.secondsLeft)
  const reduceSecondsLeft = useTestsStore(state => state.reduceSecondsLeft)
  const initialSeconds = useTestsStore(state => state.initialSeconds)
  const currentQuestionIndex = useTestsStore(state => state.currentQuestionIndex)
  const questions = useTestsStore(state => state.questions)

  const { isUserAlreadyAnswered } = questions[currentQuestionIndex]

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined
    if (secondsLeft > 0 && !isUserAlreadyAnswered) {
      interval = setInterval(() => {
        reduceSecondsLeft(1)
      }, 1000)
    } else if (secondsLeft === 0 || isUserAlreadyAnswered) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [secondsLeft, isUserAlreadyAnswered])

  const percentage = (secondsLeft / initialSeconds) * 100

  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-md',
        className
      )}
    >
      <CircleProgress progress={percentage} seconds={secondsLeft} />
    </div>
  )
}

function CircleProgress ({
  progress,
  seconds
}: {
  progress: number
  seconds: number
}) {
  const strokeWidth = 10
  const radius = 50
  const circumference = 2 * Math.PI * radius

  return (
    <div className='relative size-12'>
      <svg
        className='absolute left-0 top-0 -rotate-90'
        width='100%'
        height='100%'
        viewBox={`0 0 ${(radius + strokeWidth) * 2} ${
          (radius + strokeWidth) * 2
        }`}
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          className='text-gray-400'
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='none'
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
        />
        <circle
          className='text-white transition-all duration-300 ease-in-out'
          stroke='currentColor'
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={((100 - progress) / 100) * circumference}
          strokeLinecap='round'
          fill='none'
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
        />
      </svg>
      <div className='absolute left-0 top-0 flex size-full items-center justify-center text-lg font-medium text-white'>
        {seconds}
      </div>
    </div>
  )
}

export default Timer
