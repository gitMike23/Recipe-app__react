import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./Cuisine.module.scss";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
    console.log(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const cuisineItems = cuisine.map(cuisineItem => {
    return (
      <div className={classes.card} key={cuisineItem.id}>
        <Link to={"/recipe/" + cuisineItem.id}>
          <img src={cuisineItem.image} alt={cuisineItem.title} />
          <h4>{cuisineItem.title}</h4>
        </Link>
      </div>
    );
  });

  return (
    <motion.div
      className={classes.grid}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisineItems}
    </motion.div>
  );
}

export default Cuisine;
