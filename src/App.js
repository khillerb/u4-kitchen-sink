import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserPage from './pages/UserPage/UserPage'
import CalendarPage from './pages/CalendarPage/CalendarPage'
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import EventPage from './pages/EventPage/EventPage';
import userService from './utils/userService';
import NavBar from './components/NavBar/NavBar';



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
      <div className= "container">
        <NavBar
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
          this.state.user ?
          <div>
          <h2>Hello! Welcome to Simple Calendar</h2>
          Click My Events to get started!
          </div> 
          :
          <div>
           <h2>Hello! Welcome to Simple Calendar</h2>
           Please Log in or Sign up to get started!
           </div> 
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
          <Route exact path='/calendar' render={({history}) => 
            <CalendarPage
              history={history}
              user={this.state.user}
            />
          }/>
          <Route exact path='/user' render={({history}) => 
            <UserPage
              history={history}
              user={this.state.user}
            />
          }/>
          <Route exact path='/calendar/events' render={({history}) => 
            <EventPage
              history={history}
              user={this.state.user}
            />
          }/>
        </Switch>
      </div>

    );
  }
}

export default App;
