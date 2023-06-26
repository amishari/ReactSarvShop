import { Fragment } from 'react';
import facPic from '../../asset/factory.jpg';
import Cart from './Cart';
import classes from './Header.module.css';
import Summary from '../Header/Summary';

const Header = () => {
	return (
		<Fragment>
			<div className={classes.header}>
				<h1>فروشگاه شرکت سروپیکر</h1>
				<Cart />
			</div>
			<div className={classes.img}>
				<img src={facPic} alt="SarvPeykarToos" className={classes.imgimg} />
			</div>
			<Summary />
		</Fragment>
	);
};
export default Header;
