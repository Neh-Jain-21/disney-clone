import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	footerMain: {
		backgroundColor: "#0C111B",
		paddingLeft: theme.spacing(2.5),
		paddingRight: theme.spacing(2.5),
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(6),
		[theme.breakpoints.down("sm")]: {
			paddingBottom: theme.spacing(15),
		},
	},
	footerLinks: {
		color: "whitesmoke",
		textDecoration: "none",
		"&:hover": {
			color: "#1062E0",
		},
		marginRight: 20,
		fontSize: "1em",
		fontWeight: 400,
		cursor: "pointer",
		display: "inline-block",
	},
	footerText: {
		color: "whitesmoke",
		fontSize: "0.8em",
	},
	connectText: {
		color: "whitesmoke",
		fontSize: "1em",
	},
	footerButton: {
		height: 40,
		color: "white",
		backgroundColor: "#192133",
		"&:hover": {
			backgroundColor: "#1F80E0",
		},
	},
	pad: {
		[theme.breakpoints.down("md")]: {
			marginTop: 30,
		},
	},
}));

export default useStyles;
