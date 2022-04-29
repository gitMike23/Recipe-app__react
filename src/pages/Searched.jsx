import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import classes from "./Searched.module.scss";

function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearched = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const searchedItems = searched.map(searchedItem => {
    return (
      <div className={classes.card} key={searchedItem.id}>
        <Link to={"/recipe/" + searchedItem.id}>
          <img src={searchedItem.image} alt={searchedItem.title} />
          <h4>{searchedItem.title}</h4>
        </Link>
      </div>
    );
  });
  return <div className={classes.grid}>{searchedItems}</div>;
}

export default Searched;
