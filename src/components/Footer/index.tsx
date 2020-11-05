import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

function Footer(){
    return(
        <div className="footer">
            <Container maxWidth="lg" className="footer__item">
                <div className="footer__top">
                    <div className="inputs">
                        <form action="">
                            <TextField id="outlined-basic" label="Enter email" variant="outlined" fullWidth={true} placeholder="Enter email for weekly newsletter"/>
                            {/* <button type="button">Sign up</button> */}
                            <Button variant="contained">Sign up</Button>
                        </form>
                    </div>
                    <div className="links__social">
                        <div className="icons__social">
                            <a href="/"><FacebookIcon /></a>
                            <a href="/"><TwitterIcon /></a>
                            <a href="/"><PinterestIcon /></a>
                            <a href="/"><YouTubeIcon /></a>
                            <a href="/"><InstagramIcon /></a>
                        </div>
                        <div className="icon__downloadApps">
                            <a href="/"><PhoneIphoneIcon /> Mobile apps</a>
                        </div>
                    </div>
                </div>
                <div className="footer__section">
                    <div className="item__footSec">
                        <h3>Walmart Services</h3>
                        <ul>
                            <li><a href="/">Walmart+</a></li>
                            <li><a href="/">Grocery Pickup & Delivery</a></li>
                            <li><a href="/">MoneyCenter</a></li>
                            <li><a href="/">Walmart Credit Card</a></li>
                            <li><a href="/">Walmart Pay</a></li>
                            <li><a href="/">Wekly Ad</a></li>
                            <li><a href="/">Other Services</a></li>
                        </ul>
                    </div>
                    <div className="item__footSec">
                        <h3>Get to Know Us</h3>
                        <ul>
                            <li><a href="/">Our company</a></li>
                            <li><a href="/">Store Directory</a></li>
                            <li><a href="/">Digital Museum</a></li>
                            <li><a href="/">Our Suppliers</a></li>
                            <li><a href="/">Sell on Walmart.com</a></li>
                            <li><a href="/">Advertise With Us</a></li>
                            <li><a href="/">Careers</a></li>
                        </ul>
                    </div>
                    <div className="item__footSec">
                        <h3>Walmart.com</h3>                 
                        <ul>
                            <li><a href="/">Walmart Labs</a></li>
                            <li><a href="/">Our Ads</a></li>
                            <li><a href="/">Terms of Use</a></li>
                            <li><a href="/">Privacy & Security</a></li>
                            <li><a href="/">CA Privacy Rights</a></li>
                            <li><a href="/">Do Not Sell My Personal Information</a></li>
                            <li><a href="/">Request My Personal Information</a></li>
                            <li><a href="/">Tax Exempt Program</a></li>
                        </ul>
                    </div>
                    <div className="item__footSec">
                        <h3>Customer Service</h3>
                        <ul>
                            <li><a href="/">Help Center</a></li>
                            <li><a href="/">Returns</a></li>
                            <li><a href="/">Product Recalls</a></li>
                            <li><a href="/">Accessibility</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Store Pickup</a></li>
                        </ul>
                    </div>
                    <div className="item__footSec">
                        <h3>In The Spotlight</h3>                        
                        <ul>
                            <li><a href="/">Portable Air Conditioners</a></li>
                            <li><a href="/">PS4</a></li>
                            <li><a href="/">Trampoline</a></li>
                            <li><a href="/">Skateboard</a></li>
                            <li><a href="/">Outdoor Furniture</a></li>
                            <li><a href="/">Nintendo Switch Lite</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="brands__logo">
                        <a href="/">
                            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-dd5d/k2-_7930f70e-22b1-4c50-80bc-b42dc319942f.v1.png" alt=""/>
                        </a>
                        <a href="/">
                            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-b8ef/k2-_4574dd20-75f7-45a4-985e-71aebc538d89.v1.png" alt=""/>
                        </a>
                        <a href="/">
                            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-2744/k2-_64866d8d-0868-4119-b83d-aaf3db27123d.v1.png" alt=""/>
                        </a>
                        <a href="/">
                            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-a1c6/k2-_7b792639-8061-4afd-99b3-955131fb6ef2.v1.png" alt=""/>
                        </a>
                        <a href="/">
                            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-75f0/k2-_0c213844-7e96-455a-a73c-d74166c84bf5.v1.jpg" alt=""/>
                        </a>
                        <a href="/">
                            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-9a54/k2-_77e28f57-cc7e-44f7-9b72-3583c1a7647e.v1.png" alt=""/>
                        </a>
                        <a href="/">
                            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-5316/k2-_a4e24a8e-b455-428b-9518-d66d4df485e0.v1.jpg" alt=""/>
                        </a>
                        <a href="/">
                            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-5250/k2-_a63e8e8d-aa01-48a2-bb04-896e154551ed.v1.jpg" alt=""/>
                        </a>
                        <a href="/">
                            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-f8a0/k2-_e90901d4-1916-4ec6-9424-5c59a8a242b5.v1.png" alt=""/>
                        </a>
                        <a href="/">
                            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-fd52/k2-_4f54a1b9-971b-424d-aee5-d2505212e23f.v1.png" alt=""/>
                        </a>
                    </div>
                    <div className="terms__use">
                        <span>&copy; 2020 Walmart. All Rights Reserved.</span>
                        <p>To ensure we are able to help you as best we can, please include your reference number: RTYLCVK1M3</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;