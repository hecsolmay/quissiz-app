import { useTestsStore } from '../store/tests'
import { LobbyActions } from './actions'

export default function Lobby () {
  const tests = useTestsStore(state => state.tests)
  const setSelectedTest = useTestsStore(state => state.setSelectedTest)

  const createHandleClick = (testId: string) => () => {
    setSelectedTest(testId)
  }

  return (
    <>
      <LobbyActions />
      <div>
        <h1 className='text-center text-4xl font-bold'>
          Selecciona el examen que quieras jugar
        </h1>
        <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {tests.map(test => (
            <div
              key={test.id}
              onClick={createHandleClick(test.id)}
              className='group relative h-64 cursor-pointer overflow-hidden rounded-lg border border-gray-200 p-4 shadow-slate-900'
            >
              <img
                src={test.imageUrl}
                alt={`Imagen del examen ${test.name}`}
                className='absolute inset-0 z-0 aspect-video size-full rounded-lg object-fill transition-all duration-200 group-hover:scale-105 group-hover:opacity-75'
              />
              <div className='absolute bottom-0 left-0 z-10 my-auto flex h-14 w-full items-center rounded-b-lg bg-black/70 px-4 py-2 text-sm text-white'>
                <h2 className='truncate text-lg font-medium'>{test.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
