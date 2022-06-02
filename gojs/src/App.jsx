import logo from './logo.svg';
import './App.css';
import React from 'react';

let e = 
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React :00 
    </a>
  </header>
</div>

let variable=22
alert(typeof(variable))
const App = ()=> { return(<>

{getTitle()}
{getElement('Salam beinvenue lcours  RS')}
{getName('Fufu')}
{e}
</>) }

function getName(nom)
{
  return <h1>{nom}</h1>
}
function getElement(title)
{
  return <h1>{title}</h1>
}

function getTitle()
{
  return <h1>{process.env.REACT_APP_TITLE}</h1>
}

export default App;
