import React, { useState } from 'react';
import CountValue from './CountValue';

const Counter = () => {



    const [counter, setCounter] = useState(0);

    function handleIncrement() {
      setCounter(prev => prev + 1);
    }
  
    function handleDecrement() {
      setCounter(prev => {
        if (prev <= 0) {
          alert("Can't go beyond 0");
          return prev;
        }
        return prev - 1;
      });
    }

  return (
    <div className="container">
       <h1>How many times will Bob say "state" in this section?</h1>
        <div className="counter">
          <button className="minus" aria-label="Decrease count" onClick={handleDecrement}>–</button>
          {/* <h2 className="count">{counter}</h2> */}

          <CountValue  value={counter}/>
          <button className="plus" aria-label="Increase count" onClick={handleIncrement}>+</button>
        </div>
    </div>
  );
};

export default Counter;