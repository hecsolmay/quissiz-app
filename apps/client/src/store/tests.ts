import { create } from 'zustand'
import { APP_STATUS, AppStatus, SECONDS_FOR_QUESTION } from '../constants'
import { getRandomQuestions } from '../libs/utils'
import { getTests } from '../services/tests'
import { QuestionWithAnswer, Test as TestType } from '../types/tests'

interface Actions {
  fetchTests: () => Promise<void>
  refreshTests: () => Promise<void>
  setSelectedTest: (testId: string) => void
  startGame: () => void
  changeAppStatus: (appStatus: AppStatus) => void
}

interface State {
  appStatus: AppStatus
  tests: TestType[]
  selectedTest: TestType | null
  questions: QuestionWithAnswer[]
  secondsLeft: number
}

type StateActions = Actions & State

const initialState: State = {
  appStatus: APP_STATUS.INITIAL,
  tests: [],
  selectedTest: null,
  questions: [],
  secondsLeft: 0
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const useTestsStore = create<StateActions>((set, get) => ({
  ...initialState,
  fetchTests: async () => {
    if (get().tests.length > 0) {
      set({ appStatus: APP_STATUS.LOBBY })
      return
    }

    if (get().appStatus === APP_STATUS.LOADING) {
      return
    }

    try {
      set({ appStatus: APP_STATUS.LOADING })

      const data = await getTests()
      set({
        appStatus: APP_STATUS.LOBBY,
        tests: data.data
      })
    } catch (error) {
      set({ appStatus: APP_STATUS.ERROR })
      console.error(error)
    }
  },
  refreshTests: async () => {
    try {
      if (get().appStatus === APP_STATUS.LOADING) {
        return
      }
      set({ appStatus: APP_STATUS.LOADING })
      await delay(3000)
      const data = await getTests()
      set({
        appStatus: APP_STATUS.LOBBY,
        tests: data.data
      })
    } catch (error) {
      console.error(error)
      set({ appStatus: APP_STATUS.ERROR })
    }
  },
  changeAppStatus: (appStatus: AppStatus) => {
    set({ appStatus })
  },
  setSelectedTest: (testId: string) => {
    const { tests } = get()

    const foundTest = tests.find(test => test.id === testId)

    if (foundTest === undefined) {
      return
    }

    set({
      selectedTest: foundTest,
      appStatus: APP_STATUS.READY
    })
  },
  startGame: () => {
    const { selectedTest } = get()

    if (selectedTest === null) {
      return
    }

    const { questions } = selectedTest

    const mappedQuestions = getRandomQuestions(questions)
    set({
      appStatus: APP_STATUS.GAME_STARTED,
      questions: mappedQuestions,
      secondsLeft: SECONDS_FOR_QUESTION
    })
  }
}))
