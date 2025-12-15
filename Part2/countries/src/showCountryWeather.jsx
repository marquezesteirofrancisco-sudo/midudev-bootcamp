import { useState, useEffect } from 'react';
import countryWeatherServices from './services/countries.jsx';


const ShowCountryWeather = (props) => {

  const { country } = props;

  const [countryWeather, setCountryWeather] = useState([]);


  useEffect(() => {
    if (!country) return;
    
    const LoadingCountryWeather = () => {
     
       countryWeatherServices.getByName(country.name.common)
        .then(response => {
          console.log({ response });
          setCountryWeather(response.data);
        })
        .catch(error => {
          console.log({ error });
        }); 
    };


    LoadingCountryWeather();
  }, [country]);


  if (!country) return ;

  
  return (
    <>
      <div>
        <h1>Weather in {country.name.common}</h1>
        {/* Mostrar el clima del país */}
      </div>
    </>
  );

};

export default ShowCountryWeather;