import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventCalender from './Components/EventCalender';
import MainRoute from './RouteComponents/MainRoute';
import LifeCycleA from './Components/LifeCycleA';
import Main from './Axios Requests/Main';
import EditUserModal from './Axios Requests/EditUserModal';

function App() {
  return (
    <div className="App">

      {/* <MainRoute/> */}
      {/* <EventCalender/> */}
      {/* <LifeCycleA/> */}
      <Main/>

    </div>
  );
}

export default App;
