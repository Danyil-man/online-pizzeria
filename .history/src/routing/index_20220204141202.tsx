import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from "../components/header/Header";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={Home} />
                <Route exact path='/cart' component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routing