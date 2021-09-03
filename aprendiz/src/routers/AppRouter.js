import React, { Component } from 'react'
import Registro from '../components/Registro'
import AppContainer from '../containers/AppContainer'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";



export default class AppRouter extends Component {
    render() {
        return (
          <Router>
              <Switch>
                  <Route 
                    exact
                    path='/registro'
                    component={
                        Registro
                    }

                  />

                  <Route 
                    exact
                    path='/'
                    component={
                        AppContainer
                    }

                  />
              </Switch>
          </Router>
        )
    }
}
