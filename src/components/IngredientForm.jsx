import React from 'react';

const IngredientForm = () => {

  function handleSubmit(formData){
    // event.preventDefault();
    // const formData = event.currentTarget();
    const ingred = formData.value;

    
  }
  return (

    <form action={handleSubmit} >
      <div className="input-group">
        <input type="text" placeholder="e.g. oregano" />
        <button type='submit'>+ Add ingredient</button>
      </div>
    </form>

  );
};

export default IngredientForm;