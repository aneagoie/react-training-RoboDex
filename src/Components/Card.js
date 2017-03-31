import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="grow bg-light-green br3 pa3 ma2 dib">
      <img role="presentation" src={`//robohash.org/${id}?size=200x200`} />
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
};
export default Card