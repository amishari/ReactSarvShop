import classes from "./Card.module.css";
import ShoppingCard from "./ShoppingCard/ShoppingCard";
const Card = ({ list }) => {
  if ({ list }.length === 0) {
    return <h2> Nothing Found! Try again. </h2>;
  }
  return (
    <div className={classes.cards}>
      <ShoppingCard data={list} />
    </div>
  );
};
export default Card;
