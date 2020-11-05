import React, {useState} from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DrawerTogle from '../DrawerTogle'

function Header(){

    let [state, setState] = useState(0);

    const handleAnimation = (e: any) => {
       const header = document.querySelector('.header') as HTMLElement;
       
       setState(document.documentElement.scrollTop);
 
       state = document.documentElement.scrollTop;
 
        if (state > 125) {
            header.style.position = 'sticky';
            header.style.top = '0';
        } else {
            header.style.position = 'relative';
        }
    };

    return(
        <header {...window.onscroll = (e: any) => handleAnimation(e)} className="header" >  
                <div className="header__tabs" >
                    <a href="/">Pickup & delivery</a>
                    <a href="/" className="select__tab">Walmar.com</a>
                </div>
            
                <div className="header__nav">
                    <div className="bars__logo">
                        <DrawerTogle />
                        <a href="/" className="logo__img">
                            <img src="https://cdn.corporate.walmart.com/12/9d/06ecf3584e91acccc37162f09714/logowhite.svg" alt="logo"/>
                        </a>
                    </div>
                    
                    <div className="search__content">
                        <div className="search__item">
                            <ArrowDropDownIcon className="show__more"/>
                            <input type="text" placeholder="Search Walmart.com"/>
                            <div  className="search__icon">
                                <SearchIcon/>
                            </div>
                        </div>
                    </div>
                
                    <div className="nav_right">
                        <a href="/" className="account__icon">
                            <PersonOutlineIcon/>
                            <span>Account</span>
                        </a>

                        <a href="/" className="reorder__icon">
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