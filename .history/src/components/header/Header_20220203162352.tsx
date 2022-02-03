import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/pizza-logo.svg'
import Button from "../button/Button";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <Link to='/'>
                        <img width="38" src={logo} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </Link>

                </div>
                <Link to='/cart'>
                    <div className="header__cart">
                        <Button />
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header