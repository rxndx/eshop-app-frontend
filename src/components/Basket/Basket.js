import React from 'react';

function Basket() {
    return (
        <section class="card-main">
                <div class="information grid gap-4 grid-cols-1 md:grid-cols-4">
                    <div class="product-contains col-span-1 md:col-span-3">
                        <div class="shopping-card-items">
                            <table class="items-table listin">
                                <thead>
                                    <tr>
                                        <td><span>Product</span></td>
                                        <td><span>Price</span></td>
                                        <td><span>Quantity</span></td>
                                        <td><span>Total</span></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="product-info space-x-1">
                                                <div class="im-product">
                                                    <img src="https://d1fufvy4xao6k9.cloudfront.net/images/landings/421/brown-captoe-shoes-5.webp" alt="some"></img>
                                                </div>
                                                <div class="card-item-info">
                                                    <a class="item-name">Some name of zis</a>
                                                    <div>
                                                        <a class="text-name"><span>Remove</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="sale-price"><span>563.00</span></div>
                                        </td>
                                        <td class="table-cell"><span>1</span></td>
                                        <td class="table-cell"><span>563.00</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="submit-product">
                            <a class="button-link">
                                <span class="button-text">CHECKOUT</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Basket;