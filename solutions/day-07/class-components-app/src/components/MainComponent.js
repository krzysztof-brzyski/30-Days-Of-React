import React from 'react';

import Techs from './TechsComponent';
import Country from './CountryComponents';

const mainStyles={
    padding: '15px 10%'
}

class Main extends React.Component{
  constructor(props, context) {
    super (props)
    this.state = {
      country: this.chooseRandomCountry(props.data.countries)
    }
  }
    
    chooseRandomCountry = (countries) => {
      const country = Math.floor((Math.random()*countries.length))
      // this.setState({country: country})
      return country
    }

    render(){
      const techs = this.props.techs
      const {countries} = this.props.data
      const country = countries[this.state.country]

      return(
          
        <main style={mainStyles}>
          <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>
                <Techs techs={techs} />
                <Country country={country}/>
                <button onClick={()=>this.setState({country: this.chooseRandomCountry(countries)})}>change country</button>
            </ul>
          </div>
        </main>
      )
    }
  }

  export default Main