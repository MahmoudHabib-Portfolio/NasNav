import React, { Component } from 'react'

export class ProductCategory extends Component {
  render() {
    return (
      <>
         <div className="banner-sub py-2">
          <div className="flex flex-row justify-start">
            <ul>
              <li>
                  <a href="/">
                    <span className="text-sm text-black font-semibold font-sans">Men</span>
                  </a>  
              </li> /
              <li>
                  <a href="/">
                    <span className="text-sm text-black font-semibold font-sans">Clothing</span>
                  </a>  
              </li> /
              <li>
                  <a href="/">
                    <span className="text-sm text-black font-semibold font-sans">Tops</span>
                  </a>  
              </li> /
              <li>
                  <a href="/">
                    <span className="text-sm text-black font-semibold font-sans">Adidas</span>
                  </a>  
              </li> /
              <li>
                  <a href="/" className="prod">
                    <span className="text-sm text-black font-semibold font-sans">Adidas Black T-shirt</span>
                  </a>  
              </li>
            </ul>
          </div>
         </div>
      </>
    )
  }
}

export default ProductCategory;