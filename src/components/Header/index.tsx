import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DrawerTogle from '../DrawerTogle'

function Header(){
    return(
        <header className="header" >  
            <div className="header__tabs" >
                <a href="/">Pickup & delivery</a>
                <a href="/" className="select__tab">Walmar.com</a>
            </div>

            <div className="header__nav">
                <div className="bars__logo">
                    <DrawerTogle />
                    <a href="/">
                        <img src="https://cdn.corporate.walmart.com/12/9d/06ecf3584e91acccc37162f09714/logowhite.svg" alt="logo"/>
                    </a>
                </div>
                
                <div className="search__content">
                    <div className="search__item">
                        <ArrowDropDownIcon />
                        <input type="text" placeholder="Search Walmart.com"/>
                        <div  className="search__icon">
                            <SearchIcon/>
                        </div>
                    </div>
                </div>
            
                <div className="nav_right">
                    <a href="/">
                        <PersonOutlineIcon/>
                        <span>Account</span>
                    </a>

                    <a href="/">
                        <AddShoppingCartIcon/>
                        <span>Reorder</span>
                    </a>

                    <a href="/">
                        <ShoppingCartIcon/>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;