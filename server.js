const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// load variables
dotenv.config({ path: './config/.env' })

const app = express()

// body parser
app.use(express.json())

// add routes
const books = require('./routes/booksRoutes')
// console.log('books :>> ', books);
app.use('/api/v1/books', books)

const { PORT } = process.env
connectDB();

const server = app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })

process.on('unhandledRejection', (error, _) => {
  if (error) {
    console.log(`ERROR: ${error.message}`);
    server.close(() => process.exit(1))
  }
})


