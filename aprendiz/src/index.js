import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import AppContainer from './containers/AppContainer'
// import AppRouter from './routers/AppRouter'
// import CategoriasApp from './components/CategoriasApp'  
import './style/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import FormHooks from './components/FormHooks';
// import Memorize from './components/Memorize'
import { MemoHook } from './components/MemoHook'
ReactDOM.render(
  <React.StrictMode>

    {/* <AppRouter/> */}

    {/* <FormHooks /> */}

   <MemoHook />
    
  </React.StrictMode>,
  document.getElementById('root')
);

