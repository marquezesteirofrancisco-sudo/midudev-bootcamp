require('dotenv').config();

const mongoose = require('mongoose');
const { argv } = require('node:process');
const Person = require('./models/persons.jsx')

let conectionString =  process.env.MONGODB_URI
let passWord = null;
let showPersons = false; 
let createNewPerson = false; 
let firstName = null
let phoneNumber = null


// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});


console.log(`${argv.length}`);




// if there are 5 arguments, for creatre new person
if (argv.length === 5) 
{
  createNewPerson = true;
  passWord = argv[2];
  firstName = argv[3];
  phoneNumber = argv[4];
}

// if there are 5 arguments, for creatre new person
if (argv.length === 3)
{ 
  passWord = argv[2];
  showPersons = true;
}


console.log(showPersons);  
console.log(createNewPerson);  
console.log(firstName)
console.log(phoneNumber)


if (showPersons || createNewPerson) {

    conectionString =   `mongodb+srv://marquezesteirofrancisco_db_user:${passWord}@cluster0.bbbhjgg.mongodb.net/midudb?appName=Cluster0`
    
    mongoose.connect(conectionString)
        .then(() => {
            console.log('Conectado a MongoDB')          

            }).catch((error) => {
            console.log('Error al conectar a MongoDB:', error.message)
        });
  }


// if wont show persons
if (showPersons) {

    Person.find({}).then((persons) => {

    console.log("Phonebook:")

    const listaPersonas = persons.map((person) => (
         console.log( person.firstName + " " + person.phoneNumber )
      ));

    }).catch((error) => {
        console.log('Error al buscar las personas:', error);
    }); 

}


// if want to create new person
if (createNewPerson) {

  const newPerson = new Person({ 
    "firstName": firstName, 
    "phoneNumber": phoneNumber
  })

  newPerson.save().then((savedPerson) => {

      console.log(`added ${firstName} number ${phoneNumber} to phonebook`)
      
      response.status(201).json(savedPerson)
  }) 

}




/*
if (passWord) {
     conectionString =   `mongodb+srv://marquezesteirofrancisco_db_user:${passWord}@cluster0.bbbhjgg.mongodb.net/midudb?appName=Cluster0`
}

mongoose.connect(conectionString)
    .then(() => {
        console.log('Conectado a MongoDB')          

        }).catch((error) => {
        console.log('Error al conectar a MongoDB:', error.message)
    });


  const newPerson = new Person({ 
    "firstName": "francsco", 
    "phoneNumber": "person.phoneNumber"
  })

  newPerson.save().then((savedPerson) => {
      response.status(201).json(savedPerson)
  }) */

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