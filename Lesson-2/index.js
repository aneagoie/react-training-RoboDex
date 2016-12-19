import React from 'react';
import ReactDOM from 'react-dom'; //glue between React and the DOM
// import App from './App';
import Hello from './Hello';
import './index.css';

ReactDOM.render(
  <Hello company='Rangle' />,
  document.getElementById('root')
);
