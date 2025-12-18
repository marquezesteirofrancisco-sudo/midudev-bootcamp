require('dotenv').config();
const mongoose = require('mongoose');

const conectionString =  process.env.MONGODB_URI

mongoose.connect(conectionString)
    .then(() => {
        console.log('Conectado a MongoDB')          

        }).catch((error) => {
        console.log('Error al conectar a MongoDB:', error.message)
    });


  // EXAMPLE PERSON SCHEMA 
  /*   { 
      id: 1,
      firstName: "Arto Hellas.", 
      phoneNumber: "040-123456"
    },
    { 
      id: 2,
      firstName: "Ada Lovelace", 
      phoneNumber: "39-44-5323523"
    },
    { 
      id: 3,
      firstName: "Dan Abramov", 
      phoneNumber: "12-43-234345"
    },
    { 
      id: 4,
      firstName: "Mary Poppendieck", 
      phoneNumber: "39-23-6423122"
    },
    { 
      id: 5,
      firstName: "Francisco Marquez", 
      phoneNumber: "39-23-6423122"
    }
    ,
    { 
      id: 6,
      firstName: "Francisco Marquez Estteve", 
      phoneNumber: "39-23-6423122"
    } */