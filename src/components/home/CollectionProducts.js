import React from "react";

function CollectionProducts(props) {
    return (
        <div>
            <div class="center-product">
                <img class="product-image" src={props.image} alt="some"></img>
            </div>
            <h3 class="named-product">{props.name}</h3>
            <div class="information-product">
                <p>{props.description}</p>
            </div>
            <button class="button-link">View item</button>
        </div>
    )
}

export default CollectionProducts;