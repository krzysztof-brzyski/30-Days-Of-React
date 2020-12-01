import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

class Header extends React.Component  {
  constructor(props){
    super (props)
  }

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
    return(
      <header>
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

class TechList extends React.Component{
  constructor(props){
    super (props)
  }
  render(){
    const {techs} = this.props 
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

class Main extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <main>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
        </div>
      </main>
    )
  }
}

class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component{
  state = {
    count: 0,
    image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
  }

  changeAnimal = () => {
    let dogURL =
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
    let catURL =
      'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
    let image = this.state.image === catURL ? dogURL : catURL
    this.setState({ image })
  }

  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  minuSOne = () => {
    this.setState({count: this.state.count - 1})
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
    }

    

    return(
      <div className='app'>
        <div className='animal'>
          <img src={this.state.image} alt='animal' />
        </div>
        <button onClick={this.changeAnimal} class='btn btn-add'>
          Change
        </button>
        {this.state.image}
        {this.state.count}
        <button onClick={this.addOne}>Add one</button>
        <button onClick={this.minuSOne}>Minus one</button>
        <Header data={data} />
        <Main techs = {techs} />
        <Footer date = {new Date()}/>
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


