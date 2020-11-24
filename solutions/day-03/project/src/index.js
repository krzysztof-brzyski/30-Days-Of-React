import React from 'react'
import ReactDOM from 'react-dom'
import welcomeUser from './modules/hiModule'

import photo1 from './images/1.jpg'
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import reactLogo from './images/react_logo.png'


const rootElement = document.querySelector('#root')


const wlecome = 'Welcome to 30days of REACT'
const author = {
  firstName: 'Kaa',
  lastName: 'Bee'
}

const tech = ['HTML', 'JS', 'CSS']
const techPrepare = tech.map((tech, i) => <li key={i}>{tech}</li>)

const user = (
  <div>
    <img src={photo1} alt="user_image"></img>
    <p>{welcomeUser('aaa','bbbb')}</p>
  </div>
)

const headerStyles = {
  padding: '15px',
  background: 'red',
  fontSize: '18px'
}


const header = (
  <header style={headerStyles}>
    <h1>{wlecome}</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>{author.firstName} {author.lastName}</p>
    <small>Oct 2, 2020</small>
  </header>
)

const mainStyles = {
  margin: '10px 0',
  padding: '15px',
  border: '2px solid blue'
}

const num1 = 3
const num2 = 2

const result = ( <p>{num1} + {num2} = {num1 + num2}</p> )

const yearBorn = 1987
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const mainImageStyle={
  maxHeight: "150px"
}

const main = (
  <main style={mainStyles}>
    {user}
    <p>Prerequisite to get started react.js:</p>
    <ul>
      {techPrepare}
    </ul>
    {result}
    {personAge}
    <div>
      <img style={mainImageStyle} src={cssLogo} alt="css logo"/>
      <img style={mainImageStyle} src={htmlLogo} alt="html logo"/>
      <img style={mainImageStyle} src={reactLogo} alt="react logo"/>
    </div>
  </main>
)

const formSubscribeStyles = {
  background: 'lightblue',
  fontFamily: 'Montserrat',
  padding: '15px',
  textAlign: 'center'
}

const formSubscribe = (
  <div style={formSubscribeStyles}>
    <h1>SUBSCRIBE</h1>
    <p>Sing up with your e-mail</p>
    <form>
      <div>
        <input type="text" id="firstName" name="firstName" placeholder="First name"></input>
        <input type="text" id="lastName" name="lastName" placeholder="Last name"></input>
        <input type="text" id="email" name="email" placeholder="E-mail"></input>
      </div>
      <div>
        <button type="submit">Subscribe</button>
      </div>
    </form>
  </div>
)
// JSX element, userCard
const techLabels = tech.map( tech => (<label>tech</label>))
const userCardStyles = {
  padding:'15px',
  background: '#f6f6f6',
  margin: '20px 25%',
  border: '1px solid #f3f3f3',
  borderRadius: '15px'

}
const userCard = (
  <div id="userCard" style={userCardStyles}>
    <img src={photo1} className="userPhoto" alt="user_photo"></img>
    <p>{author.firstName.toUpperCase()} {author.lastName.toUpperCase()}</p>
    <p className="info">Senior Developer, Finland</p>
    <h4 className="skills">SKILLS</h4>
    <div>
      {techLabels}      
    </div>
    <small>Joined of 22.11.2019</small>
  </div>
)
// JSX element, footer
const footerStyles = {
  background: '#999',
  fontColor: 'white'
}
const footer = (
  <footer className="footer" style={footerStyles}>
    <p>Copyright 2020</p>
  </footer>
)

// JSX element, app, a container or a parent
const app = (
  <div>
    {header}
    {userCard}
    {formSubscribe}
    {main}
    {footer}
  </div>
)

ReactDOM.render(app,rootElement)

