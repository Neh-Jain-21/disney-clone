/** @format */

import React from "react";
import useStyles from "../Styles";

const CarouselItem = (props) => {
	const classes = useStyles();

	return (
		<>
			<div
				style={{
					position: "relative",
					display: "flex",
					flexDirection: "row",
					width: "90%",
					maxHeight: 400,
				}}
			>
				<div className={classes.main}>
					<p className={classes.title}>{props.title}</p>
					<p className={classes.form}>{props.bread}</p>
					<p className={classes.desc}>{props.desc}</p>
				</div>
				<div className={classes.right}>
					<div className={classes.grad}></div>
					<img className={classes.image} src={props.img} alt="" />
				</div>
			</div>
		</>
	);
};

export default CarouselItem;
