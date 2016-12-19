import React from 'react';
import ReactDOM from 'react-dom'; // glue between React and the DOM
import CardList from './CardList';
import './index.css';
import { robots } from './robots';

ReactDOM.render(
  <div>
    <CardList robots={robots} />
  </div>,
  document.getElementById('root')
);
