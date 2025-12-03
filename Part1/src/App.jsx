import './App.css'
import Mensaje from './Mensaje.jsx'
import Description from './Description.jsx'

const App = () => {

  const a = 2
  const b = 3

  return (
    /*
      <div>
        {mensaje + " evaluacion en JSX"}
      </div>

      */
      <>
        <Mensaje color="Red" messaje="Estamos trabajando"/>
        <Mensaje color="Black" messaje="en un curso "/>
        <Mensaje color="Blue" messaje="de REACT"/>
        <Description/>

        <strong>Estamos trabajando en ello</strong>

        <div>

          <p>El resultado es :</p>
          {a+b}

        </div>

      </>
  )
}

export default App
