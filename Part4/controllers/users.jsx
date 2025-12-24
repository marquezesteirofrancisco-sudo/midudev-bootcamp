const userRouter = require('express').Router()
const User = require('../models/user.jsx')
const bcrypt = require('bcrypt')

userRouter.get('/', async (request, response) => {

  const users = await User.find({}).populate('blogs', {title: 1, author: 1} )
  
  response.json(users)

})

userRouter.post('/', async (request, response, next) => 
{
 
    const body = request.body;

    if (!body.password) {
      return response.status(401).json({ error: 'password son requeridos' });
    }


    if (body.password.length < 10) {
      return response.status(401).json({ error: 'password must have 10 caracters' });
    }


    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User(
        {
          username: body.username,
          name: body.name,
          passwordHash
        }
      )


      const result = await user.save()
      response.status(201).json(result)
 
})


userRouter.delete('/:id', (request, response) => {
  User
    .findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
  
})



module.exports = userRouter

