import React from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Routing from './routing';


function App() {



  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routing />
      </div>
    </div>
  );
}

export default App;
