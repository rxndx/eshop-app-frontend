import React from "react";

function Collection(props) {
    return (
        <div class="snap-slider_item">
            <div class="snap-slinder-item_link">
                <img class="slinder-icon" src="https://i.allo.ua/media/catalog/category/mega_menu/Appliances.png" alt=""></img>
                <h3 class="named-product">{props.name}</h3>
                <button class="button-link">View collection</button>
            </div>
        </div>
    )
}

export default Collection;