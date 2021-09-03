import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import AppContainer from './containers/AppContainer'
import './style/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>

    <AppContainer />

  </React.StrictMode>,
  document.getElementById('root')
);

