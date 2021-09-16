// import './key/key.js'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Tiles from './components/Tiles';

import { useState } from 'react';

function App() {

  const [ query , setQuery] = useState("")
  const [ recipes , setRecipes ] = useState([]);
  const [ healthLabels , sethealthLabels ] = useState("vegetarian")
    
  const YOUR_APP_ID = "b1dda41e";
  const YOUR_APP_KEY = "2a667764448a09bf641f68df28cd3cdd";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
  &calories=591-722&health=${healthLabels}`;

  async function getRecipes()
  {
    const result = await Axios.get(url);
    setRecipes(result.data.hits)
    console.log(result);
    
  }

  const Onsubmit = (event) =>{
    event.preventDefault();
    if(!query)
    {
      alert("Enter Ingredient");
      return;
    }
    getRecipes();
  }

  return (
    <div className="App">
     <h1 onClick = {getRecipes}>Recipz 🍚</h1>

     <form className = "App_searchForm" onSubmit = {Onsubmit}>
       <input
        type="text"
        className = "App_input"
        placeholder = "Enter Valid Ingredient"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
       />
       <input className = "app_submit btn btn-outline-primary btn-space btn-block" type = "submit" value = "Search" />
     
        <select className = "health_labels">
          <option onCLick = {() =>{ sethealthLabels("vegetarian")}}>Vegetarian</option>
          
        </select>
     </form>
     <div className = "recipe_grid">
       {recipes.map(recipe=>{
         return <Tiles recipe = { recipe }/>
       })}
     </div>
    </div>
  );
}

export default App;
