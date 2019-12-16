import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventCalender from './Components/EventCalender';
import MainRoute from './RouteComponents/MainRoute';

function App() {
  return (
    <div className="App">
    
       <MainRoute/>
        {/* <EventCalender/> */}
    
    </div>
  );
}

export default App;
