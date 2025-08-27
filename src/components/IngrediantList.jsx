import { useState } from "react";

export default function IngrediantList() {

  const list = ["Items1", "item2", "Item3"];

  const [stateVar,setStateVar] = useState("Default");

  const [ingList,setIngList] = useState(["Items1", "item2", "Item3"]);

  console.log('state var: ',stateVar);

  console.log('ingList: ',ingList);


  function handleSubmit(event) {




    

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const ingred = formData.get('ingredName');


    
    list.push(ingred);
    // list.push(ingred);

    console.log('the ingred: ',list);

    setIngList(prev => [...prev,ingred]);

    console.log('ingList: ',ingList);

    setStateVar(ingred);
  }
 

  return (
    <div className="ingredients-section">








      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" placeholder="e.g. oregano" name="ingredName" />
          <button type='submit'>+ Add ingredient</button>
        </div>
      </form>


      <h2>Ingredients on hand: {stateVar}</h2>
      <ul>

        {
          ingList.map((l,index) => <li key={index}>{l}</li>)
        }
        {/* <li>Chicken breasts</li>
        <li>Most of the main spices</li>
        <li>Olive oil</li>
        <li>Heavy cream</li>
        <li>Chicken broth</li>
        <li>Parmesan cheese</li>
        <li>Spinach</li> */}
      </ul>
    </div>
  );
}