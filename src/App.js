import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './utils/userService';
import NavBar from './components/NavBar/NavBar';

import "react-big-calendar/lib/css/react-big-calendar.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }
  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div>
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
           <div>Hello World!</div> 
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>

    );
  }
}

export default App;
