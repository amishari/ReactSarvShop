import HeaderCard from "./HeaderCard";
import Img from "./Img";
import Buttons from "./Buttons";
import classes from "./ShoppingCard.module.css";

const ShoppingCard = ({ card }) => {
  return (
    <div className={classes.shoppingCard}>
      <HeaderCard code={card.code} />
      <Img img={card.img} />
      <div className={classes.title}>{card.Product_name}</div>
      <Buttons price={card.PriceString} qty={card.QtyPack} />
    </div>
  );
};
export default ShoppingCard;
