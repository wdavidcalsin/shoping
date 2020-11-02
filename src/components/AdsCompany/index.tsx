import React from 'react';
import Container from '@material-ui/core/Container';

function AdsCompany(){
    return(
        <div className="content__ads">
            <Container maxWidth="sm">
                <img src="https://cdn.corporate.walmart.com/12/9d/06ecf3584e91acccc37162f09714/logowhite.svg" alt="logo"/>
                <div className="item__text">
                    <p>Groceries & gifts delivered from our store as soon as today!</p>
                    <a href="/">Learn about Walmart+</a>
                </div>
            </Container>
        </div>
    );
}

export default AdsCompany;