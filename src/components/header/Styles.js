/** @format */

import { makeStyles } from "@material-ui/core";
import KidsIcon from "../../imgs/kids.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#131A28",
        color: "white",
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginBottom: 10,
        marginLeft: -10,
        [theme.breakpoints.down("sm")]: {
            marginRight: 20,
        },
    },
    right: {
        width: "auto",
        display: "flex",
        flexDirection: "row",
        position: "relative",
        marginLeft: "auto",
    },
    inputRoot: {
        color: "white",
        marginRight: 20,
    },
    login: {
        border: 0,
        color: "white",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    links: {
        border: 0,
        color: "white",
        marginRight: 20,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    linktv: {
        border: 0,
        color: "white",
        marginRight: 20,
        marginLeft: 20,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    kids: {
        background: `url(${KidsIcon}) no-repeat`,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    subscribe: {
        marginRight: 10,
        minWidth: 75,
        [theme.breakpoints.down("sm")]: {
            marginRight: 0,
        },
        color: "white",
    },
    menu: {
        "&:hover": {
            backgroundColor: "#030B17",
        },
    },
    menuIcon: {
        color: "whitesmoke",
    },
}));

export default useStyles;
