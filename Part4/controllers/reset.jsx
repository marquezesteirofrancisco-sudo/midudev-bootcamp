const resetRouter = require('express').Router();
const Blog = require('../models/blog.jsx');
const User = require('../models/user.jsx'); 



// METODO GET
resetRouter.get('/',  async (request, response) => {
 

  await Blog.deleteMany({});
  await User.deleteMany({});  

  response.status(201).json({ message: 'database reset completed' })

})

module.exports = resetRouter;