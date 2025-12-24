const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  username: { type: String, required: true , unique: true, minlength: 3},
  name: { type: String, required: true},
  passwordHash: { type: String, required: true},
  blogs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
  }]
})  


blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {

    if (returnedObject._id) {
      returnedObject.id = returnedObject._id.toString();
    }
    
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('User', blogSchema)

