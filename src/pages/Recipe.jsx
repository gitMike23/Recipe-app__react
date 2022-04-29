import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import classes from "./Recipe.module.scss";

function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const recipeDetails = await data.json();
    setDetails(recipeDetails);
    console.log(recipeDetails);
  };

  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  return (
    <div className={classes["detail-wrapper"]}>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <div className={classes.info}>
        <button
          className={activeTab === "instructions" ? `${classes.active}` : ""}
          onClick={() => {
            setActiveTab("instructions");
          }}
        >
          Instructions
        </button>
        <button
          className={activeTab === "ingredients" ? `${classes.active}` : ""}
          onClick={() => {
            setActiveTab("ingredients");
          }}
        >
          Ingredients
        </button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map(ingredient => {
              return (
                <li key={ingredient.id} className={classes.ingredient}>
                  {ingredient.original}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Recipe;
