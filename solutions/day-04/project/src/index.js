import React from 'react'
import ReactDOM from 'react-dom'
import image from './images/kermit.jpg'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const firstName = 'Asabeneh'
const lastName = 'Yetayeh'
const date = 'Oct 3, 2020'

const buttonStyles = {
  padding: '10px 30px',
  background: 'red',
  border: 'none',
  borderRadius: 5
}
const Button = () => <button style={buttonStyles}>aaction</button>


const hexaColor = () => {
  let str = '0123456789abcdef'
  let color =''
  for(let i = 0; i < 6; i++){
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>
 

const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{firstName} {lastName}</p>
      <small>{date}</small>
      <Button/>
    </div>
  </header>
)

const user = {
  firstName: 'Kaa',
  lastName: 'Bee',
  role: 'Senior Developer',
  country: 'Finland',
  skills: ['CSS', 'HTML', 'React', 'JavaScript']
}

const UserSkills = () => {
  const skills = user.skills.map((skill) => <span className='skill-span'>{skill}</span>)
  return skills
}

const UserCard = () => (
  <div className='user-card'>
    <img style={{borderRadius: '50%'}} src={image} alt='user'/>
    <h2>{user.firstName} {user.lastName}</h2>
    <UserSkills/>
  </div>
)

const TechList = () => {
  const techs = ['tech1','tech2','tech3']
  const techFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techFormatted
}

const HexaDiv = () => {
  const color = hexaColor();
  return( 
    <div style={
      {backgroundColor: color,
      padding: '30px',
      textAlign: 'center',
      margin: 15 
    }}>
      {color}
    </div>
  )
}

const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>coś tam</p>
      <ul>
        <TechList/>
      </ul>
      <HexaDiv/>
      <HexaDiv/>
      <HexaDiv/>
      <UserCard></UserCard>
    </div>
  </main>
)

const Footer = () => (
  <footer>
    <div className='footer-wraper'>
      <p>Copy 2020</p>
    </div>
  </footer>
)

const App = () => (
  <>
    <Header/>
    <Main/>
    <Footer/>
  </>
)

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>,rootElement);