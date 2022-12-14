import React from "react";

function Collection(props) {
    return (
        <div class="snap-slinder-item_link">
           <img class="slinder-icon" src="https://i.allo.ua/media/catalog/category/mega_menu/Appliances.png" alt=""></img>
           <p>{props.name}</p>
        </div>
    )
  }

  export default Collection;