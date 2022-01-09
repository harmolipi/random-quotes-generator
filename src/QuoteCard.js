import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteCard = () => {
  const quoteLink1 =
    'https://gist.githubusercontent.com/christianvuerings/6624542/raw/379a1943f1881b3d3d4ca3e3f456df4d4608c9e7/quotes.json';
  const quoteLink2 =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    // const response = await fetch(
    //   'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    // );
    // const quotes = await response.json();

    const response = await axios(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    );

    setQuotes(response.data.quotes);
  };

  // useEffect(() => {
  //   fetchQuotes().then((fetchedQuotes) => {
  //     setQuotes(fetchedQuotes.quotes);
  //   });
  // });

  // const [quote, setQuote] = useState('');

  // const getQuote = () => {};

  return (
    <div className="card">
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{quotes[0]['quote'] || 'No quote found'}</p>
          <footer className="blockquote-footer">
            <cite>{quotes[0]['author'] || 'No author found'}</cite>
          </footer>
        </blockquote>
        <button href="#" className="btn btn-primary mt-4">
          Get a new quote
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
