import React from 'react';

const Card = (props) => {
  const { name, email, id } = props
  return (
    <div className='mw6 center'>
      <div className='fl w-100'>
        <img
            className='fl br4 h3 w3 dib'
            role="presentation"
            src={`https://robohash.org/${id}?size=200x200`}></img>
        <div className="fl w-two-thirds">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <hr/>
    </div>
  );
}

Card.propTypes = {
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
}

export default Card