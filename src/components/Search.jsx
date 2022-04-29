import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import classes from "./Search.module.scss";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const inputHandler = e => {
    setInput(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-wrapper"]}>
        <FaSearch></FaSearch>
        <input onChange={inputHandler} type="text" value={input} />
      </div>
    </form>
  );
}

export default Search;
