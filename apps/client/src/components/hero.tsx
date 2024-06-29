import { useTestsStore } from '../store/tests'
import { Button } from './buttons'

export default function Hero () {
  const fetchTests = useTestsStore(state => state.fetchTests)

  const handleClick = () => {
    fetchTests()
  }

  return (
    <div className="flex min-h-[75dvh] flex-col items-center justify-center px-4 py-16 text-center text-white">
      <h1 className='max-w-[26ch] text-pretty text-4xl font-bold  md:text-6xl'>Bienvenido a quissiz plataforma de exámenes</h1>
      <p className='mt-6 text-balance text-xl opacity-70 md:mt-10'>Encuentra formas de aprender de manera rápida y fácil.</p>
      <Button onClick={handleClick} className='mt-8 md:mt-12'>Comienza ahora</Button>
    </div>
  )
}
