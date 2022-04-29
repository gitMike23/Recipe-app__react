import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

import Gradient from "./UI/Gradient";
import Card from "./UI/Card";
import Wrapper from "./UI/Wrapper";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  const recipeCards = veggie.map(recipe => {
    return (
      <SplideSlide key={recipe.id}>
        <Card key={recipe.id}>
          <Link to={"/recipe/" + recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
            <Gradient />
          </Link>
        </Card>
      </SplideSlide>
    );
  });

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          gap: "3rem",
          drag: "free ",
        }}
      >
        {recipeCards}
      </Splide>
    </Wrapper>
  );
};

export default Veggie;
