import React from 'react';

import Board from './Reviews';

function Item() {
    return(
        <section class="product-page">
        <div class="product-information">
            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div>
                    <div id="product-current-image" class="product-image product-single-page-image flex justify-center items-center">
                        <img src="https://i.insider.com/613fbae6261771001825ec35?width=1136&format=jpeg" alt="some" class="self-center"></img>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 class="product-name">Name of</h1>
                        <h4 class="product-price"><span class="sale-price">565.00</span></h4>
                        <h4 class="product-desctiption"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio voluptatum ab alias dignissimos exercitationem! Aliquam nam voluptatum, pariatur beatae, eum minus doloribus officiis aperiam eius, vel iusto esse soluta!</span></h4>
                        <form id="productForm" action="" method="post">
                            <input type="hidden" name="productId" value="1"></input>
                            <div class="mt-1">
                                <button class="edit-button"><span class="basket-button">Add at basket</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Board/>
    </section>
    );
}

export default Item;