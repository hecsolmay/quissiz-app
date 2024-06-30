import app from '../src/app'
import { PORT } from '../src/config'
import connect from '../src/database/database'

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
