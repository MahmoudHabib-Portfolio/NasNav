import React, { Component } from 'react'
import AppBar from "../../Images/banner/Appbar.png";
import Yeshtery from "../../Images/banner/Applogo.png";
import Phone from "../../Images/banner/icons/phone.png";
import Cart from "../../Images/banner/icons/Cart.png";
import Mapin from "../../Images/banner/icons/mapin.png";
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";
import Button from '@mui/material/Button';

export class Banner extends Component {

  showMenu = () => {
    console.log("showMenu");
  }

  render() {
    return (
      <>
        <div className="banner">
          <div className="banner-sub py-2 px-2">
            <div className="flex flex-row gap-y-3 justify-between">
              <div className="flex justify-start">
                <div className="flex gap-x-6">
                  {/* MenuBar */}
                  <div>
                    <button type="button" onClick={this.showMenu}>
                      <img src={AppBar} alt="menu-bar" width={"20"} />
                    </button>
                  </div>
                  {/* AppLogo */}
                  <div>
                    <a href="https://www.yeshtery.com/">
                    <img src={Yeshtery} alt="yeshtery-logo" width={"85"} />
                    </a>
                  </div>
                </div>
              </div>
              {/* Offer Bar */}
              <div className="flex justify-center text-sm font-medium pt-1">
                  <TfiAngleLeft />
                  &nbsp;
                  &nbsp;
                  <div className="text-sm leading-none">
                  Valentine's Day Offers! Buy Two Get One Free &nbsp;<a href="https://www.yeshtery.com/" className="text-second-color font-semibold font-mono shop">Shop Now</a>
                  </div>
                    &nbsp;
                    &nbsp;
                  <TfiAngleRight />
              </div>
              <div className="flex justify-end gap-x-6">
                {/* ContactUs */}
                <div>
                  <Button sx={{color:"#000",
                  "&:hover":{backgroundColor:"#FFF100"},
                   textTransform:"initial",
                    padding:"0px",
                     fontWeight:"bold",
                      fontSize:"12px"
                    }} 
                      disableRipple={true}
                      startIcon={<img src={Phone} alt="call" width={18} />}>
                    Contact Us
                  </Button>
                </div>
                {/* Cart */}
                <div>
                <Button sx={{color:"#000",
                  "&:hover":{backgroundColor:"#FFF100"},
                   textTransform:"initial",
                    padding:"0px",
                     fontWeight:"bold",
                      fontSize:"12px"}} 
                      disableRipple={true}
                      startIcon={<img src={Cart} alt="ShoppingCart" width={18} />}>
                    Track Order
                  </Button>
                </div>
                {/* Map-Pin */}
                <div>
                <Button sx={{color:"#000",
                  "&:hover":{backgroundColor:"#FFF100"},
                   textTransform:"initial",
                    padding:"0px",
                     fontWeight:"bold",
                      fontSize:"12px"}} 
                      disableRipple={true}
                      startIcon={<img src={Mapin} alt="call" width={16} />}>
                    Find A Store
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Banner;