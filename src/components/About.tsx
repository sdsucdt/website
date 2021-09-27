import React from 'react';
import aboutData from '../content/about.json';

const Details = (): JSX.Element => {
  return (
    <div className="pt-96 max-w-6xl mx-auto flex flex-col gap-10 justify-items-end">
      {aboutData.details.map((card, index) => (
        <div
          className={`max-w-lg ${index % 2 == 0 ? 'mr-auto' : 'ml-auto'}`}
          key={card.header}
        >
          <h1 className="text-3xl pb-5">{card.header}</h1>
          <p className="text-xl text-gray-100">{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Details;
