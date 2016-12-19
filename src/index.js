import React from 'react';
import ReactDOM from 'react-dom'; // glue between React and the DOM
import App from './App';
import './index.css';
import { robots } from './robots';

ReactDOM.render(
  <App robots={robots} />,
  document.getElementById('root')
);
