import React from 'react';

const Hello = (props) => {
  return (
    <div className='f1 tc'>
      <div>Hello World</div>
      <div>Welcome to {props.company}</div>
    </div>
  );
};

export default Hello;
