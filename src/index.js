
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App'; 
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');

const root = ReactDOMClient.createRoot(rootElement); 

root.render( 
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);



