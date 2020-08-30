import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
  return (
    <div className="App">
      <header className="App-header">
      <p>I am a React Person</p>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      </header>
    </div>
  );
}
function Person(){
  return (
  <div style={{border:'2px solid red', margin:'10px', padding:'5px 15px'}}>
    <h1>Name: Shakib Al Hasan</h1>
    <h3>Best Of All Time</h3>
  </div>
  )
}


export default App;
