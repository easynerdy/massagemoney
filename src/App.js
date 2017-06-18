import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import MainMenu from './components/MainMenu';
import Home from './components/Home';
import Client from './components/Client';
import Clients from './components/Clients';
import ClientForm from './components/ClientForm';
import PeopleContainer from './components/PeopleContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
              <MainMenu/>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/clients" component={Clients}/>
                <Route path="/clients/new" component={ClientForm}/>
                <Route path="/clients/:id" component={Client}/>
              </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
