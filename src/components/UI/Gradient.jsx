import classes from "./Gradient.module.scss";

function Gradient(props) {
  return <div className={classes.gradient}>{props.children}</div>;
}

export default Gradient;
