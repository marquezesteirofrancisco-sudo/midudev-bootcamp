const PersonsForms = (props) => {

const {newName, newPhone , onChange, onClick } = props

 return (

    <>
        <h1>Add a new </h1>
        <form>
          
          <div>
            
            Name: <input name="name" value={newName} onChange={onChange} />
            <br/>
            Number: <input name="phone"  value={newPhone} onChange={onChange} />
          </div>
          
          <div>
            <button type="submit" onClick={onClick}>add</button>
          </div>

        </form>


    </>
    
 )
}


export default PersonsForms