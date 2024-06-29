export const APP_STATUS = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  LOBBY: 'LOBBY',
  READY: 'READY',
  ERROR: 'ERROR',
  GAME_STARTED: 'GAME_STARTED',
  GAME_OVER: 'GAME_OVER'
}

export type AppStatus = typeof APP_STATUS[keyof typeof APP_STATUS]
