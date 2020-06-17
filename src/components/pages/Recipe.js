import React from "react";
import recipeModule from "./recipe.module.css";

const Recipe = ({ label, calories, imgsrc, ingredients }) => {
  return (
    <div className={recipeModule.recipe}>
      <h2>{label}</h2>
      <p>Calories: {calories}</p>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img className={recipeModule.image} src={imgsrc} alt="piz" />
    </div>
  );
};

export default Recipe;
