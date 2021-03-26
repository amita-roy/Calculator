import React from 'react';
import QuotesData from '../data/quotes';
import './quotes.css';

const Quotes = () => {
  const randomIndex = Math.floor(Math.random() * QuotesData.length);
  const randomQuote = QuotesData[randomIndex];
  return (
    <div className="quotes-page">
      <div className="quote-box">
        <h2>{randomQuote.quote}</h2>
        <p>{`______ ${randomQuote.author}`}</p>
      </div>
    </div>
  );
};

export default Quotes;
