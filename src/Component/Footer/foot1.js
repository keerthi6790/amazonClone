import React from 'react';
import logo from './am.png';
import logo2 from './glob.png';
import logo1 from './us.png';
import './foot.css';

function Foot() {
    return (
        <div>
            <button className='button'>Back to top</button>
            <div className='bot'>
                <div className='heading'>Get to Know Us</div>
                <div className='nav1'>
                <ul>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Amazon</li>
                    <li>Investor Relations</li>
                    <li>Amazon Devices</li>
                </ul>
                </div>
                <div className='heading1'>Make Money With Us</div>
                <div className='nav2'>
                <ul>
                    <li>Sell products on Amazon</li>
                    <li>Sell on Amazon Business</li>
                    <li>Sell apps on Amazon</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise Your products</li>
                    <li>Self-Publish with Us</li>
                    <li>Host an Amazon Hub</li>
                    <li>See More Make Money with Us</li>
                </ul>
                </div>
                <div className='heading2'>Amazon Payment Products</div>
                <div className='nav3'>
                <ul>
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon Currency Converter</li>
                </ul>
                </div>
                <div className='heading3'>Let Us Help You</div>
                <div className='nav4'>
                <ul>
                    <li>Amazon and COVID-19</li>
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Shipping Rates & Policies</li>
                    <li>Returns & Replacements</li>
                    <li>Manage Your Content and Devices</li>
                    <li>Amazon Assistant</li>
                    <li>Help</li>
                </ul>
                </div>
            </div>
            <div className='sep'></div>
            <div className='bot1'>
            <img src={logo} height={23} width={76} id='cent'/>
            <div id='cent1'></div>
            <div id='cent2'></div>
            <div id='cent3'></div>
            <p id='cent1text'>English</p>
            <img src={logo2} height={20} width={20} id='cent1textglob'/>
            <p id='cent2text'>$ USD - U.S. Dollar</p>
            <p id='cent3text'>United States</p>
            <img src={logo1} height={10} width={20} id='cent3textflag'/>
            </div>
        </div>
    )
}

export default Foot;