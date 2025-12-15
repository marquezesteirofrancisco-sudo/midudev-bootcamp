const ShowCountry =  (props) => {

    const {country} = props;

    if (!country)
        return

   // console.log(country.languages)

    return (
        <>
            <div>
                <h1> {country.name.common} </h1>
                <p>Capital {country.capital} </p>
                <p>Area  {country.area} </p> 
                <br/>
                <br/>
                <h1> Languages </h1>

                <ul>
                    {Object.values(country.languages).map((value, index) => (
                    <li key={index}>{value}</li>
                    ))}
                </ul>

                <img src={country.flags.png} />
            </div>
        </>
    )
}

export default ShowCountry;