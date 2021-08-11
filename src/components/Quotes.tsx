import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import Marquee from 'react-fast-marquee';
import CDTSection from '../utils/CDTSection';
import { Quote, randomGradient } from '../utils/common';

type QuoteProps = {
  quotes: Quote[];
};

const Quotes = ({ quotes }: QuoteProps): JSX.Element => {
  const randomQuotes: Quote[] = quotes
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <CDTSection header="Hear From Our Alumni">
      <Marquee speed={45} pauseOnHover gradient={false}>
        {randomQuotes.map((quote) => (
          <QuoteBlock quote={quote} key={quote.name} />
        ))}
      </Marquee>
    </CDTSection>
  );
};

type QuoteBlockProps = {
  quote: Quote;
};

const QuoteBlock = ({ quote }: QuoteBlockProps): JSX.Element => {
  const gradient: string[] = randomGradient();
  return (
    <blockquote className="rounded-xl shadow-lg ml-10 max-w-lg">
      <ImQuotesLeft className={`${gradient[1]} ml-10 my-5 text-4xl`} />
      <p className="text-xl font-semibold mx-10 pb-5">{quote.quote}</p>
      <div className={`${gradient[0]} text-lg font-semibold px-10 py-5`}>
        <p className="text-white">
          {quote.name}, &rsquo;{quote.graduationYear}
          <br />
          {quote.job && <span className={gradient[1]}>{quote.job}</span>}
        </p>
      </div>
    </blockquote>
  );
};

export default Quotes;
