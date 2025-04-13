import React, { use, useState } from 'react';
import Country from './country';
import './countries.css'

const Countries = ({countriespromis}) => {

    const countries = use(countriespromis)

    const [visitedCountries, setVisitedCountries] = useState([])
    const handleVisitedCountries = (country)=>{
          
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    
    return (
        <div >

            <h1>Travelling countries: {countries.length} </h1>
            <h2>Travelled so far: {visitedCountries.length} </h2>

            <div className='countries'>
            {
                countries.map(country=> <Country key={country.cca3} 
                    handleVisitedCountries={handleVisitedCountries}  country={country} ></Country>  )
            }
            </div>
            
        </div>
    );
};

export default   Countries;