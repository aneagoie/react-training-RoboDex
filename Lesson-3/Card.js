import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
      <img role="presentation" src={`//robohash.org/${id}?size=200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired

}
export default Card;