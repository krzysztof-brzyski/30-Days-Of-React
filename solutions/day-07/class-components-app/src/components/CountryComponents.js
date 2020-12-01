import React from 'react'

class Country extends React.Component{
    render(){

        const flagStyles = {
            maxWidth: 150
        }

        const {country: {
            name,
            capital,
            languages,
            currency,
            flag
        }} = this.props

        const languagesList = languages.map((lang) => (`${lang}, `))

        return(

           
            <div>
                <img style={flagStyles} src={flag} alt='flag'/>
                <h4>{name}</h4>
                <p>Capital: {capital}</p>
                <p>Languages: {languagesList}</p>
                <p>Currency: {currency}</p>

            </div>
        )
    }
}

export default Country