import logo from './logo.svg';
import './App.css';
import Name from './Name';
import { useState } from 'react';
import guess from './Guess';

function App() {

  const [potato, setPotato] = useState("oooooooo")

  function moreOs() {
    setPotato(potato + 'o')
    console.log(potato)
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  rand = getRandomInt(10);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={moreOs}>Hello {potato}!</p>
        <Name first="Andrew" last="Duran"></Name>
        <Name first="Andrew" last="2"></Name>
        <Name first="Andrew" last="3"></Name>
        <Name first="Andrew" last="4"></Name>

        <p>Pick a number: </p>
        <input type="text" onChange={} />
        <p onClick={guess(rand, )}>Submit</p>
  
      </header>
    </div>
  );
}

export default App;
