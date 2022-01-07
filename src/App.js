/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
//components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/maincarousel/Main";

const App = () => {
    return (
        <>
            {/* Header */}
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
            {/* Footer */}
            <Footer />
        </>
    );
};

export default App;
