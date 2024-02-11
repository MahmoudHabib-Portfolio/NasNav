import React, { Component } from 'react'

export class SubNav extends Component {

  render() {
    return (
      <>
          <div className="subNav">
            <div className="banner-sub py-2">
              <div className="flex flex-row gap-y-5 justify-start gap-x-28">
                <div>
                  <a href="/">
                    <span className="text-sm text-white font-bold font-sans">Men</span>
                  </a>
                </div>
                <div>
                  <a href="/">
                    <span className="text-sm text-white font-bold font-sans">Women</span>
                  </a>
                </div>
                <div>
                  <a href="/">
                    <span className="text-sm text-white font-bold font-sans">Unisex</span>
                  </a>
                </div>
                <div>
                  <a href="/">
                    <span className="text-sm text-white font-bold font-sans">Kids</span>
                  </a>
                </div>
                <div>
                  <a href="/">
                    <span className="text-sm text-white font-bold font-sans">Best Sellers</span>
                  </a>
                </div>
                <div>
                  <a href="/">
                    <span className="text-sm text-white font-bold font-sans">New Arrivals</span>
                  </a>
                </div>
                <div>
                  <a href="/">
                    <span className="text-sm text-red-500 font-bold font-sans">Offers</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </>
    )
  }
}

export default SubNav;