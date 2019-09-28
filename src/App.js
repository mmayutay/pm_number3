import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginName from './LoginName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="table">
          <p>
            <LoginName />
          </p>

        </div>
      </header>
    </div>
  );
}

export default App;
