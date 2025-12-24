const blogsRouter = require('express').Router()
const Blog = require('../models/blog.jsx')
const User = require('../models/user.jsx')
const userExtractor = require('../middelwares/userExtractor.jsx')


// METODO GET
blogsRouter.get('/', async (request, response) => {

  const result = await Blog.find({}).populate('user', { username: 1, name: 1});                                   

  response.json(result)

})


// METODO POST
blogsRouter.post('/', userExtractor,  async (request, response) => {

  console.log(request.body);

  const { title, author, url, likes, userid } = request.body;

  const user = await User.findById(request.userId)
  

  const blog = new Blog(
        {
            title,
            author,
            url,
            likes,
            user: user._id
        }
    )

  savedBlog = await blog.save()

  // guardar el blog en la tabla de usuarios
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save();

  response.status(201).json(savedBlog)

})

// METODO DELETE
blogsRouter.delete('/:id', userExtractor, async (request, response) => {


  console.log("usuari de la request " +  request.userId)

  // tengo que comprobar que el Blog que quiere borrar pertenece al usuario
  const blog = await Blog.findById(request.params.id)

  if (!blog) {
    return response.status(404).json({ error: 'blog not found' })
  }

/*   if (blog.user.toString() !== request.userId)
    return response.status(401).json({ error: 'blog is not this user' })  */

  if (blog.user.toString() !== request.user.id)
    return response.status(401).json({ error: 'blog is not this user' }) 

  const result = await Blog.findByIdAndDelete(request.params.id) 

  response.status(204).end()
  
})



module.exports = blogsRouter

