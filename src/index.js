import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  const {reset} = props;

  return (
    <button onClick={reset}> Reset </button>
  );
};

const Application = () => {
  const [word, setWord] = useState("");
  // your code here
  
  const reset = () => {
    // console.log("reset");
    // your code here
    setWord("");
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <input
        value={word}
        onChange={(event) => setWord(event.target.value)}
        placeholder="Type your name"
      />
      <Button reset={reset} />
      <h1>Hello {word}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
