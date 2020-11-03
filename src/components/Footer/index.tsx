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
                    {/* footer__section */}
                </div>
                <div className="footer__bottom">
                    {/* footer__bottom */}
                </div>
            </Container>
        </div>
    )
}

export default Footer;