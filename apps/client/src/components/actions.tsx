import { APP_STATUS } from '../constants'
import { cn } from '../libs/cn'
import { useTestsStore } from '../store/tests'
import { ArrowLeft } from './icons/arrow'
import ReloadIcon from './icons/reload'

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
      <button onClick={() => changeAppStatus(APP_STATUS.INITIAL)}>
        <ArrowLeft className='size-8 transition-colors duration-200 hover:text-slate-500' />
      </button>
      <button onClick={refreshTests}>
        <ReloadIcon className='size-8 transition-colors duration-200 hover:text-slate-500' />
      </button>
    </ActionContainer>
  )
}
