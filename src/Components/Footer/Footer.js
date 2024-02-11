import React, { Component } from 'react'
import FooterLogo from "../../Images/footer/footerlogo.png";
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MssgIcon from "../../Images/footer/icons/message.png";
import Badge from '@mui/material/Badge';
import Facebook from "../../Images/footer/icons/facebook.png";
import Twitter from "../../Images/footer/icons/twitter.png";
import LinkedIn from "../../Images/footer/icons/linkedin.png";
import Instagram from "../../Images/footer/icons/instagram.png";
import Cash from "../../Images/footer/icons/cash.png";
import Visa from "../../Images/footer/icons/visa.png";
import MasterC from "../../Images/footer/icons/master.png";
import NasNav from "../../Images/footer/icons/copyright.png";

//Creating Email Field
const EmailField = styled(TextField)({
  '& .MuiInputBase-root':{
    backgroundColor: '#fff',
    padding: '5px 12px',
    fontSize: '14px',
    width: '390px',
    letterSpacing: '0.8px',
    borderColor: '#fff',
    borderRadius: "80px"
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: "#fff",
      borderRadius: "100px"
    },
    '&:hover fieldset': {
      borderColor: '#fff'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
      '&::placeholder':{
        color:"#000"
      }
    }
  }
});

export class Footer extends Component {
  constructor(){
    super();
    this.state = {emailTerm: ""}
  }
  render() {
    return (
      <>
        <div className="footer pt-10 pb-2">
          <div className="footer-sub">
            <div className="flex flex-col">
              {/* footer Body */}
                <div className="flex footer-block flex-row pb-6">
                  {/* footer Content */}
                  <div className="flex flex-col pr-12 borderRight">
                    {/* footer logo */}
                    <div className="flex justify-start">
                      <a href="/">
                        <img src={FooterLogo} alt="footer-logo" width={150}/>
                      </a>
                    </div>
                    {/* footer content */}
                    <div className="flex justify-start pt-4">
                      <p className="text-sm text-white font-semibold">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                      </p>
                    </div>
                    {/* footer content */}
                    <div className="flex justify-start">
                      <p className="text-sm text-white font-semibold">
                      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. 
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia
                      </p>
                    </div>
                    {/* footer content */}
                    <div className="flex justify-start">
                      <p className="text-sm text-white font-semibold">
                      m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                      </p>
                    </div>
                  </div>
                  {/* footer SiteMap */}
                  <div className="flex flex-col subscibe pl-12">
                    <div className="flex flex-col">
                    <div className="flex pb-2 justify-center subscribe">
                      <span className="text-white font-semibold text-sm">
                        Subscribe to our newsletter
                      </span>
                    </div>
                    {/* Email Field */}
                    <div className="flex w-full justify-center">
                    <div className="relative flex max-w-[24rem] rounded-full bg-white text-black">
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailField
                    fullWidth
                    value={this.state.emailTerm}
                    inputProps={{
                      sx: {
                        width: "70%",
                        color: '#000',
                        fontSize: '12px',
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        backgroundColor: '#fff',
                        padding:'6px 0px',
                        '&::placeholder':{
                          color:"#000",
                          opacity: 1,
                          fontWeight:"bold"
                        }
                      },
                      }}
                      placeholder="Enter Your Email"
                      onChange={(e) => this.setState({emailTerm: e.target.value})}
                      className="Subscribefield"
                      />
                </Box>
                <Button
                    size="sm"
                    sx={{
                      backgroundColor: "#FFF100 ",
                      textTransform:"inherit",
                      fontSize:"11px",
                      fontWeight:"bold",
                      borderRadius:"100px",
                      color:"#000",
                      fontFamily:"sans-serif",
                      padding: "6px 16px",
                      "&:hover":{
                      backgroundColor:"#FFF100"
                    }}}
                    disableRipple={true}
                    className="!absolute right-0 top-1"
                    endIcon={<img src={MssgIcon} alt="msg-icon" width={20}/>}
                  >
                    Subscribe
                  </Button>
                    </div>
                    </div>
                    </div>
                    {/* Social Section & SiteMap */}
                    <div className="flex flex-row Social justify-between pt-3">
                      
                      {/* SiteMap */}
                      <div className="flex-col Social justify-start">
                        <div className="py-1">
                        <a href="/">
                          <span className="text-sm text-white font-semibold font-sans">About Us</span>
                        </a>
                        </div>
                        <div>
                        <a href="/">
                          <span className="text-sm text-white font-semibold font-sans">Contact Us</span>
                        </a>
                        </div>
                        <div className="py-1">
                        <a href="/">
                          <span className="text-sm text-white font-semibold font-sans">Track Order</span>
                        </a>
                        </div>
                        <div className="py-1">
                        <a href="/">
                          <span className="text-sm text-white font-semibold font-sans">Terms & Conditions</span>
                        </a>
                        </div>
                        <div className="py-1">
                        <a href="/">
                          <span className="text-sm text-white font-semibold font-sans">Privacy Policy</span>
                        </a>
                        </div>
                        <div className="py-1">
                        <a href="/">
                          <span className="text-sm text-white font-semibold font-sans">Sell With Us</span>
                        </a>
                        </div>
                        <div className="py-1">
                        <a href="/">
                          <span className="text-sm text-white font-semibold font-sans">Shipping And Returns</span>
                        </a>
                        </div>
                      </div>

                      {/* Social Media Links */}
                      <div className="flex-col Social justify-end pt-2 borderLeft pl-12">
                        {/* facebook */}
                        <div className="py-1">
                          <a href="/">
                          <Button sx={{color:"#fff",
                          "&:hover":{backgroundColor:"#3C3C3B"},
                          textTransform:"initial",
                            padding:"0px",
                            fontWeight:"bold",
                              fontSize:"12px"}} 
                              disableRipple={true}
                              >
                            <div className="flex gap-x-3">
                            <div> 
                            <Badge 
                            color="secondary" 
                            >
                              <img src={Facebook} alt="Cart" width={25}/>
                            </Badge>
                            </div>
                            <div className="font-semibold text-sm">
                              /YESHTERY
                            </div>
                            </div>
                              </Button>
                          </a>
                        </div>
                        <div className="py-1">
                        <a href="/">
                        <Button sx={{color:"#fff",
                          "&:hover":{backgroundColor:"#3C3C3B"},
                          textTransform:"initial",
                            padding:"0px",
                            fontWeight:"bold",
                              fontSize:"12px"}} 
                              disableRipple={true}
                              >
                            <div className="flex gap-x-3">
                            <div> 
                            <Badge 
                            color="secondary" 
                            >
                              <img src={LinkedIn} alt="Cart" width={25}/>
                            </Badge>
                            </div>
                            <div className="font-semibold text-sm">
                              /YESHTERY
                            </div>
                            </div>
                              </Button>
                        </a>
                        </div>
                        <div className="py-1">
                        <a href="/">
                        <Button sx={{color:"#fff",
                          "&:hover":{backgroundColor:"#3C3C3B"},
                          textTransform:"initial",
                            padding:"0px",
                            fontWeight:"bold",
                              fontSize:"12px"}} 
                              disableRipple={true}
                              >
                            <div className="flex gap-x-3">
                            <div> 
                            <Badge 
                            color="secondary" 
                            >
                              <img src={Instagram} alt="Cart" width={25}/>
                            </Badge>
                            </div>
                            <div className="font-semibold text-sm">
                              /YESHTERY
                            </div>
                            </div>
                              </Button>
                        </a>
                        </div>
                        <div className="py-1">
                          <a href="/">
                          <Button sx={{color:"#fff",
                          "&:hover":{backgroundColor:"#3C3C3B"},
                          textTransform:"initial",
                            padding:"0px",
                            fontWeight:"bold",
                              fontSize:"12px"}} 
                              disableRipple={true}
                              >
                            <div className="flex gap-x-3">
                            <div> 
                            <Badge 
                            color="secondary" 
                            >
                              <img src={Twitter} alt="Cart" width={25}/>
                            </Badge>
                            </div>
                            <div className="font-semibold text-sm">
                              /YESHTERY
                            </div>
                            </div>
                              </Button>
                          </a>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                </div>
              {/* Copyright */}
              <div className="footIcon flex flex-row justify-between borderTop gap-y-3 py-3 px-2">
                {/* Copyright */}
              <div className="flex justify-start text-white text-xs leading-6">
                <span>&copy; 2021 yeshtery all rights reserved.</span>
              </div>
              {/* Payment Methods */}
              <div className="flex justify-center">
                <div className="flex flex-row">
                  <div className="px-2">
                    <img src={Cash} alt="CashPay" width={75}/>
                  </div>
                  <div className="px-2">
                    <img src={Visa} alt="Visa" width={50}/>
                  </div>
                  <div className="px-2">
                    <img src={MasterC} alt="Visa" width={50}/>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex flex-row">
                  <div className="text-white font-thin text-sm leading-5">
                    Powered By &nbsp;
                  </div>
                  <div className="pt-1">
                    <img src={NasNav} alt="nasnav" width={75} />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Footer;