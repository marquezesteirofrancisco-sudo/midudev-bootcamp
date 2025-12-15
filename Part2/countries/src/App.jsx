import { useState, useEffect } from 'react'
import countryServices from './services/countries.jsx'
import Countries from './services/countries.jsx'
import ListCountries from './listCountries.jsx'
import ShowCountry from './showCountry.jsx'
import ShowCountryWeather from './showCountryWeather.jsx'


function App() {

    const [nameCountry, setNameCountry] = useState('')
    const [countries, setCountries] = useState([])
    const [showCountry, setShowCountry] = useState(false)
    const [CountryToShow, setCountryToShow] = useState([])

/*     const [countries, setCountries] = useState([
      {       	name: {
        common: "Kuwait",
        official: "State of Kuwait",
        nativeName: {
          ara: {
            official: "دولة الكويت",
            common: "الكويت"
          }
        } }
      },
      {       	name: {
        common: "Kuwait",
        official: "State of Kuwait",
        nativeName: {
          ara: {
            official: "دولة الكويت",
            common: "الكويت"
          }
        } }
      }
    ]) */

    const Cargando = () => {
  
      countryServices.getAll()
      .then(response => {

          setCountries(response.data)

          console.log({response})
      }).catch( error  => {
        console.log({error})
      })
    }


  useEffect(Cargando, [])

  const handleInputChange = (event) => {

    const {name, value} = event.target;

    setShowCountry(false)

    if (name === "country")
      setNameCountry(value)

    console.log({name , value})
    
  }


  const handleShowCountry = (event) => {

    const {name, value} = event.target;

    const countrytoshow = countries.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()));

    setShowCountry(true)

    setCountryToShow(countrytoshow)
    
    
    console.log({name , value, showCountry, countrytoshow})
    
  }

   
  const filterCountries = countries.filter(country => country.name.common.toLowerCase().includes(nameCountry.toLowerCase()));

  console.log("filtro",  filterCountries.length)

  return (
    <>
      <div>
        Find countries <input type='text' name='country' value={nameCountry} onChange={handleInputChange}></input>
      </div>

      <ListCountries countries={filterCountries} handleShowCountry={handleShowCountry}/>

      <div>
          <ShowCountry country = { showCountry ? CountryToShow[0] : null}/>
          <ShowCountryWeather country = { showCountry ? CountryToShow[0] : null}/>
      </div>
      
    </>
  )
}

export default App
