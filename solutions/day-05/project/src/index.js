import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = months[time.getMonth()].slice(0.3)
  const year =time.getFullYear()
  const date = time.getDate();
  return `${month} ${date} ${year}`
}

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    date,
    author: {
      firstName,
      lastName
    }
  }
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{firstName} {lastName}</p>
        <smal>{showDate(date)}</smal>
      </div>
    </header>
    
  )
}

const Age = (props) => <div>Person is {props.age} years old </div>
const Weight = (props) => <div>Person weight is {props.weight}</div>
const Status = (props) => {
  let message = props.status ? 'True' : 'false'
  return <p>{message}</p>
}

const Skills = (props) => {
  let skills = props.skills.map(skill => <li key="skill">skill</li>)
  return <ul>{skills}</ul>
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
  const sayHi = () => alert('Hi')
  const greetPeople = () => alert('Hello You are awesome')
  const handleTime = () => alert(showDate(new Date()))
  const data = {
    subtitle : 'Js Library',
    author: {
      firstName: 'Kaa',
      lastName: 'Bee',
    },
    date: new Date(),
  }
  let currentYear = 2020
  let birthYear = 2005
  const age = currentYear - birthYear;

  const gravity = 9.81
  const mass = 75

  let status = age >= 18


  return(
  <div className='app'>
    
    <Header 
      welcome = 'Helo Guest'
      title = 'Learn REact'
      data = {data}
    />
    <Age age={age}/>
    <Weight weight={gravity * mass}/>
    <Status status={status}/>
    <Skills skills={['skill 1', 'skill 2', 'skill 3']}/>
    <Button text='Say Hi' onClick = {sayHi} />
    <Button text='click me' onClick = {greetPeople} />
    <Button text='show date' onClick = {() => alert(new Date())} />
    <Button text='show date for human' onClick = {handleTime} />
  </div>
)}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

