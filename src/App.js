import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainMenu from './components/MainMenu';
import './App.css';
import Clients from './components/Clients';
import ClientForm from './components/ClientForm';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
              <MainMenu/>
              <Route exact path="/clients" component={Clients}/>
              <Route path="/clients/new" component={ClientForm}/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
