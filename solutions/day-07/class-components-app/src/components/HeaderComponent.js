import React from 'react';



class Header extends React.Component  {

  
    greetPeople = ()=> {
      alert('Hello there')
    }

    render(){
      const {
        welcome,
        title,
        subtitle,
        author: {firstName, lastName},
        date
      } = this.props.data

      let background = this.props.background
      background === 'white' ? background = 'lightblue' : background = 'darkblue'
      let textColor = (background === 'lightblue' ? 'black' : 'white')
      
      const headerStyles={
        background: background,
        padding: '15px 10%',
        color: textColor
    }

      return(
        <header style={headerStyles}>
          <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{firstName} {lastName}</p>
            <small>{date}</small>
            <button onClick={this.greetPeople}>Click me!</button>
          </div>
        </header>
      )
    }
  }

  export default Header