import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

import Wrapper from "./UI/Wrapper";
import Card from "./UI/Card";
import Gradient from "./UI/Gradient";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  const recipeCards = popular.map(recipe => {
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
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
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

export default Popular;
