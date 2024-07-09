import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Main from './components/Main';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
