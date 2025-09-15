import React, { useState } from 'react';

const Toggle = () => {


    
  const [isGoingOut, setIsGoingOut] = useState(true);

  function handleGoingOutButton() {
    setIsGoingOut(prev => !prev);
  }

  return (
    <div className="container">
          <h1 className="title">Do I feel like going out tonight?</h1>
        <button className="value" onClick={handleGoingOutButton}>{isGoingOut ? 'No' : 'Yes'}</button>
        <br />

    </div>
  );
};

export default Toggle;