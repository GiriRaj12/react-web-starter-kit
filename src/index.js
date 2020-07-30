import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/App/App.js';
import './index.css'
import Store from './Services/ContextServices/Store.js';
import { combinedReducer } from './Services/ContextServices/SampleReducer/index.js';

ReactDOM.render(
  <React.StrictMode>
    <Store store={combinedReducer}>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
