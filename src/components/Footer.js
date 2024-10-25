import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container' id='footer'>
        <div className='pd-logo-container'>
            <p className='develop-text'>Developed by:</p>
            <img src='images/PD_Logo.png' className='pd-logo'/>
            <img src='images/pd_banner.png' className='pd-banner' />
        </div>

        <div className='footer-text'>
            <p>
                College of Computer Studies <span className='copyright'>&copy; 2024. All rights reserved.</span>
            </p>
        </div>
    </div>
  )
}

export default Footer;