import { useTestsStore } from '../store/tests'
import { Button } from './buttons'

export default function Error () {
  const refreshTests = useTestsStore(state => state.refreshTests)

  const handleClick = () => {
    refreshTests()
  }

  return (
    <div className='flex min-h-[70dvh] flex-col items-center justify-center gap-4'>
      <h1 className='text-6xl font-bold'>Error</h1>
      <p className='text-2xl'>Algo ha salido mal 😥</p>
      <Button onClick={handleClick} className='mt-4'>Inténtelo de nuevo</Button>
    </div>
  )
}
