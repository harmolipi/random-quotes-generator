const Quote = ({
  quote = { quote: 'Loading quote...', author: 'Loading author...' },
}) => {
  return (
    <div>
      <p id="text">{quote['quote']}</p>
      <footer className="blockquote-footer">
        <cite id="author">{quote['author']}</cite>
      </footer>
    </div>
  );
};

export default Quote;
