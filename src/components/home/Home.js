import React from 'react';
import axios from 'axios';
import Collection from './Collenction';
import CollectionProducts from './CollectionProducts';
import { Component } from "react";

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [],
            productsList: [],
            image: "",
        }
    }

    takeCategories() {
        axios.get('http://localhost:8080/categories').then(response => {
            var data = response.data.categories;
            this.setState({ categories: data })
        })
    }

    async takeProducts() {
        await axios.get('http://localhost:8080/products?category=1').then(response => {
            var data = response.data.products;
            this.setState({ productsList: data })
        })
    }

    async takeImage() {
        await this.state.productsList.forEach((product) => {
            axios.get(`http://localhost:8080/images/${product.image}`, { responseType: "blob" }).then(response => {
                var imageBlob = response.data;
                const imageObjectURL = URL.createObjectURL(imageBlob);
                console.log(imageObjectURL)
                this.setState(prevState => ({
                    productsList: prevState.productsList.map(
                        el => el.id === product.id ? { ...el, image: imageObjectURL } : el
                    )
                }))
            })
        })
    }

    async componentDidMount() {
        this.takeCategories();
        await this.takeProducts();
        await this.takeImage();
    }

    render() {
        return (
            <main className="content">
                <section class="cataloges">
                    <div class="snap-slider">
                        <div class="snap-slider_information">
                            {this.state.categories.map(collection => { return <Collection key={collection.id} name={collection.name} /> })}
                        </div>
                    </div>
                </section>
                <section class="some-products">
                    <div class="extraction-products grid-cols-1 md:grid-cols-3 gap-2 page-width">
                        {this.state.productsList.map(collection => { return <CollectionProducts key={collection.id} name={collection.name} description={collection.description} image={collection.image} /> })}
                    </div>
                </section>
            </main>
        )
    }
}