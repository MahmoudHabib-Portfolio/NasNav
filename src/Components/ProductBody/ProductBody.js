import React, { Component } from 'react';
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import Search from "../../Images/nav/icons/Search.png";
import Category from "../../Images/nav/Category.png";
import UserLogin from "../../Images/nav/icons/User.png"; 
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Cart from "../../Images/nav/icons/Cart.png";
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Wishlist from "../../Images/nav/icons/Wishlist.png";
import Productmg from "../../Images/BSImages/SlideOne.jpg";
import {Drawer} from "antd";
import {MdClose} from "react-icons/md";
import SubNav from '../Header/SubNav';
import ProductCategory from '../Header/ProductCategory';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import Rating from '@mui/material/Rating';
import BrandIcon from "../../Images/nav/Category.png";
import artboard1 from "../../Images/ColorIcon/artboard1.png";
import artboard2 from "../../Images/ColorIcon/artboard2.png";
import Fab from '@mui/material/Fab';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import full360 from "../../Images/similarProducts/icons/fulldegree.png";

//Creating SearchFilter Field
const SearchFilter = styled(TextField)({
  '& .MuiInputBase-root':{
    backgroundColor: '#fff',
    padding: '0px 12px',
    fontSize: '14px',
    width: '275px',
    letterSpacing: '0.8px'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#D8D8D8'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '0.8px solid #D8D8D8',
      borderRadius: '15px'
    },
    '&:hover fieldset': {
      borderColor: '#D8D8D8'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D8D8D8',
      borderWidth: '0.8px',
      '&::placeholder':{
        color:"#000"
      }
    }
  }
});


/* Product Body */
export class ProductBody extends Component {
  constructor(props){
    super(props);
    this.state = {SearchTerm:"",
                  open: false,
                  bgs: "#fff",
                  bgm: "#fff",
                  bgl: "#ececec",
                  bgx: "#fff",
                  bgxx: "#fff",
                  border: "1.8px solid #542E90",
                  Quantity: 1,
                  product: props.Product,
                  Cartitems: []
                  }
  }

  /* Openning Cart Function */
  showDrawer = () => {
    this.setState({open: true});
  }
  /* Closing Cart Function */
  closeDrawer = () => {
    this.setState({open: false});
  }

  onSmall = () => {
    this.setState({bgs: "#ececec"});
    this.setState({bgm: "#fff"});
    this.setState({bgl: "#fff"});
    this.setState({bgx: "#fff"});
    this.setState({bgxx: "#fff"});
  }

  onMedium = () => {
    this.setState({bgs: "#fff"});
    this.setState({bgm: "#ececec"});
    this.setState({bgl: "#fff"});
    this.setState({bgx: "#fff"});
    this.setState({bgxx: "#fff"});
  }

  onLarge = () => {
    this.setState({bgs: "#fff"});
    this.setState({bgm: "#fff"});
    this.setState({bgl: "#ececec"});
    this.setState({bgx: "#fff"});
    this.setState({bgxx: "#fff"});
  }

  onXlagre = () => {
    this.setState({bgs: "#fff"});
    this.setState({bgm: "#fff"});
    this.setState({bgl: "#fff"});
    this.setState({bgx: "#ececec"});
    this.setState({bgxx: "#fff"});
  }

  onXXlarge = () => {
    this.setState({bgs: "#fff"});
    this.setState({bgm: "#fff"});
    this.setState({bgl: "#fff"});
    this.setState({bgx: "#fff"});
    this.setState({bgxx: "#ececec"});
  }

  togBorder = () => {
    this.setState(prevState => ({border: !prevState.border}));
  }

  IncQuantity = () => {
    this.setState(q => ({Quantity: q.Quantity + 1}));
  }

  DecQuantity = () => {
    this.setState(q => ({Quantity: q.Quantity - 1}));
  }

