import "./Card.css";
const Card = (props) => {
  const classes = props.className + " customCss";
  return <div className={classes}>{props.children}</div>;
};

export default Card;
