import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quote from './Quote';

const QuoteCard = () => {
  const quoteLink =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({ quote: '', author: '' });

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await axios(quoteLink);

      setQuotes(response.data.quotes);
    };

    fetchQuotes();
  }, []);

  const setRandomQuote = (e) => {
    if (e) e.preventDefault();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  useEffect(() => {
    setRandomQuote();
  }, [quotes]);

  const tweetLink = quote
    ? `https://twitter.com/intent/tweet?hashtags=quotes&text=${quote.quote} - ${quote.author}`
    : '';

  return (
    <div className="card" id="quote-box">
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <Quote quote={quote} />
        </blockquote>
        <div id="buttons" className="d-flex justify-content-between mt-4">
          <div className="mr-auto">
            <button
              onClick={setRandomQuote}
              className="btn btn-primary"
              id="new-quote"
            >
              Get a new quote
            </button>
          </div>
          <div className="">
            <a
              href={tweetLink}
              target="_blank"
              rel="noreferrer"
              id="tweet-quote"
              className="btn btn-secondary"
            >
              Tweet quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
