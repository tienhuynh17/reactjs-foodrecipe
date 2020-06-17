import React, { useEffect, useState } from "react";
import "./App.css";

import Recipe from "./components/pages/Recipe";

const App = () => {
  const APP_ID = "dbfd5783";
  const APP_KEY = "f27344330a414fade1cb5581635ef53e";

  const [recipts, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const quantity = 30;

  const RecipeRq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${quantity}&calories=591-722&health=alcohol-free`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const rs = await fetch(RecipeRq);
    const data = await rs.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const updateQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="form" onSubmit={updateQuery}>
        <input
          className="input-form"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="button-form" type="Submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipts.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            label={recipe.recipe.label}
            calories={recipe.recipe.calories}
            imgsrc={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
