import mongoose from 'mongoose'
import Test from '../models/test'
import connect from './database'
import { seedTests } from './seed-data'

async function seedDatabase () {
  try {
    // connect to database
    await connect()

    // clear all data from the database
    console.log('Clearing database...')
    await Test.deleteMany({})

    // seed data into the database
    console.log('Seeding database...')
    await Test.insertMany(seedTests)

    console.log('Database seeded successfully!')
    await mongoose.connection.close()
  } catch (error) {
    console.error('Error seeding database:', error)
    await mongoose.connection.close()
    process.exit(1)
  }
}

seedDatabase().catch(err => {
  console.error(err)
})
