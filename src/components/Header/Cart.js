import { Fragment } from 'react';
import classes from './Cart.module.css';
import { FaCartArrowDown } from 'react-icons/fa';
const Cart = () => {
	return (
		<Fragment>
			<button className={classes.cart}>
				<span className={classes.icon}>
					<FaCartArrowDown size={25} />
				</span>
				<span className={classes.logo}>سبد خرید</span>
				<span className={classes.badge}>۰</span>
			</button>
		</Fragment>
	);
};
export default Cart;
