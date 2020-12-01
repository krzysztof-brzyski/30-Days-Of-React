import React from 'react'
import Header from './HeaderComponent'
import Main from './MainComponent'
import Footer from './FooterComponent'

import countries from '../data/countries'



class App extends React.Component{
    state = {
      count: 0,
      background: 'white',
    }

    changeBackground = () => {
        let background = this.state.background === 'white' ? 'darkblue': 'white'
        this.setState({ background })
    }
  
    
    render(){
      const techs = ['HTML', 'CSS', 'JavaScript']
      const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
        date: 'Oct 7, 2020',
        countries: countries
      }

      const appStyles = {
        background: this.state.background
    }
   
      return(
        <div className='app' style={appStyles}>
          <Header data={data} {...this.state} />
          <button onClick={this.changeBackground}>Change background</button>
          <Main techs = {techs} data={data}  {...this.state} />
          <Footer date = {new Date()}/>
          {this.state.background}
        </div>
      )
    }
}

export default App