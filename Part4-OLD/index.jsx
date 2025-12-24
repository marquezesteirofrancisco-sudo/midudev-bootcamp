require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const logger = require('./utils/logger.jsx')
const blogsRouter = require('./controllers/blogs.jsx')
const middleware = require('./utils/middelware.jsx')

const {PORT, MONGODB_URI} = require('./utils/config.jsx')


mongoose.connect(MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })


app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})


export default app

