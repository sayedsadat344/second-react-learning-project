

import './App.css'

import Header from './components/Header';
import IngrediantList from './components/IngrediantList';
import { useState } from 'react';
import ShowRecipe from './components/Showrecipe';

import { getRecipeFromMistral } from './ai';



// const accessToken = import.meta.env.VITE_HF_ACCESS_TOKEN;


function App() {


  const [ingredients, setIngredients] = useState(
    ["all the main spices", "ground beef", "tomato paste"]
  )



  const [recipe, setRecipe] = useState(null);


  async function getRecipe() {



    const response = await getRecipeFromMistral(ingredients);

    setRecipe(response);
    console.log('The recipe is called', response);


  }


  const [username, setUsername] = useState("Sadat");


  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }


  return (
    <>


      <Header loggedInUser={username} />



      <div style={{ marginTop: '20px' }}>
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
          />
          <button>Add ingredient</button>
        </form>
      </div>

      <IngrediantList loggedInUser={username} ingredientList={ingredients} fetchRecipe={getRecipe} />






      {
        recipe && <ShowRecipe recipe={recipe} />
      }





      {/* <Pad /> */}

      {/* <Profile /> */}
      {/* <SimpleForm />
      



        <FavriteThings />

        <Toggle />

        <Counter /> */}
      {/* <IngredientForm /> */}

      {/* <Counter /> */}


      {/* <div className="recipe-box">
          <p>Ready for a recipe? Generate a recipe from your list of ingredients.</p>
          <button>Get a recipe</button>
        </div> */}

    </>
  )
}

export default App
