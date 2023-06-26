import classes from './Buttons.module.css';
import { FaCartArrowDown } from 'react-icons/fa';
const Buttons = ({ price, qty }) => {
	return (
		<div className={classes.buttons}>
			<div className={classes.right}>
				<span className={classes.price}>{price}</span>
			</div>
			<span className={classes.qty}>
				<input type="number" step={qty} min="0" />
			</span>
			<div className={classes.left}>
				<div className={classes['extend-btn']}>
					<span className={classes['b-text']} href="">
						خرید
					</span>
					<span className={classes['b-icon']} href="">
						<FaCartArrowDown size={12} />
					</span>
				</div>
			</div>
		</div>
	);
};
export default Buttons;
