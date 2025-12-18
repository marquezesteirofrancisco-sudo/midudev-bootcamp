  const {model, Schema} = require('mongoose');

  const noteSchema = new Schema({
    firstName: {
      type: String,
      minLength: 5,
      required: true
    },
    phoneNumber: {
      type: String,
      minLength: [8, 'Phone number must be at least 8 characters long'],
      required: [true, 'User phone number required'],

      validate: {
        validator: function(v) {
          return /\d{2}-\d{7}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
        }},

    important: Boolean
   
  });

  const Person = model('Person', noteSchema);

  module.exports = Person