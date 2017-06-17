import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainMenu from './components/MainMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="App">
              <MainMenu/>
              <h2>Massage Money</h2>
              <span>Coming Soon!</span>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
