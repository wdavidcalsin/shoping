import React from 'react';
import AddIcon from '@material-ui/icons/Add';

function Category(){
    return (
        <div className="category">
            <div className="title__content">
                <div className="title__left"></div>
                <h2>Shop by category</h2>
                <a href="/">See More
                    <AddIcon/>
                </a>
            </div>
            <div className="items">
                <div className="item__category">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-632e/k2-_0369743f-ee4e-448a-8c85-f667a41fc240.v1.jpg" alt=""/>
                    <p>Electronics</p>
                </div>
                <div className="item__category">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-f320/k2-_1a167373-40c8-4aff-9ff6-92cf5325a4fd.v1.jpg" alt=""/>
                    <p>Electronics</p>
                </div>
                <div className="item__category">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-2931/k2-_6e9f915c-0d69-494b-9885-fec88cab763c.v1.jpg" alt=""/>
                    <p>Electronics</p>
                </div>
                <div className="item__category">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-a59d/k2-_d759941b-4b92-400e-8fb6-30dbc719321a.v1.jpg" alt=""/>
                    <p>Electronics</p>
                </div>
                <div className="item__category">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-772a/k2-_bdb0dc55-7288-44c8-acae-7afcfb4a669c.v1.jpg" alt=""/>
                    <p>Electronics</p>
                </div>
                <div className="item__category">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-4f94/k2-_bda79f0e-2cb6-4b14-aac5-5cf3ff3921c2.v1.jpg" alt=""/>
                    <p>Electronics</p>
                </div>
                <div className="item__category">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-9227/k2-_e4d44049-58c1-449c-9fd2-ba4295c9fba6.v1.jpg" alt=""/>
                    <p>Electronics</p>
                </div>
                <div className="item__category">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-57df/k2-_2faee617-8076-48d3-beca-3ac4d77d79a8.v1.jpg" alt=""/>
                    <p>Electronics</p>
                </div>
            </div>
        </div>
    )
}

export default Category;