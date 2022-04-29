import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import { NavLink } from "react-router-dom";

import styled from "styled-components";
import classes from "./Category.module.scss";

function Category() {
  const listOfFoods = [
    { title: "Italian", logo: <FaPizzaSlice />, path: "/cuisine/italian" },
    { title: "American", logo: <FaHamburger />, path: "/cuisine/american" },
    { title: "Thai", logo: <GiNoodles />, path: "/cuisine/thai" },
    { title: "Japanese", logo: <GiChopsticks />, path: "/cuisine/japanese" },
  ];

  const listItem = listOfFoods.map(item => {
    return (
      <SLink className={classes.link} to={item.path} key={item.title}>
        {item.logo}
        <h4>{item.title}</h4>
      </SLink>
    );
  });

  return <ul className={classes.list}>{listItem}</ul>;
}

export default Category;

const SLink = styled(NavLink)`
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    transform: scale(0.85);
  }
`;
