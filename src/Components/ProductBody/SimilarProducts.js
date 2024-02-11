import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Product1 from "../../Images/similarProducts/Product1.png";
import Product2 from "../../Images/similarProducts/Product2.png";
import Product3 from "../../Images/similarProducts/Product3.png";
import Product4 from "../../Images/similarProducts/Product4.png";
import BrandIcon from "../../Images/nav/Category.png";
import full360 from "../../Images/similarProducts/icons/fulldegree.png";
import Rating from '@mui/material/Rating';

export class SimilarProducts extends Component {
  constructor(){
    super();
    this.state = {Outer: {
			overflowY: "hidden",
			height: "100%"
    },
    Container: {
      width: "100%",
      flexWrap: "no-wrap",
      display: "flex",
      overflowX: "scroll",
			height: "485px",
			paddingBottom: "1rem",
      overflowY: "hidden"
    }
  }
  }
  render() {
    return (
      <div className="banner-sub pt-4">
        <div className="flex flex-col gap-y-3">
          {/* Similar Products Header */}
          <div className="flex flex-col gap-y-1">
            <div>
            <span className="text-2xl font-bold font-sans text-priceColor">Similar Products</span>
            </div>
            <div>
            <span className="text-lg font-sans text-black">You may like these product also</span>
            </div>
          </div>
          {/* Similar Products Slider */}
          <div className="w-full pb-3">
          <div style={this.state.Outer}>
            <div className="scroll" style={this.state.Container}>
              <div className="Cards flex flex-row gap-x-8">
                {/* Similar Products Cars */}

                <div>
                <Card style={{ width: "268px", height:"465px", padding:"0.5rem", border: "0.7551665306091309px solid #ECECEC" }}>
                  <div className="w-10 h-10 bg-white absolute top-4 left-4 rounded-md">
                    <button type="button" className="p-1 text-center w-full">
                    <img src={full360} className="rotate-0 hover:rotate-180 transition-all duration-150" width={"100%"} alt="360" />
                    </button>
                  </div>
                  <Card.Img variant="top" width={"100%"} src={Product1} />
                  <Card.Body>
                    <Card.Title>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Card.Title>
                    <div className="flex flex-col gap-y-2 w-full">
                      {/* Prices & CatIcon */}
                      <div className="cardFot flex flex-row justify-between">
                        {/* price */}
                        <div className="flex flex-col gap-y-2 justify-start">
                          <div className="text-left">
                            {/* real-price */}
                  <span className="text-xl font-bold font-sans text-priceColor">{"9,999"} <span className="text-base">LE</span></span>
                          </div>
                          <div>
                            {/* dicount */}
                            <div className="pPrice flex flex-row gap-x-2">
                  <div>
                  <span className="text-sm font-bold font-sans text-black opacity-30">
                    <del>
                    {"9,999"} LE
                    </del>
                  </span>
                  </div>
                  <div>
                    <span className="text-xs font-sans font-bold bg-saleBg px-1 py-1">
                        {"50% Off"}
                    </span>
                  </div>
                </div>
                          </div>
                        </div>
                        {/* Brand Icon */}
                        <div className="justify-end pt-2">
                  <img src={BrandIcon} alt={"brand-icon"} width={"65px"} />
                        </div>
                      </div>
                      {/* rate & details */}
                      <div className="flex flex-col gap-y-2 pt-2">
                        {/* rate */}
                        <div className="rate flex flex-row justify-center gap-x-2">
                          <div>
                          <Rating name="half-rating-read" size={"medium"} defaultValue={4} precision={0.5} readOnly />
                          </div>
                          <div>
                            <b className="text-sm">4.9 of 5</b>
                          </div>
                        </div>
                        {/* details */}
                        <div className="flex justify-center">
                        <div className="text-sm font-sans font-semibold">
                          Pickup From: <b>{"Genena Mall"}</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </div>

                <div>
                <Card style={{ width: "268px", height:"465px", padding:"0.5rem", border: "0.7551665306091309px solid #ECECEC" }}>
                <div className="w-10 h-10 bg-white absolute top-4 left-4 rounded-md">
                    <button type="button" className="p-1 text-center w-full">
                    <img src={full360} className="rotate-0 hover:rotate-180 transition-all duration-150" width={"100%"} alt="360" />
                    </button>
                  </div>
                  <Card.Img variant="top" width={"100%"} src={Product2} />
                  <Card.Body>
                    <Card.Title>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Card.Title>
                    <div className="flex flex-col gap-y-2 w-full">
                      {/* Prices & CatIcon */}
                      <div className="cardFot flex flex-row justify-between">
                        {/* price */}
                        <div className="flex flex-col gap-y-2 justify-start">
                          <div className="text-left">
                            {/* real-price */}
                  <span className="text-xl font-bold font-sans text-priceColor">{"9,999"} <span className="text-base">LE</span></span>
                          </div>
                          <div>
                            {/* dicount */}
                            <div className="pPrice flex flex-row gap-x-2">
                  <div>
                  <span className="text-sm font-bold font-sans text-black opacity-30">
                    <del>
                    {"9,999"} LE
                    </del>
                  </span>
                  </div>
                  <div>
                    <span className="text-xs font-sans font-bold bg-saleBg px-1 py-1">
                        {"50% Off"}
                    </span>
                  </div>
                </div>
                          </div>
                        </div>
                        {/* Brand Icon */}
                        <div className="justify-end pt-2">
                  <img src={BrandIcon} alt={"brand-icon"} width={"65px"} />
                        </div>
                      </div>
                      {/* rate & details */}
                      <div className="flex flex-col gap-y-2 pt-2">
                        {/* rate */}
                        <div className="rate flex flex-row justify-center gap-x-2">
                          <div>
                          <Rating name="half-rating-read" size={"medium"} defaultValue={4} precision={0.5} readOnly />
                          </div>
                          <div>
                            <b className="text-sm">4.9 of 5</b>
                          </div>
                        </div>
                        {/* details */}
                        <div className="cardFot flex flex-row justify-between">
                          <div className="text-sm font-sans font-semibold justify-start">
                          From: <b>{"UK"}</b>
                          </div>
                          <div className="text-sm font-sans font-semibold justify-center">
                          To: <b>{"Egypt"}</b>
                          </div>
                          <div className="text-sm font-sans font-semibold justify-end">
                          in: <b>{"10"} Days</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </div>

                <div>
                <Card style={{ width: "268px", height:"465px", padding:"0.5rem", border: "0.7551665306091309px solid #ECECEC" }}>
                <div className="w-10 h-10 bg-white absolute top-4 left-4 rounded-md">
                    <button type="button" className="p-1 text-center w-full">
                    <img src={full360} className="rotate-0 hover:rotate-180 transition-all duration-150" width={"100%"} alt="360" />
                    </button>
                  </div>
                  <Card.Img variant="top" width={"100%"} src={Product3} />
                  <Card.Body>
                    <Card.Title>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Card.Title>
                    <div className="flex flex-col gap-y-2 w-full">
                      {/* Prices & CatIcon */}
                      <div className="cardFot flex flex-row justify-between">
                        {/* price */}
                        <div className="flex flex-col gap-y-2 justify-start">
                          <div className="text-left">
                            {/* real-price */}
                  <span className="text-xl font-bold font-sans text-priceColor">{"9,999"} <span className="text-base">LE</span></span>
                          </div>
                          <div>
                            {/* dicount */}
                            <div className="pPrice flex flex-row gap-x-2">
                  <div>
                  <span className="text-sm font-bold font-sans text-black opacity-30">
                    <del>
                    {"9,999"} LE
                    </del>
                  </span>
                  </div>
                  <div>
                    <span className="text-xs font-sans font-bold bg-saleBg px-1 py-1">
                        {"50% Off"}
                    </span>
                  </div>
                </div>
                          </div>
                        </div>
                        {/* Brand Icon */}
                        <div className="justify-end pt-2">
                  <img src={BrandIcon} alt={"brand-icon"} width={"65px"} />
                        </div>
                      </div>
                      {/* rate & details */}
                      <div className="flex flex-col gap-y-2 pt-2">
                        {/* rate */}
                        <div className="rate flex flex-row justify-center gap-x-2">
                          <div>
                          <Rating name="half-rating-read" size={"medium"} defaultValue={4} precision={0.5} readOnly />
                          </div>
                          <div>
                            <b className="text-sm">4.9 of 5</b>
                          </div>
                        </div>
                        {/* details */}
                        <div className="flex justify-center">
                        <div className="text-sm font-sans font-semibold">
                          Pickup From: <b>{"Genena Mall"}</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </div>

                <div>
                <Card style={{ width: "268px", height:"465px", padding:"0.5rem", border: "0.7551665306091309px solid #ECECEC" }}>
                <div className="w-10 h-10 bg-white absolute top-4 left-4 rounded-md">
                    <button type="button" className="p-1 text-center w-full">
                    <img src={full360} className="rotate-0 hover:rotate-180 transition-all duration-150" width={"100%"} alt="360" />
                    </button>
                  </div>
                  <Card.Img variant="top" width={"100%"} src={Product4} />
                  <Card.Body>
                    <Card.Title>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Card.Title>
                    <div className="flex flex-col gap-y-2 w-full">
                      {/* Prices & CatIcon */}
                      <div className="cardFot flex flex-row justify-between">
                        {/* price */}
                        <div className="flex flex-col gap-y-2 justify-start">
                          <div className="text-left">
                            {/* real-price */}
                  <span className="text-xl font-bold font-sans text-priceColor">{"9,999"} <span className="text-base">LE</span></span>
                          </div>
                          <div>
                            {/* dicount */}
                            <div className="pPrice flex flex-row gap-x-2">
                  <div>
                  <span className="text-sm font-bold font-sans text-black opacity-30">
                    <del>
                    {"9,999"} LE
                    </del>
                  </span>
                  </div>
                  <div>
                    <span className="text-xs font-sans font-bold bg-saleBg px-1 py-1">
                        {"50% Off"}
                    </span>
                  </div>
                </div>
                          </div>
                        </div>
                        {/* Brand Icon */}
                        <div className="justify-end pt-2">
                  <img src={BrandIcon} alt={"brand-icon"} width={"65px"} />
                        </div>
                      </div>
                      {/* rate & details */}
                      <div className="flex flex-col gap-y-2 pt-2">
                        {/* rate */}
                        <div className="rate flex flex-row justify-center gap-x-2">
                          <div>
                          <Rating name="half-rating-read" size={"medium"} defaultValue={4} precision={0.5} readOnly />
                          </div>
                          <div>
                            <b className="text-sm">4.9 of 5</b>
                          </div>
                        </div>
                        {/* details */}
                        <div className="cardFot flex flex-row justify-between">
                          <div className="text-sm font-sans font-semibold justify-start">
                          From: <b>{"UK"}</b>
                          </div>
                          <div className="text-sm font-sans font-semibold justify-center">
                          To: <b>{"Egypt"}</b>
                          </div>
                          <div className="text-sm font-sans font-semibold justify-end">
                          in: <b>{"10"} Days</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </div>

                <div>
                <Card style={{ width: "268px", height:"465px", padding:"0.5rem", border: "0.7551665306091309px solid #ECECEC" }}>
                  <div className="w-10 h-10 bg-white absolute top-4 left-4 rounded-md">
                    <button type="button" className="p-1 text-center w-full">
                    <img src={full360} className="rotate-0 hover:rotate-180 transition-all duration-150" width={"100%"} alt="360" />
                    </button>
                  </div>
                  <Card.Img variant="top" width={"100%"} src={Product1} />
                  <Card.Body>
                    <Card.Title>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Card.Title>
                    <div className="flex flex-col gap-y-2 w-full">
                      {/* Prices & CatIcon */}
                      <div className="cardFot flex flex-row justify-between">
                        {/* price */}
                        <div className="flex flex-col gap-y-2 justify-start">
                          <div className="text-left">
                            {/* real-price */}
                  <span className="text-xl font-bold font-sans text-priceColor">{"9,999"} <span className="text-base">LE</span></span>
                          </div>
                          <div>
                            {/* dicount */}
                            <div className="pPrice flex flex-row gap-x-2">
                  <div>
                  <span className="text-sm font-bold font-sans text-black opacity-30">
                    <del>
                    {"9,999"} LE
                    </del>
                  </span>
                  </div>
                  <div>
                    <span className="text-xs font-sans font-bold bg-saleBg px-1 py-1">
                        {"50% Off"}
                    </span>
                  </div>
                </div>
                          </div>
                        </div>
                        {/* Brand Icon */}
                        <div className="justify-end pt-2">
                  <img src={BrandIcon} alt={"brand-icon"} width={"65px"} />
                        </div>
                      </div>
                      {/* rate & details */}
                      <div className="flex flex-col gap-y-2 pt-2">
                        {/* rate */}
                        <div className="rate flex flex-row justify-center gap-x-2">
                          <div>
                          <Rating name="half-rating-read" size={"medium"} defaultValue={4} precision={0.5} readOnly />
                          </div>
                          <div>
                            <b className="text-sm">4.9 of 5</b>
                          </div>
                        </div>
                        {/* details */}
                        <div className="flex justify-center">
                        <div className="text-sm font-sans font-semibold">
                          Pickup From: <b>{"Genena Mall"}</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                </div>

              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SimilarProducts;