const Persons = (props) => {

const {persons, handleDelete} = props

if (!persons || persons.length === 0) {
    return <div>No persons to display</div>
}

 return (

    <>
        <div>

          <h2>Number</h2>

          <ul>
            {persons.map(person => 
              <li key={person.id}> {person.firstName}  {person.phoneNumber}  
                <button name={person.firstName}  value={person.id} onClick={handleDelete} >Delete</button>
              </li>
             
            )}
          </ul>

        </div>


    </>
    
 )
}


export default Persons