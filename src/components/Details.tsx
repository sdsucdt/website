import React from 'react';
import CDTSection from '../utils/CDTSection';
import { CardDetail } from '../utils/common';


type DetailsProps = {
  cards: CardDetail[];
};

const Details = ({ cards }: DetailsProps): JSX.Element => {
  return (
    <CDTSection header="Club Details">
      <div className="grid grid-cols-4 text-gray-700 dark:text-gray-200 mx-96">
        {cards.map((card) => {
          return (
            <div
              className="rounded overflow-hidden shadow-lg mx-5"
              key={card.header}
            >
              {card.image}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.header}</div>
                <p className="text-base">{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </CDTSection>
  );
};

export default Details;
