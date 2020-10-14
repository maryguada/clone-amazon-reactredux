import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Home from './Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import '../Styles/Header.css';

function Header() {
    const [{ basket }] = useStateValue();


    return (
        <nav className="header">

            {/* logo on left  */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>

            {/* Search box input */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links on the right  */}
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span> Hello Guada </span>
                        <span> Sign In </span>
                    </div>
                </Link>


                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span> Returns & </span>
                        <span> Orders </span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__options">

                        <span> Your </span>
                        <span> Prime </span>

                    </div>
                </Link>


                <Link to="/" className="header__link">
                    <div className="header__options">

                        <ShoppingBasketIcon />
                        <span> {basket?.length} </span>

                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;