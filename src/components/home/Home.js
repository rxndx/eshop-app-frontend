import React from 'react';
import axios from 'axios';
import Collection from './Collenction';
import { Component } from "react";

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    takeCategories() {
        axios.get('http://localhost:8080/categories').then(response => {
            var data = response.data.categories;
            this.setState({ data: data })
        })
    }

    componentDidMount() {
        this.takeCategories();
    }

    render() {
        return (
            <main className="content">
                <section class="cataloges">
                    <div class="snap-slider">
                        <div class="snap-slider_information">
                            <div class="snap-slider_item">
                                {this.state.data.map(collection => { return <Collection key={collection.id} name={collection.name} /> })}
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
        )
    }
}