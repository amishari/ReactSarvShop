import ShoppingCard from "./Card/ShoppingCard/ShoppingCard";
import classes from "../components/Card/Card.module.css";
const List = (props) => {
  if (props.list.length === 0) {
    return <h2> چیزی یافت نشد. </h2>;
  }
  return (
    <div className={classes.cards}>
      {props.list.map((item) => {
        return <ShoppingCard card={item} />;
      })}
      ;
    </div>
  );
};

export default List;
