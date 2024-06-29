import mongoose from 'mongoose'
import Test from '../models/test'
import { type Test as TestType } from '../types/tests'
import connect from './database'

const seedTests: TestType[] = [
  {
    name: 'Sample Test 1',
    imageUrl: 'http://example.com/image1.jpg',
    createdAt: new Date(),
    questions: [
      {
        question: '¿Cual es la suma de 2 + 2?',
        options: ['3', '4', '5'],
        correctIndex: 1
      },
      {
        question: '¿Cual es la capital de Francia?',
        options: ['Berlin', 'London', 'Paris'],
        correctIndex: 2
      }
    ]
  },
  {
    name: 'Sample Test 2',
    imageUrl: 'http://example.com/image2.jpg',
    createdAt: new Date(),
    questions: [
      {
        question: 'Cual es la suma de 3 + 3?',
        options: ['5', '6', '7'],
        correctIndex: 1
      },
      {
        question: '¿Cual es la capital de Alemania?',
        options: ['Berlin', 'London', 'Paris'],
        correctIndex: 0
      }
    ]
  }
]

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
