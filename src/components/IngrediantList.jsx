

export default function IngrediantList(props) {



  const ingredientsListItems = props.ingredientList.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))


  return (


    <div className="ingList">


      {props.ingredientList.length > 0 && <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>

        {props.ingredientList.length > 3 && <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.fetchRecipe}> Get a recipe </button>
        </div>}
      </section>}


    </div>
  );
}