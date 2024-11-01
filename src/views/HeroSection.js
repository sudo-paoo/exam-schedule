import React, {useState, useEffect} from 'react'
import { Button } from '../components/globals/Button';
import './HeroSection.css';
import RHawk from '../assets/Hawks.png'
function HeroSection() {
    const [buttonSize, setButtonSize] = useState('btn--large');

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setButtonSize('btn--small');
        } else {
          setButtonSize('btn--large');
        }
      };
      handleResize();
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize);
    }, []);


  return (
    <div className='hero-container' id='home'>

        <div class="hero-text">
            <h2>
                Find your exam<br />Schedules mga <br /> <span>KA-CCS!</span>
            </h2>
            <p>Live at Tarlac State University</p>
            
            <Button className='btns' buttonStyle='btn--primary' buttonSize={buttonSize}>
                Find my schedule
            </Button>
        </div>

        <div className='hero-img'>
            <img src={RHawk} alt='CCS Red Hawk'/>
        </div>
    </div>
  )
}

export default HeroSection;