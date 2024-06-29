import { API_URL } from '../config'
import { TestResponse } from '../types/tests'

export async function getTests () {
  const response = await fetch(`${API_URL}/tests`)
  const isSuccessStatus = [200, 201, 204].includes(response.status)

  if (!response.ok || !isSuccessStatus) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json() as TestResponse
  return data
}
