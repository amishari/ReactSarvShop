import HeaderCard from './HeaderCard';
import Img from './Img';
import Buttons from './Buttons';
import classes from './ShoppingCard.module.css';

const ShoppingCard = ({ data }) => {
	return (
		<>
			{data.map(({ code, img, Product_name, PriceString, QtyPack }, index) => {
				return (
					<div className={classes.shoppingCard} key={index}>
						<HeaderCard code={code} />
						<Img img={img} />
						<div className={classes.title}>{Product_name}</div>
						<Buttons price={PriceString} qty={QtyPack} />
					</div>
				);
			})}
		</>
	);
};
export default ShoppingCard;
