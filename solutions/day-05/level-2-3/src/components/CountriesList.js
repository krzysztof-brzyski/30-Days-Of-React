import Bar from './Bar'

const countriesListStyles = {
    width: '80%',
    margin: '15px 10%'
}

const CountriesList = ({countries}) => {

    const worldpopulation = countries[0].population

    const countPercentagePopulation = (population) => (Math.floor((population / worldpopulation)*100))

    console.log(countries)
    const countriesList = countries.map(country => {
        country.worldPercentage = countPercentagePopulation(country.population)
        return <Bar country={country} key={country.country}/>
    })
    return(
        <div style={countriesListStyles}>
            <h2>World Population</h2>
            <p>Ten most populated countries</p>
            {countriesList}
        </div>
        )
}

export default CountriesList