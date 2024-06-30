import Background from './components/background'
import Error from './components/error'
import { Game, GameOver, GameResults } from './components/game'
import Hero from './components/hero'
import Loading from './components/loading'
import Lobby from './components/lobby'
import Ready from './components/ready'
import Socials from './components/socials'
import { APP_STATUS } from './constants'
import { useTestsStore } from './store/tests'

export default function App () {
  const appStatus = useTestsStore(state => state.appStatus)

  return (
    <>
      <Background />
      <main className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        {appStatus === APP_STATUS.INITIAL && <Hero />}
        {appStatus === APP_STATUS.LOADING && <Loading />}
        {appStatus === APP_STATUS.LOBBY && <Lobby />}
        {appStatus === APP_STATUS.READY && <Ready />}
        {appStatus === APP_STATUS.GAME_STARTED && <Game />}
        {appStatus === APP_STATUS.GAME_OVER && <GameOver />}
        {appStatus === APP_STATUS.GAME_RESULTS && <GameResults />}
        {appStatus === APP_STATUS.ERROR && <Error />}
      </main>

      <Socials />
    </>
  )
}
