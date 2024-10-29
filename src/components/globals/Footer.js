import React from 'react'
import './Footer.css';
import PDLogo from '../../assets/PD_Logo.png'
import Banner from '../../assets/pd_banner.png'
function Footer() {
  return (
    <div className='footer-container' id='footer'>
        <div className='pd-logo-container'>
            <p className='develop-text'>Developed by:</p>
            <img src={PDLogo} className='pd-logo' alt='PD Logo'/>
            <img src={Banner} className='pd-banner' alt='PD Banner' />
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