import './App.css';
import React, { Component } from 'react';
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Header/Banner";
import SimilarProducts from "./Components/ProductBody/SimilarProducts";
import ProductBody from './Components/ProductBody/ProductBody';

/* Product Array Block */
const Product = [
  {id: 0,
  Name: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  Price: '9.999',
  ProductIcon: "../Components/Images/BSImages/SlideOne.jpg"
}
];


export class App extends Component {
  constructor(){
    super();
    this.state = {product: Product}
  }

  render() {
    return (
      <>
            <Banner />
            <ProductBody 
            Product={this.state.product} 
            
            />
            <SimilarProducts /> 
            <Footer />
      </>
    )
  }
}

export default App;
