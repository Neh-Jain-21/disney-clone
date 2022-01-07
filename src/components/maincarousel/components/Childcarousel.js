/** @format */

import React from "react";
import useStyles from "../Styles";
import { Button } from "@material-ui/core";

const Childcarousel = (props) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.zoom}>
                <img
                    className={classes.imgChild}
                    src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3029/1033029-v-bd928a1dd530"
                    alt=""
                />
                <div
                    style={{
                        position: "absolute",
                        zIndex: 10000,
                        bottom: 0,
                        width: "100%",
                    }}
                >
                    <p>PKOK</p>
                    <h1>Hey</h1>

                    <h1>Hey</h1>
                    <Button size="small" color="inherit">
                        Add to Watchlist
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Childcarousel;
