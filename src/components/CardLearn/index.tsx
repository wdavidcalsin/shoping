import React from 'react';

function CardLearn(){
    return(
        <div className="card__learn" >
            <div>
                <div className="item__card">
                    <h1>Pickup or dilevery</h1>
                    <div className="content__card">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-182b/k2-_9c66a916-9209-4d38-9ca8-66a02f3c7f87.v1.jpg" alt=""/>
                        <h2>Groceries & even more</h2>
                        <h3>1919 Davis St, San Leandro</h3>
                        <a href="/">Start your order</a>   
                    </div>
                </div>
                <div className="item__card">
                    <h1>5% cash back</h1>
                    <div className="content__card">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-24af/k2-_2d9296a2-c789-4ad6-ada3-30c633c18644.v1.jpg" alt=""/>
                        <h2>Earn 5% cash back</h2>
                        <h3>every day on Walmart.com.</h3>
                        <a href="/">Start your order</a>   
                    </div>
                </div>
                <div className="item__card">
                    <h1>Big savings</h1>
                    <div className="content__card">
                        <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-f36f/k2-_fce40a3e-0b7c-4644-9056-3daa4bea0817.v1.jpg" alt=""/>
                        <h2>Black Friday deals</h2>
                        <h3>Starting on 11/4, 7 PM ET.</h3>
                        <a href="/">Start your order</a>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardLearn;