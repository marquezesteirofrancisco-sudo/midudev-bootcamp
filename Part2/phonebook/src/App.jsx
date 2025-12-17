import { useState, useEffect } from 'react'
import Persons from './Persons.jsx'
import Filter from './Filter.jsx'
import PersonsForms from './PersonForm.jsx'
import agendaServices from './services/agenda.jsx'
import Notification from './Notification.jsx'
import './index.css'

const App = () => {

/*   const [persons, setPersons] = useState([
    { firstName: 'Arto Hellas', phoneNumber: '040-123456', id: 1 },
    { firstName: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
    { firstName: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
    { firstName: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 },
    { firstName: 'Francisco', phoneNumber: '39-23-6423122', id: 5 },
  ]) */
  
   const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [Message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  let filterPerson = null

  const Cargando = () => {

    agendaServices.getAll()
    .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setPersons(response.data)
    })
  }

  useEffect(Cargando, [])


  // ***
  // Method to Show error message during a time of 5 seconds
  // ***
  const ShowErrorMessage = (mensage, isError) => {

    console.log( {mensage, isError}, "aqui" )

    setIsError(isError);
    setMessage(mensage);

    setTimeout (() => {setMessage('') ; setIsError(false)  } , 5000 )

  }

  // ****
  // Metodo para añadir la nueva nombre al array
  // ***
  const addNamePhoneBook = (event) => {

    event.preventDefault()
   
    //const exist = persons.includes(newName);
    const exist = persons.some((person) => person.firstName === newName);

    if (exist)
    {
      const replace = window.confirm( `${newName} is already added to phonebook, replace de old number with a new one?` );

      if (!replace) return;

      // primero recojo la persona
      
      const personModify = persons.find((person) => person.firstName===newName);

      window.alert( `${personModify.firstName} vamos a modificarlo ${personModify.phoneNumber}` );

      agendaServices.update(personModify.id, personModify)
      .then(response => {
        console.log(response)

        setNewName('');
        setNewPhone('')
      })

      return;
            
    }

    const newPerson = {firstName:newName, phoneNumber: newPhone, id: persons.length + 1}
    
    agendaServices.create(newPerson)
    .then(response => {
        console.log(response)
    })

    setPersons( persons.concat( newPerson ));

    setNewName('');
    setNewPhone('')

    ShowErrorMessage( `Added ${newPerson.firstName}`, false )

    console.log( "estoy llamando a la funcion", {persons});
  }

  // metodo para establecer el filtro
  const handleInputChange = (event) => {

    const { name, value } = event.target;

    console.log({name})

    if (name === 'name') {
      setNewName(value);
    } else if (name === 'phone') {
      setNewPhone(value);
    } else if (name === 'filter') {
      setNewFilter(value);
    }
  }

  const handleDelete =  (event) => {

    const {value, name } = event.target;

    console.log( {value} , {name})

    if (window.confirm( `Do you really want to delete ${name}`   )) 
    {
        agendaServices.delete(value)
        .then(response => {

          if (response.status === 200) {

            console.log('Person successfully removed');
            ShowErrorMessage( 'Person successfully removed', true )

          } else {

             
            console.error('Error deleting person');
            ShowErrorMessage( 'Error deleting person', true )
          }

        })
        .then((response)=> {

          console.log({response})
        })
        .catch(error => {

           
          console.log(error)
          ShowErrorMessage( error.message, true )

        })
    }
  } 

  if (newFilter) 
     filterPerson = persons.filter((person) => person.firstName.toLowerCase().includes(newFilter.toLowerCase()));
  else
     filterPerson = persons
  
  

  return (
    <>
      <div>
        <h2>Phonebook</h2>

        <Notification message={Message} iserror={isError} />

        <Filter search={newFilter} handleNameFilterPhoneBook={handleInputChange}/>

        <PersonsForms newName={newName} newPhone={newPhone} onChange={handleInputChange} onClick={addNamePhoneBook} />

        <Persons persons={filterPerson} handleDelete={handleDelete}/> 

      </div>    
    </>
  )
}

export default App