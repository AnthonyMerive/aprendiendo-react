import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import AppContainer from './containers/AppContainer'
// import AppRouter from './routers/AppRouter'
// import CategoriasApp from './components/CategoriasApp'  
import './style/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormHooks from './components/FormHooks';

ReactDOM.render(
  <React.StrictMode>

    {/* <AppRouter/> */}

    <FormHooks />
    
  </React.StrictMode>,
  document.getElementById('root')
);

