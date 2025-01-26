import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>At FoodFlow.com,Our mission is to 
                         provide a seamless and satisfying
                          food delivery experience, offering 
                          a wide variety of cuisines to cater 
                          to every taste.</p>
                    <div className="footer-social-icons">
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2> Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Contact us</h2>
                    <ul>
                        <li>+91 9370949586</li>
                        <li>foodflow@support.com</li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <p className="footer-copyright">
                Copyright 2025 &#169; FoodFlow.com  All rights reserved.
            </p>
        </div>
    )
}


export default Footer;