// import './key/key.js'
import Axios from 'axios';
import './App.css';

import { useState } from 'react';

function App() {

  const [ query , setQuery] = useState("")
    
  const YOUR_APP_ID = "b1dda41e";
  const YOUR_APP_KEY = "2a667764448a09bf641f68df28cd3cdd";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
  &calories=591-722&health=alcohol-free`;

  async function getRecipes()
  {
    const result = await Axios.get(url);
    console.log(result);
    
  }
  return (
    <div className="App">
     <h1 onClick = {getRecipes}>Recipz 🍚</h1>

     <form className = "App_serchForm">
       <input
        type="text"
        placeholder = "Enter Valid Ingredient"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
       />
     </form>
    </div>
  );
}

export default App;
