import React from 'react';
import Card from './Card/Card';


const CardList = ({robots}) => {
  return (
    <div>
      {
        robots.map((value, index) => {
          return(
            <Card
              key={robots[index].name}
              id={robots[index].id}
              name={robots[index].name}
              email={robots[index].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
