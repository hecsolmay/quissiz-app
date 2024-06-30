import useQuestionsData from '../hooks/useQuestionsData'

export function GameFooter () {
  const { correct, incorrect, unanswered } = useQuestionsData()

  return (
    <div>
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
    </div>
  )
}
