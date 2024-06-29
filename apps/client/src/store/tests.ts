import { create } from 'zustand'
import { APP_STATUS, AppStatus } from '../constants'
import { getTests } from '../services/tests'
import { Test as TestType } from '../types/tests'

interface State {
  appStatus: AppStatus
  tests: TestType[]
  fetchTests: () => Promise<void>
  refreshTests: () => Promise<void>
}

export const useTestsStore = create<State>(set => ({
  appStatus: APP_STATUS.INITIAL,
  tests: [],
  fetchTests: async () => {
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
      set({ appStatus: APP_STATUS.LOADING })
      const data = await getTests()
      set({
        appStatus: APP_STATUS.LOBBY,
        tests: data.data
      })
    } catch (error) {
      console.error(error)
      set({ appStatus: APP_STATUS.ERROR })
    }
  }
}))
