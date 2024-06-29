import { SECONDS_FOR_QUESTION } from '../constants'
import { useTestsStore } from '../store/tests'
import Error from './error'

export default function Ready () {
  const currentTest = useTestsStore(state => state.selectedTest)
  const closeGame = useTestsStore(state => state.closeGame)
  const startGame = useTestsStore(state => state.startGame)

  if (currentTest === null) {
    return <Error />
  }

  return (
    <section className='grid min-h-[70dvh] place-items-center'>
      <article className='w-full rounded-lg bg-white shadow-lg sm:max-w-lg md:min-w-96'>
        <header className='border-b border-gray-200 px-4 py-5 sm:p-6'>
          <h3 className='text-xl font-medium leading-6 text-gray-900'>
            Reglas de tu examen en linea
          </h3>
        </header>
        <main className='mt-2 space-y-2 border-b border-gray-200 px-4 py-2 text-base text-gray-700 sm:p-6'>
          <p>
            1. Solo tendrás{' '}
            <strong className='font-medium text-red-600'>
              {SECONDS_FOR_QUESTION} segundos
            </strong>{' '}
            para responder cada pregunta
          </p>
          <p>2. Una vez que selecciones tu respuesta no se puede deshacer</p>
          <p>
            3. No puedes seleccionar ninguna opción una vez que acaba el tiempo
          </p>
          <p>4. No puedes salir del Quiz mientras esta corriendo el tiempo</p>
          <p>5. Obtendrás puntos en base en tus respuestas correctas</p>
        </main>

        <footer className='flex flex-wrap justify-end gap-4 px-4 py-5 text-sm text-gray-500'>
          <button
            onClick={closeGame}
            className='w-full rounded-lg border border-slate-300 bg-white px-8 py-2 text-sm text-black transition-colors duration-200 hover:opacity-80 sm:w-auto'
          >
            Salir
          </button>
          <button
            onClick={startGame}
            className='w-full rounded-lg bg-black/90 px-4 py-2 text-sm text-white transition-colors duration-200 hover:opacity-90 sm:w-auto'
          >
            Continuar
          </button>
        </footer>
      </article>
    </section>
  )
}
