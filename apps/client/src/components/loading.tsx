import { LobbyActions } from './actions'
import LoadingSpinner from './icons/loading-spinner'

export default function Loading () {
  return (
    <>
      <LobbyActions />
      <div className='grid min-h-[70dvh] w-full place-items-center'>
        <LoadingSpinner />
      </div>
    </>
  )
}
