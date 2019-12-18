import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventCalender from './Components/EventCalender';
import MainRoute from './RouteComponents/MainRoute';
import LifeCycleA from './Components/LifeCycleA';
import Main from './Axios Requests/Main';
import EditUserModal from './Axios Requests/EditUserModal';


import {Provider} from 'react-redux'
import store from './Redux/Store'
import UserContainer from './Redux_Components/UserContainer';
import PostForm from './Redux_Components/PostForm';

function App() {
  return (
    <div className="App">

      {/* <MainRoute/> */}
      {/* <EventCalender/> */}
      {/* <LifeCycleA/> */}
      <Main/>

      {/* <Provider store={store}>
        <UserContainer/>
        <PostForm/>
      </Provider> */}

    </div>
  );
} 

export default App;
