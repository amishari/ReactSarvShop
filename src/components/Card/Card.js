import classes from "./Card.module.css";
import ShoppingCard from "./ShoppingCard/ShoppingCard";
const Card = ({ data }) => {
  return (
    <div className={classes.cards}>
      <ShoppingCard info={data} />
    </div>
  );
};
export default Card;
