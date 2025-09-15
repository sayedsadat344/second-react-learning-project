import React from 'react';
import Markdown from 'react-markdown'

const ShowRecipe = ({recipe}) => {


  return (
    <div className='recipe-container' aria-live='polite'>
     <Markdown>{recipe}</Markdown>
  </div>
  );
};

export default ShowRecipe;