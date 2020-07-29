import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App.js';
import './index.css'
import Store from './services/ContextServices/Store.js';

let sampleStore = { name: () => { return 'Giri' } }

ReactDOM.render(
  <React.StrictMode>
    <Store store={sampleStore}>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);
