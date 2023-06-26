import classes from './Card.module.css';
import ShoppingCard from './ShoppingCard/ShoppingCard';
const Card = ({ card }) => {
	return (
		<div className={classes.cards}>
			<ShoppingCard data={card} />
		</div>
	);
};
export default Card;
