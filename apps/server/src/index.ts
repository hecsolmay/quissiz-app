import app from './app'
import { PORT } from './config'
import connect from './database/database'

async function main () {
  try {
    // DATABASE CONNECTION
    await connect()

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})

export default app
