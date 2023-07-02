import { Grid, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
//css
import useStyles from "./Styles";
//icons
import appstore from "../../imgs/app store.svg";
import playstore from "../../imgs/play store.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
	const classes = useStyles();

	return (
		<>
			<Grid className={classes.footerMain} container direction="row">
				<Grid item sm={12} lg={6} container direction="column">
					<Grid>
						<NavLink className={classes.footerLinks} to="/">
							About Disney+ Hotstar
						</NavLink>
						<NavLink className={classes.footerLinks} to="/">
							Terms of Use
						</NavLink>
						<NavLink className={classes.footerLinks} to="/">
							Privacy Policy
						</NavLink>
						<NavLink className={classes.footerLinks} to="/">
							FAQ
						</NavLink>
						<NavLink className={classes.footerLinks} to="/">
							Feedback
						</NavLink>
						<NavLink className={classes.footerLinks} to="/">
							Careers
						</NavLink>
					</Grid>
					<Grid>
						<p className={classes.footerText}>
							© 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements
							are the property of, Home Box Office, Inc. All rights reserved.
						</p>
					</Grid>
				</Grid>
				<Grid item sm={12} lg={6} container direction="row" className={classes.pad}>
					<Grid item className={classes.connectText} container direction="column" justify="center" alignItems="center" xs={6}>
						Connect with us
						<Grid style={{ marginTop: 10 }} container direction="row" justify="center">
							<Button style={{ marginRight: 5 }} className={classes.footerButton}>
								<FacebookIcon />
							</Button>
							<Button className={classes.footerButton}>
								<TwitterIcon />
							</Button>
						</Grid>
					</Grid>
					<Grid item className={classes.connectText} container direction="column" justify="center" alignItems="center" xs={6}>
						Disney+ Hotstar App
						<Grid container direction="row" justify="center">
							<Button>
								<img src={appstore} alt="" />
							</Button>
							<Button>
								<img src={playstore} alt="" />
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Footer;
