import React, { Component } from 'react'
import Banner from "./Banner";
import Nav from "./Nav";
import SubNav from "./SubNav";
import ProductCategory from "./ProductCategory";

export class Header extends Component {
  render() {
    return (
      <>
        <Banner />
        <Nav />
        <SubNav />
        <ProductCategory />
      </>
    )
  }
}

export default Header;