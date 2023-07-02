import ShoppingCard from "./Card/ShoppingCard/ShoppingCard";
import classes from "../components/Card/Card.module.css";
const List = (props) => {
  if (props.list.length === 0) {
    return <h2> 	چیزی یافت نشد. &#128580; . لطفا قسمتی از نام یا کد محصول را بنویسید</h2>;
  }
  return (
    <div className={classes.cards}>
      {props.list.map((item) => {
        return <ShoppingCard card={item} key={item.code}/>;
      })}
      ;
    </div>
  );
};

export default List;
