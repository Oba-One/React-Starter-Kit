import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';

const theme = createMuiTheme({});


class App extends Component {
  render() {
    return (
      <Router>
        <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <Fragment className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React {this.props.name}</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </Fragment>
        </MuiThemeProvider>
        </CssBaseline>
      </Router>
    );
  }
}

export default App;


