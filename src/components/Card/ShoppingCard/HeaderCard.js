import classes from './HeaderCard.module.css';
const HeaderCard = ({ code }) => {
	return (
		<div className={classes.headerCard}>
			<button>مشخصات فنی</button>
			<button>کد: {code}</button>
		</div>
	);
};
export default HeaderCard;
