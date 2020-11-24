const rootElement = document.querySelector('.root');
const jsxElement = <h1>Hi!</h1>

const header = (
    <header>
        <h1>Hi</h1>
        <h2>This is site</h2>
        <h3>About React</h3>
        <p>John Doe</p>
        <small>Oct 10, 2020</small>
    </header>
)

const main = (
    <main>
        <p>Prerequisite to get started react.js:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </main>
)

const footer = (
    <footer>
        <p>Copyright 2020</p>
    </footer>
)

const app = (
    <>
        {header}
        {main}
        {footer}
    </>
)
        
ReactDOM.render(app,rootElement);