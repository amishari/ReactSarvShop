import classes from "./Img.module.css";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Img = ({ img }) => {
  return (
    <div className={classes["img-sec"]}>
      <img src={img} alt="" />
    </div>
  );
};
export default Img;

/* <TransformWrapper>
				<TransformComponent>
					<div className={classes['img-sec']}>
						<img src={img} alt="pic" />
					</div>
				</TransformComponent>
			</TransformWrapper>
		</>*/
