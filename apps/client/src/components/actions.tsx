import { APP_STATUS } from '../constants'
import { cn } from '../libs/cn'
import { useTestsStore } from '../store/tests'
import { Button } from './buttons'
import { ArrowLeft } from './icons/arrow'
import ReloadIcon from './icons/reload'
import XMark from './icons/x-mark'
import Timer from './timer'

interface ActionContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

function ActionContainer ({ className, ...props }: ActionContainerProps) {
  return (
    <div
      className={cn(
        'absolute right-0 top-1 z-10 flex h-14 w-full items-center justify-between px-6 py-2 text-sm',
        className
      )}
      {...props}
    />
  )
}

export function LobbyActions () {
  const refreshTests = useTestsStore(state => state.refreshTests)
  const changeAppStatus = useTestsStore(state => state.changeAppStatus)

  return (
    <ActionContainer>
      <button
        title='regresar al inicio'
        onClick={() => changeAppStatus(APP_STATUS.INITIAL)}
      >
        <ArrowLeft className='size-8 transition-colors duration-200 hover:text-slate-500' />
      </button>
      <button title='recargar tests' onClick={refreshTests}>
        <ReloadIcon className='size-8 transition-colors duration-200 hover:text-slate-500' />
      </button>
    </ActionContainer>
  )
}

export function GameActions () {
  const appStatus = useTestsStore(state => state.appStatus)
  const changeAppStatus = useTestsStore(state => state.changeAppStatus)
  const resetGame = useTestsStore(state => state.resetGame)

  if (appStatus === APP_STATUS.GAME_STARTED) {
    return (
      <ActionContainer className='fixed top-4 justify-end'>
        <Timer />
      </ActionContainer>
    )
  }

  if (appStatus === APP_STATUS.GAME_RESULTS) {
    return (
      <ActionContainer>
        <button
          title='regresar al lobby'
          onClick={() => changeAppStatus(APP_STATUS.LOBBY)}
        >
          <XMark className='size-8 transition-colors duration-200 hover:text-slate-500' />
        </button>
        <Button onClick={resetGame} title='Reiniciar juego'>
          Reiniciar
        </Button>
      </ActionContainer>
    )
  }

  return (
    <ActionContainer>
      <button
        title='regresar al lobby'
        onClick={() => changeAppStatus(APP_STATUS.LOBBY)}
      >
        <ArrowLeft className='size-8 transition-colors duration-200 hover:text-slate-500' />
      </button>
    </ActionContainer>
  )
}
