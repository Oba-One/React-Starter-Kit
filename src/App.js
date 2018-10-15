 /* REACT IMPORTS */
import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

 /* GRAPHQL IMPORTS */
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

 /* MATERIAL-UI IMPORTS */
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.scss';

/* SERVER URI FOR GRAPHQL DEVELOPMENT SERVER */
const client = new ApolloClient({
  uri: "http://localhost:4000"
});

/* MATERIAL-UI THEME OBJECT FOR GLOBAL STYLES */
const theme = createMuiTheme({});

class App extends Component {
  render() {
    return (

      /* GRAPHQL & ROUTER WRAPPER */
      <ApolloProvider client={client}>
      <Router>

        {/* MATERIAL-UI THEME & BASE WRAPPER */}
        <CssBaseline>
        <MuiThemeProvider theme={theme}>
          
          {/* APP FRAGMENT & ROUTES WRAPPER */}
          <Fragment>
            <div>
              <h1>Hello</h1>
            </div>
          </Fragment>

        </MuiThemeProvider>
        </CssBaseline>

      </Router>
      </ApolloProvider>

    );
  }
}

export default App;


