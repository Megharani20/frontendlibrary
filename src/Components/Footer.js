import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>City Central Library</p>
                        <p>Indira Nagar,Bengaluru-560008</p>
                        <p>Karnataka</p>
                        <p>India</p>
                        <p><b>Email:</b>citycenterallibrary@gmail.com</p>
                    </div>
                    {/* <div className='usefull-links'>
                        <h1>Usefull Links</h1>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                    </div> */}
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Name:</p>
                        <p>Contact: +91 0000000000</p>
                    </div>
                </div>
                <div className="contact-social" >
                    <a href='#home' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><TelegramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div>
            </div>
            <footer>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2024 copyright all right reserved<br /><span>Designed with ❤️ by Megharani</span></p>
            </div>
            </footer>
        </div>
    )
}

export default Footer