  render() {

    /* getting CartItems List */
    let Show = false;
    let Hide = true;

    /* Showing the Product items in cart */
    if(this.state.Cartitems.length > 0){
      Show = !Show;
    }

    /* Adding Product Item by id to the cart array */
    const onAddItem = (id) => {
    const item = this.state.product.filter((i) => i.id === id);
    if(item){
      this.setState({Cartitems: item});
    }
  }

  /* Adding Cart Total Cost */
  const TotalPrice = this.state.Cartitems.map(items => (items.Price) * (this.state.Quantity)).reduce((prev, curr) => prev + curr, 0);

  /* Removing Product Item from cart list */
  const onRemove = (id) => {
    const Rmitem = this.state.product.filter((i) => i.id !== id);
    if(Rmitem){
      this.setState({Cartitems: Rmitem});
    }
  }
  /* Hiding the Product items in cart */
  if(TotalPrice === 0){
    Show = !Hide;
  }

    return (
      <>
       <div className="banner-sub py-3 px-2">
            <div className="flex flex-row gap-y-6 justify-between">
              <div className="flex justify-start">
                {/* Search Bar */}
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchFilter
                    fullWidth
                    value={this.state.SearchTerm}
                    inputProps={{
                      sx: {
                        color: '#000',
                        fontSize: '14px',
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
                      InputProps={{
                        startAdornment:(
                          <InputAdornment position="start">
                            <img src={Search} alt="Search" width={18}/>
                          </InputAdornment>
                        )
                      }}
                      placeholder="Search"
                      onChange={(e) => this.setState({SearchTerm: e.target.value})}
                      />
                </Box>
              </div>
              <div className="flex justify-center">
                  <img src={Category} alt="Category" width={60}/>
              </div>
              <div className="flex justify-end gap-x-6 pt-2">
                {/* Cart */}
                <div>
                <Button sx={{color:"#000",
                  "&:hover":{backgroundColor:"#fff"},
                   textTransform:"initial",
                    padding:"0px",
                     fontWeight:"bold",
                      fontSize:"12px"}} 
                      disableRipple={true}
                      onClick={this.showDrawer}
                      >
                    <div className="flex gap-x-3">
                <div> 
                <Badge 
                color="secondary" 
                badgeContent={this.state.Cartitems.length}
                sx={{"& .MuiBadge-badge": {
                  backgroundColor: "#FFF100",
                  color:"#000",
                  minWidth: "15px",
                  height: "18px",
                  fontSize: "10px",
                  fontWeight:"bold"
                }}}>
                  <img src={Cart} alt="Cart" width={25}/>
                </Badge>
                </div>
                <div className="font-bold text-sm">
                  Cart
                </div>
                </div>
                  </Button>
                </div>
                {/* WishList */}
                <div>
                <Button sx={{color:"#000",
                  "&:hover":{backgroundColor:"#fff"},
                   textTransform:"initial",
                    padding:"0px",
                     fontWeight:"bold",
                      fontSize:"12px"}} 
                      disableRipple={true}
                      >
                    <div className="flex gap-x-2">
                <div>
                <Badge 
                color="secondary" 
                badgeContent={0}
                sx={{"& .MuiBadge-badge": {
                  backgroundColor: "#FFF100",
                  color:"#000",
                  minWidth: "15px",
                  height: "18px",
                  fontSize: "10px",
                  fontWeight:"bold"
                }}}>
                  <img src={Wishlist} alt="Cart" width={22} />
                </Badge>
                </div>
                <div className="font-bold text-sm">
                  Wishlist
                </div>
                </div>
                  </Button>
                </div>
                {/* Login */}
                <div>
                <Button sx={{color:"#000",
                  "&:hover":{backgroundColor:"#fff"},
                   textTransform:"initial",
                    padding:"0px",
                     fontWeight:"bold",
                      fontSize:"12px"}} 
                      disableRipple={true}
                      >
                    <div className="flex gap-x-2">
                <div>
                <Badge 
                color="secondary" 
                badgeContent={0}
                sx={{"& .MuiBadge-badge": {
                  backgroundColor: "#FFF100",
                  color:"#000",
                  minWidth: "15px",
                  height: "18px",
                  fontSize: "10px",
                  fontWeight:"bold"
                }}}>
                  <img src={UserLogin} alt="Cart" width={20} />
                </Badge>
                </div>
                <div className="font-bold text-sm">
                  Login
                </div>
                </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
      {/* SubNav */}
      <SubNav />
      {/* SubNav */}
      {/* ProductCategory */}
      <ProductCategory />
      {/* ProductCategory */}
      <hr style={{margin: "2px"}}/>


      {/* Product Section */}
      <div className="banner-sub">
      {this.state.product.map((prod, index) => {
        return(
          <>
            <div key={index}>
            <div className="product-sub flex flex-row pt-8 w-full">
        {/* Carousel */}
        <div className="basis-1/2 px-10">
        <div>
  <div id="carouselExampleCaptions" className="carousel slide carousel-fade bg-gray-50 rounded-md">
<div className="carousel-inner">
<div className="w-12 h-12 bg-white absolute top-0 left-4 rounded-md block z-50">
                <button type="button" className="p-1 text-center w-full">
                <img src={full360} className="rotate-0 hover:rotate-180 transition-all duration-150" width={"100%"} alt="360" />
                </button>
              </div>
          
<div className="carousel-item active">
  <img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/cdc683041d474edbbb87af4701554911_9366/IC5767_21_model.jpg" className="d-block w-100 rounded-md" alt="SlideOne" width={"100%"} />
</div>

<div className="carousel-item">
  <img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/1d719ef44e954fa1b3faaf47015552c5_9366/IC5767_23_hover_model.jpg" className="d-block w-100 rounded-md" alt="SlideTwo" width={"100%"} />
</div>

<div className="carousel-item">
  <img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/5dc5c6d1c2594c749c19af4701555aef_9366/IC5767_25_model.jpg" className="d-block w-100 rounded-md" alt="SlideThree" width={"100%"} />
</div>

<div className="carousel-item">
  <img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/19c887ae775d4b1e95d9af4701557ead_9366/IC5767_01_laydown.jpg" className="d-block w-100 rounded-md" alt="SlideFour" width={"100%"} />
</div>

</div>
</div>
<div className="CarCont flex flex-row justify-between pt-3">
{/* Left-Arrow */}
<div className="justify-start pt-4">
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true">
<SlArrowLeft className="text-3xl w-full" />
</span>
</button>
</div>
{/* Dotted */}
<div className="justify-center">
<div className="carousel-indicators">
        <button style={{width:"85px", height:"80px", opacity: "1"}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-label="Slide 1">
        <img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/cdc683041d474edbbb87af4701554911_9366/IC5767_21_model.jpg" className="d-block w-100" alt="SlideOne" width={"100%"} />
        </button>

        <button style={{width:"85px", height:"80px", opacity: "1"}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">
        <img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/1d719ef44e954fa1b3faaf47015552c5_9366/IC5767_23_hover_model.jpg" className="d-block w-100" alt="SlideTwo" width={"100%"} />
        </button>

        <button style={{width:"85px", height:"80px", opacity: "1"}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
        <img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/5dc5c6d1c2594c749c19af4701555aef_9366/IC5767_25_model.jpg" className="d-block w-100" alt="SlideThree" width={"100%"} />
        </button>

        <button style={{width:"85px", height:"80px", opacity: "1"}} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4">
        <img src="https://assets.adidas.com/images/w_1880,f_auto,q_auto/19c887ae775d4b1e95d9af4701557ead_9366/IC5767_01_laydown.jpg" className="d-block w-100" alt="SlideFour" width={"100%"} />
        </button>
</div>
</div>
{/* Right-Arrow */}
<div className="justify-end pt-4">
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true">
  <SlArrowRight className="text-3xl w-full" />
</span>
</button>
</div>
</div>

  </div>

        </div>
        {/* Product-details */}
        <div className="basis-1/2 pl-2">
          <div className='flex flex-col gap-y-1'>
            {/* Brand Icon */}
            <div className="py-1">
              <img src={BrandIcon} alt={"brand-icon"} width={"55px"} />
            </div>
            {/* Product title */}
            <div className="py-1 pr-6 pdetails">
              <span className="text-base font-bold font-sans text-black">
                {"Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit."}
              </span>
            </div>
            {/* Product Category */}
            <div className="pdetails">
            <span className="text-sm font-bold font-sans text-black opacity-50">
                {"Men"}
              </span>
            </div>
            {/* Product Rate & Price */}
            <div className="rate flex flex-row gap-x-2">
              <div>
              <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
              </div>
              <div>
                <b className="text-base">4.9 of 5</b>
              </div>
              <div>
                <span className="text-sm font-semibold">22 Rates</span>
              </div>
            </div>
            {/* Product Price */}
            <div className="pPrice flex flex-row gap-x-4">
              <div>
              <span className="text-xl font-bold font-sans text-priceColor">{prod.Price} <span className="text-base">LE</span></span>
              </div>
              <div>
              <span className="text-sm font-bold font-sans text-black opacity-30">
                <del>
                {prod.Price} LE
                </del>
              </span>
              </div>
              <div>
                <span className="text-sm font-sans font-bold bg-saleBg px-2 py-1">
                    {"30% Off"}
                </span>
              </div>
            </div>
            <hr />
            {/* Product Sized */}
            <div className="flex flex-col">
              <div className="sized">
                <span className="text-lg font-sans font-bold">Size</span>
              </div>
              <div className="sized flex flex-row gap-x-2 pt-3">
                <div>
                    <Button
                    sx={{
                      width:"40px",
                      height: "60px",
                      backgroundColor:`${this.state.bgs}`,
                      border: "1.8px solid #D9D9D9",
                      borderRadius: "100px",
                      textAlign:"center",
                      fontSize:"11px",
                      textTransform:"initial",
                      color:"#542E90",
                      padding: "0px",
                      display: "block",
                      fontWeight:"600",
                      fontFamily:"sans-serif",
                      "&:hover":{
                        backgroundColor:"#ECECEC"
                      }
                    }}
                    disableRipple={true}
                    onClick={this.onSmall}
                    >
                      Small
                    </Button>
                </div>
                <div>
                <Button
                    sx={{
                      width:"50px",
                      height: "60px",
                      backgroundColor:`${this.state.bgm}`,
                      border: "1.8px solid #D9D9D9",
                      borderRadius: "100px",
                      textAlign:"center",
                      fontSize:"11px",
                      textTransform:"initial",
                      color:"#542E90",
                      padding: "0px",
                      display: "block",
                      fontWeight:"600",
                      fontFamily:"sans-serif",
                      "&:hover":{
                        backgroundColor:"#ECECEC"
                      }
                    }}
                    disableRipple={true}
                    onClick={this.onMedium}
                    >
                      Medium
                    </Button>
                </div>
                <div>
                <Button
                    sx={{
                      width:"50px",
                      height: "60px",
                      backgroundColor:`${this.state.bgl}`,
                      border: "1.8px solid #D9D9D9",
                      borderRadius: "100px",
                      textAlign:"center",
                      fontSize:"11px",
                      textTransform:"initial",
                      color:"#542E90",
                      padding: "0px",
                      display: "block",
                      fontWeight:"600",
                      fontFamily:"sans-serif",
                      "&:hover":{
                        backgroundColor:"#ECECEC"
                      }
                    }}
                    disableRipple={true}
                    onClick={this.onLarge}
                    >
                      Large
                    </Button>
                </div>
                <div>
                <Button
                    sx={{
                      width:"50px",
                      height: "60px",
                      backgroundColor:`${this.state.bgx}`,
                      border: "1.8px solid #D9D9D9",
                      borderRadius: "100px",
                      textAlign:"center",
                      fontSize:"11px",
                      textTransform:"initial",
                      color:"#542E90",
                      padding: "0px",
                      display: "block",
                      fontWeight:"600",
                      fontFamily:"sans-serif",
                      "&:hover":{
                        backgroundColor:"#ECECEC"
                      }
                    }}
                    disableRipple={true}
                    onClick={this.onXlagre}
                    >
                      X Large
                    </Button>
                </div>
                <div>
                <Button
                    sx={{
                      width:"50px",
                      height: "60px",
                      backgroundColor:`${this.state.bgxx}`,
                      border: "1.8px solid #D9D9D9",
                      borderRadius: "100px",
                      textAlign:"center",
                      fontSize:"11px",
                      textTransform:"initial",
                      color:"#542E90",
                      padding: "0px",
                      display: "block",
                      fontWeight:"600",
                      fontFamily:"sans-serif",
                      "&:hover":{
                        backgroundColor:"#ECECEC"
                      }
                    }}
                    disableRipple={true}
                    onClick={this.onXXlarge}
                    >
                      XX Large
                    </Button>
                </div>
              </div>
            </div>
            <hr />
            {/* Product Color */}
            <div className="flex flex-col">
            <div className="colored">
                <span className="text-lg font-sans font-bold">Color</span>
              </div>
              <div className="colored flex flex-row gap-x-4 pt-2">
                <div>
                <Button
                    sx={{
                      width:"60px",
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      border: `${this.state.border ? "1.8px solid #542E90" : "1.8px solid #D9D9D9"}`,
                      borderRadius: "100px",
                      textAlign:"center",
                      fontSize:"11px",
                      textTransform:"initial",
                      color:"#542E90",
                      padding: "0px",
                      display: "block"
                    }}
                    disableRipple={true}
                    onClick={this.togBorder}
                    >
                      <img src={artboard1} className="d-block w-100" alt="SlideOne" width={"100%"} />
                    </Button>
                </div>
                <div>
                <Button
                    sx={{
                      width:"60px",
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      border: `${this.state.border ? "1.8px solid #D9D9D9" : "1.8px solid #542E90"}`,
                      borderRadius: "100px",
                      textAlign:"center",
                      fontSize:"11px",
                      textTransform:"initial",
                      color:"#542E90",
                      padding: "0px",
                      display: "block"
                    }}
                    disableRipple={true}
                    onClick={this.togBorder}
                    >
                      <img src={artboard2} className="d-block w-100" alt="SlideOne" width={"100%"} />
                    </Button>
                </div>
              </div>
            </div>
            <hr />
            {/* Product Quantity */}
            <div>
              <div className="flex flex-col">
              <div className="pb-2 quant">
                <span className="text-lg font-sans font-bold">Quantity</span>
              </div>
                <div className="quant flex flex-row justify-between w-72 py-2 px-2 rounded-full bg-rBg">
                  <div className="justify-start">
                  <Fab size="small" disableRipple={false} sx={{background:"#FFF200", "&:hover": {background:"#FFF200"}}} color="secondary" aria-label="add"
                  onClick={this.DecQuantity}>
                    <FaMinus className="text-black" />
                  </Fab>
                  </div>
                  <div className="justify-center pt-1">
                    <span className="text-xl font-bold font-sans">
                    {this.state.Quantity}
                    </span>
                  </div>
                  <div className="justify-end">
                  <Fab size="small" disableRipple={false} sx={{background:"#FFF200", "&:hover": {background:"#FFF200"}}} color="secondary" aria-label="add"
                  onClick={this.IncQuantity}>
                    <FaPlus className="text-black" />
                  </Fab>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="action flex flex-row gap-x-6 pt-4">
                  <div>
                    <Button
                    className="addCart" 
                    disableRipple={true}
                    sx={{
                      textTransform:"initial", 
                      fontWeight:"bold", 
                      backgroundColor:"#542E90", 
                      fontSize:"14px",
                      "&:hover":{backgroundColor:"#542E90"}, 
                      color:"#fff",
                      fontFamily:"sans-serif",
                      padding: "0.8em 4em",
                      borderRadius:"2em"}}
                      onClick={() => onAddItem(prod.id)}>
                      Add To Cart
                    </Button>
                  </div>
                  <div>
                  <Button
                  className="pickUp" 
                  disableRipple={true}
                  sx={{
                      textTransform:"initial", 
                      fontWeight:"bold", 
                      backgroundColor:"#FFF200", 
                      fontSize:"14px",
                      "&:hover":{backgroundColor:"#FFF200"}, 
                      color:"#000",
                      fontFamily:"sans-serif",
                      padding: "0.8em 4em",
                      borderRadius:"2em"}}>
                      Pickup From Store
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
            </div>
          </>
        )
        })}
          

        </div>
      {/* Product Section */}

        {/* Cart Body */}
        <Drawer
        placement={"right"}
        width={450}
        onClose={this.closeDrawer}
        open={this.state.open}
      >
        {/* Drawer Header */}
        <div className="flex justify-end">
            <div>
            <MdClose className="text-2xl cursor-pointer" onClick={this.closeDrawer}/>
            </div>
          </div>
          {/* Drawer Body */}
            <div className="flex justify-center">
            <div>
              <span className="text-xl font-bold font-sans text-priceColor">My Cart</span>
            </div>
            </div>
            {/* Cart Summary */}
            <div className="flex justify-start pt-6">
            <div>
              <span className="text-lg font-bold font-sans text-black">Cart Summary</span>
            </div>
            </div>
            {/* Product Items */}
            {Show ? (
              <div>
                {this.state.Cartitems.map((items, index) => {
            return(
            <div key={index}>
            <div className="flex justify-center pt-4">
              <div className="flex flex-row gap-x-2 p-2 border-1 border-sizeHover rounded-md">
                <div style={{width:"104px", height:"104px", borderRadius:"10px", background:`url(${Productmg})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"}}>
                </div>
                <div className="flex flex-col gap-y-2">
                  {/* Product title */}
                  <div>
                    <span className="text-sm font-bold font-sans text-black">
                      {items.Name}
                    </span>
                  </div>
                  {/* Product quantity */}
                  <div>
                    <span className="text-sm font-semibold font-sans text-black">
                    Quantity: {this.state.Quantity}
                    </span>
                  </div>
                  {/* Product Price & cancel */}
                  <div className="flex flex-row justify-between">
                    {/* Product Price */}
                    <div className="flex justify-start">
                    <span className="text-xl font-bold font-sans text-priceColor">{`${items.Price}` * this.state.Quantity} <span className="text-base">LE</span></span>
                    </div>
                    {/* Product Cancel */}
                    <div className="flex justify-end">
                    <Button
                      className="pickUp" 
                      disableRipple={true}
                      sx={{
                          textTransform:"initial", 
                          fontWeight:"600", 
                          backgroundColor:"#FFF200", 
                          fontSize:"12px",
                          "&:hover":{backgroundColor:"#FFF200"}, 
                          color:"#000",
                          fontFamily:"sans-serif",
                          padding: "0.5em 1.8em",
                          borderRadius:"2em"}}
                          onClick={() => onRemove(items.id)}>
                          Remove
                        </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Total */}
            <div className="flex justify-center pt-2">
            <div>
              <span className="text-xl font-bold font-sans text-black">Total: {TotalPrice} LE</span>
            </div>
            </div>
            {/* Drawer Footer */}
            <div className="flex justify-center pt-4">
              <div className="flex flex-row gap-x-3">
                <div>
                <Button
                      className="pickUp" 
                      disableRipple={true}
                      sx={{
                          textTransform:"initial", 
                          fontWeight:"bold", 
                          backgroundColor:"#FFF200", 
                          fontSize:"12px",
                          "&:hover":{backgroundColor:"#FFF200"}, 
                          color:"#000",
                          fontFamily:"sans-serif",
                          padding: "0.8em 2em",
                          borderRadius:"2em"}}>
                          Review Cart
                        </Button>
                </div>
                <div>
                <Button
                        className="addCart" 
                        disableRipple={true}
                        sx={{
                          textTransform:"initial", 
                          fontWeight:"bold", 
                          backgroundColor:"#542E90", 
                          fontSize:"12px",
                          "&:hover":{backgroundColor:"#542E90"}, 
                          color:"#fff",
                          fontFamily:"sans-serif",
                          padding: "0.8em 2em",
                          borderRadius:"2em"}}>
                          Complete Checkout
                        </Button>
                </div>
              </div>
            </div>
            </div>
            
            )
          })}
              </div>
            ) : (<div className="flex justify-center w-full font-bold font-sans py-7 text-base">
              {"You have no items yet.."}
            </div>)}
  
      </Drawer>
      </>
    )
  }
}

export default ProductBody;