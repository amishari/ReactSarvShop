import classes from './Img.module.css';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const Img = ({ img }) => {
	return (
		<>
			<TransformWrapper>
				<TransformComponent>
					<div className={classes['img-sec']}>
						<img src={img} alt="pic" />
					</div>
				</TransformComponent>
			</TransformWrapper>
		</>
		// <TransformWrapper
		// 	initialScale={1}
		// 	initialPositionX={50}
		// 	initialPositionY={100}>
		// 	{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
		// 		<>
		// 			<TransformComponent>
		// 				<div className={classes['img-sec']}>
		// 					<img src={img} alt="pic" />
		// 				</div>
		// 			</TransformComponent>
		// 			<span className="tools">
		// 				{/* <button onClick={() => zoomIn()}>+</button>
		// 				<button onClick={() => zoomOut()}>-</button> */}
		// 				<button onClick={() => resetTransform()}>x</button>
		// 			</span>
		// 		</>
		// 	)}
		// </TransformWrapper>
	);
};
export default Img;
