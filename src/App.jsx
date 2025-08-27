

import { useState } from 'react';
import './App.css'

import Header from './components/Header';
import IngrediantList from './components/IngrediantList';
import IngredientForm from './components/ingredientForm';


function App() {


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
    <>
      <div className="container">


 
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={handleDecrement}>–</button>
                <h2 className="count">{counter}</h2>
                <button className="plus" aria-label="Increase count" onClick={handleIncrement}>+</button>
            </div>
       
      
      <Header />

       {/* <IngredientForm /> */}

        <IngrediantList />

        <div className="recipe-box">
          <p>Ready for a recipe? Generate a recipe from your list of ingredients.</p>
          <button>Get a recipe</button>
        </div>
      </div>

    </>
  )
}

export default App
