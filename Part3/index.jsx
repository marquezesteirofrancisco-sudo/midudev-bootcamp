const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config();

const app = express()
const Person = require('./models/persons.jsx')
const notFound = require('./midelware/notFound.jsx')
const handleErrors = require('./midelware/handleErrors.jsx')

app.use(express.json())
app.use(cors())

require('./mongo.jsx')


morgan.token('body', (req) => JSON.stringify(req.body));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));


app.use( (request, response, next) => {

  console.log(request.method)
  console.log(request.path)
  console.log(request.body)
  console.log("-------")
  next()
})

let persons = []

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
  response.send(
    `<p>PhoneBook has info for  ${persons.length } people  </p>`
    + "<br>"
    + `<p> ${new Date().toUTCString()} </p>`
    )
})

app.get('/api/persons', (request, response, next) => {

  Person.find({}).then((persons) => {
    response.json(persons.map((person) => person.toJSON({ versionKey: false })));

  }).catch((error) => {
      next(error)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
    
    const {id} = request.params

    Person.findById(id).then((person) => {
            response.status(201).json(person);    
    }).catch((error) => {
        console.log("error....")
        next(error)
    } )

})

app.delete('/api/persons/:id', (request, response, next) => {

    const {id} = request.params
    
    Person.findByIdAndDelete(id).then(() => {
        response.status(204).end()
    }).catch((error) => {
        next(error)
    })

})

app.post('/api/persons/', (request, response, next) => {

    const person = request.body

    console.log({person})

    // compruebo que tiene todos los datos
    if (!person.firstName) {
        return response.status(400).json(
        { 
            error: 'You have not entered the registration name' 
        })
    }

    if (!person.phoneNumber) {
        return response.status(400).json(
        { 
            error: 'You have not entered the registration number.' 
        })
    }

    // compruebo que no existe el registro con el nombre
    if (persons.some(p => p.firstName === person.firstName))
    {
        console.log("ready exist.....");
        return response.status(401).json(
        { 
            error: 'Ready exist' 
        })
    }

    const newPerson = new Person({ 
      "firstName": person.firstName, 
      "phoneNumber": person.phoneNumber
    })

    newPerson.save().then((savedPerson) => {
        response.status(201).json(savedPerson)
    }).catch((error) => {
        console.log(error.name)
        next(error)
    })

})


app.put('/api/persons/:id', (request, response, next) => {

    const {id} = request.params

    const person = request.body

    const newPerosnInfo = {
      "firstName": person.firstName, 
      "phoneNumber": person.phoneNumber
    }


    Person.findByIdAndUpdate(id, newPerosnInfo, {new: true, runValidators: true}).then((updatedPerson) => {
        console.log(updatedPerson)
        response.json(updatedPerson)
    }).catch((error) => {
        next(error)
    })
})


app.use(notFound)
app.use(handleErrors)


const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})