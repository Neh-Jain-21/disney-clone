import { useState } from "react";
import useStyles from "./Styles";
import Carousel, { consts } from "react-elastic-carousel";
import { Grid } from "@material-ui/core";
import CarouselItem from "./components/CarouselItem";
import Childcarousel from "./components/Childcarousel";

const carouselContents = [
	{
		id: 1,
		image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9260/889260-h",
		title: "Yeh Rishta Kya Kehlata Hai",
		bread: "Starplus . Hindi . Drama",
		desc: "The story of a young married couple, Kartik and Nair trying to strike the perfect balance between their family values, personal beliefs and circumstances.",
	},
	{
		id: 2,
		image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/895/830895-h",
		title: "Yeh Rishta Kya Kehlata Hai",
		bread: "Starplus . Hindi . Drama",
		desc: "The story of a young married couple, Kartik and Nair trying to strike the perfect balance between their family values, personal beliefs and circumstances.",
	},
	{
		id: 3,
		image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8773/1028773-h-48170a73363e",
		title: "Anupama",
		bread: "Starplus . Hindi . Drama",
		desc: "Anupama had to sacrifice a lot to become an ideal wife, daughter-in-law, and mother. After a bitter realisation, she sets out to live on her own terms.",
	},
	{
		id: 4,
		image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/905/840905-h",
		title: "Yeh Rishta Kya Kehlata Hai",
		bread: "Starplus . Hindi . Drama",
		desc: "The story of a young married couple, Kartik and Nair trying to strike the perfect balance between their family values, personal beliefs and circumstances.",
	},
];

const breakPoints = [
	{ width: 1, itemsToShow: 2, itemsToScroll: 1 },
	{ width: 550, itemsToShow: 3, itemsToScroll: 2 },
	{ width: 850, itemsToShow: 5, itemsToScroll: 3 },
	{ width: 1150, itemsToShow: 7, itemsToScroll: 4 },
];

const Main = () => {
	const classes = useStyles();
	const [pos, setPos] = useState(false);

	const setSize = () => {
		if (window.innerWidth > 960) {
			setPos(true);
		} else {
			setPos(false);
		}
	};

	return (
		<>
			<div className={classes.top}></div>
			<div className={classes.root}>
				<Carousel itemsToShow={1} pagination={false} autoPlaySpeed={4000} onResize={setSize} itemPosition={pos ? undefined : consts.CENTER}>
					{carouselContents.map((content) => {
						return <CarouselItem key={content.id} img={content.image} title={content.title} bread={content.bread} desc={content.desc} />;
					})}
				</Carousel>

				{/* Child Cards */}
				<Grid container direction="column" className={classes.childGrid}>
					<p className={classes.childcarouseltitle}>Latest & Trending</p>
					<Carousel itemsToShow={7} itemsToScroll={3} pagination={false} itemPadding={[0, 5]} breakPoints={breakPoints}>
						<Childcarousel />
						<Childcarousel />
						<Childcarousel />
						<Childcarousel />
						<Childcarousel />
						<Childcarousel />
						<Childcarousel />
						<Childcarousel />
						<Childcarousel />
						<Childcarousel />
						<Childcarousel />
						<Childcarousel />
					</Carousel>
				</Grid>
			</div>
		</>
	);
};

export default Main;
