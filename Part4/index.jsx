require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const logger = require('./utils/logger.jsx')
const blogsRouter = require('./controllers/blogs.jsx')
const usersRouter = require('./controllers/users.jsx')
const loginRouter = require('./controllers/login.jsx')

const middleware = require('./middelwares/middelware.jsx')

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
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


app.listen(3001, () => {
  logger.info(`Server running on port ${PORT}`)

})

module.exports = app