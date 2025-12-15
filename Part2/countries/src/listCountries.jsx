import ShowCountry from "./showCountry";

const ListCountries = (props) => {

    const {countries, handleShowCountry} = props;

    if (countries.length === 1) {
        
        const country = countries[0];

        console.log(country.languages)

        return (
            <>
                <div>
                    <ShowCountry country = {countries[0]}/>
                </div>
            </>
        )

    } else if (countries.length < 10) {
        
        return (
            <>
                <div>
                    <h2>Filter Countries</h2>
                    <ul>
                        {countries.map(country => 
                            <li key={country.ccn3}> {country.name.common} 
                                <button value={country.name.common} onClick={handleShowCountry}>Show</button>
                            </li>
                        )}
                    </ul>
                </div> 
            </>
        )

    } else {
        return (
            <>
                <div>
                    <p>Too many matches, especific another filter</p>
                </div> 
            </>
        )
    }

}

export default ListCountries;