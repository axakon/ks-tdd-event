import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubscribeContainer from './subscribe/subscribeContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SubscribeContainer />
      </header>
    </div>
  );
}

export default App;
