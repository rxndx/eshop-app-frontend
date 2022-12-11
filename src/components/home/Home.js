import React from 'react';

function Home() {
    return (
      <main className="content">
            <section class="cataloges">
                <div class="snap-slider">
                    <div class="snap-slider_information">
                        <div class="snap-slider_item">
                            <a class="snap-slinder-item_link">
                                <img src="https://i.allo.ua/media/catalog/category/mega_menu/Appliances.png" alt="some" class="slinder-icon"></img>
                                <p>Household appliances</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="some-products">
                <div class="extraction-products grid-cols-1 md:grid-cols-3 gap-2 page-width">
                    <div>
                        <div class="center-product">
                            <img src="https://i.insider.com/613fbae6261771001825ec35?width=1136&format=jpeg" alt="some"></img>
                        </div>
                        <h3 class="named-product">Men shoes collection</h3>
                        <div class="information-product">
                            <p>Constructed from luxury nylons, leathers, and custom hardware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.</p>
                        </div>
                        <a class="button-link">View collection</a>
                    </div>
                </div>
            </section>
      </main>
    );
  }

export default Home;