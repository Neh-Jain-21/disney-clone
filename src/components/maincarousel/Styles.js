/** @format */

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#030B17",
        color: "white",
    },
    image: {
        objectFit: "contain",
        width: "100%",
        borderRadius: 5,
        userSelect: "none",
    },
    grad: {
        position: "absolute",
        width: 200,
        height: "100%",
        marginRight: 590,
        background: "linear-gradient(to right,#030B17,rgba(0,0,0,0))",
        zIndex: 5,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    main: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        zIndex: 6,
        width: "29vw",
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    title: {
        fontSize: 28,
        color: "white",
        fontWeight: "600",
        letterSpacing: 2,
    },
    form: {
        fontSize: 15,
        color: "rgba(255, 255, 255, 0.4)",
        fontWeight: "500",
    },
    desc: {
        fontSize: 16,
        color: "rgba(255, 255, 255, 0.6)",
    },
    right: {
        width: "100%",
        [theme.breakpoints.up("md")]: {
            marginLeft: "29%",
        },
    },
    childcarouseltitle: {
        fontSize: 16,
        fontWeight: "500",
        marginTop: 60,
        marginLeft: 20,
        [theme.breakpoints.up("md")]: {
            fontSize: 20,
            marginLeft: 20,
        },
    },
    childGrid: {
        padding: 0,
    },
    imgChild: {
        objectFit: "contain",
        borderRadius: 5,
        userSelect: "none",
        width: "100%",
    },
    zoom: {
        transition: "all 0.5s",
        boxSizing: "border-box",
        // overflow: "visible",
        // width: "auto",
        // "&:hover": {
        //     width: "100%",
        //     transform: "scale(1.1)",
        // },
    },
}));

export default useStyles;
