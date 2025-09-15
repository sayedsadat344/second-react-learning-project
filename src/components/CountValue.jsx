import React from 'react';

const CountValue = (prop) => {
    console.log("Prop: ",prop);
    
  return (
    <h2 className="count">{prop.value}</h2>
  );
};

export default CountValue;