import React from 'react';
import './NavBar.css';
import img from '../../image/logo.png';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
const NavBar=()=>{
    return(
        <div className='container'>
            <div className='grid-container'>
                <img src={img} className='imgStyle'/>
                <div className='addressStyle flexSyle whiteColor spaccingStyle'>
                    <div>
                        <LocationOnIcon stylee={{color:"white"}}/>
                    </div>
                    <div>
                       <div className='small'>Hello!</div> 
                        <div className='bold'>Select your address</div>
                    </div>
                </div>
                <div className='wholeSearchStyle'>
                  <input className="searchStyle" placeholder='search'/>
                  <SearchIcon style={{backgroundColor:"#f7bc67",padding:"5.5px 5px",width:"30px"}}/>
                </div>
                <div className='whiteColor spaccingStyle'>
                    <div className='small'>Hello,Signin</div>
                    <div className='bold'>Accounts&Lists</div>
                </div>
                <div className='whiteColor spaccingStyle'>
                    <div className='small'>Returns</div>
                    <div className='bold'>& Orders</div>
                </div>
                <div className='whiteColor flexStyle spaccingStyle'>
                <ShoppingCartCheckoutIcon style={{fontSize:"34px"}}/>
                <div className='bold' style={{fontSize:"16px"}}>cart</div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;