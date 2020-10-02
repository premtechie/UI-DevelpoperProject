import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import ProfileEdit from './Components/ProfileEdit/ProfileEdit';
import ProfileUpdated from './Components/ProfileUpdated/ProfileUpdated';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div className="App">
        <div className='header-component'>
          <Header/>
        </div>
        <Switch>
          <Route path='/' exact component={RegisterForm} />
          <Route path='/editprofile' exact component={ProfileEdit} />
          <Route path='/profileupdate' exact component={ProfileUpdated} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
