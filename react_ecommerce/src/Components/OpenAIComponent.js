import React, { useState } from 'react';
import axios from 'axios';

const OpenAIComponent = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const API_KEY = '';
    const API_ENDPOINT = `https://api.openai.com/v1/engines/text-davinci-002/jobs`;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    };

    const data = {
      prompt: input,
      max_tokens: 100
    };

    try {
      const res = await axios.post(API_ENDPOINT, data, config);
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default OpenAIComponent;
