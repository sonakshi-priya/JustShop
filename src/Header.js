import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
                <img 
                className="header__logo" 
                src="logo.JPG" 
                alt=""
                />
            </Link>
            {/* search box */}
            <div className="header__search">
                <input  type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            {/* 3 links */}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Order</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    {/* shopping basket Icon */}
                    <ShoppingBasketIcon />
                    {/* number of items in the basket */}
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </Link>
            </div>
            {/* Basket icon with number */}
        </nav>
    )
}
export default Header;
