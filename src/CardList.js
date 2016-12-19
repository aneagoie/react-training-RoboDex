import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const { cardData } = props
  const cardArray = cardData.map(robot => (
    <Card
        key={robot.id}
        name={robot.name}
        email={robot.email}
        id={robot.id}/>
  ))

  return (
    <div>
      {cardArray}
    </div>
  );
}

CardList.propTypes = {
  cardData: React.PropTypes.array.isRequired
}

export default CardList;
