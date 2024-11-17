import React, { useState, useEffect } from 'react';

function Box({ category }) {
  const [quote, setQuote] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return; 

    const fetchQuote = async () => {
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': 'u830UqW+FUnzJ5JWczjx6w==ca5n7Aj0EqbBk0Ao', 
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        if (data && data.length > 0) {
          setQuote(data[0].quote); 
        } else {
          setQuote('No quote found for this category.');
        }
      } catch (err) {
        setError(err.message); 
      }
    };

    fetchQuote();
  }, [category]); 
  return (
    <div>
      <div className="field">
        {error ? <p>Error: {error}</p> : <p>{quote}</p>}
      </div>
    </div>
  );
}

export default Box;
