import React, {useState, useEffect} from 'react'
import { Button } from './Button';
import { FaCaretDown  } from "react-icons/fa";
import './FindSchedule.css';

function FindSchedule () {
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

    return(
        <div className='sched-container' id='find-sched'>
            <div className='sched-text'>
                <h1>
                    How to find your schedule?
                </h1>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className='sched-finder'>

                <div class="select-container">
                    <select name="section" id="section-select" className='select-box'>
                        <option value="">--Find Your Section--</option>
                        <option value="BSCS-1A">BSCS-1A</option>
                        <option value="BSCS-1B">BSCS-1B</option>
                        <option value="BSCS-1C">BSCS-1C</option>
                        <option value="BSCS-2A">BSCS-2A</option>
                        <option value="BSCS-2B">BSCS-2B</option>
                        <option value="BSCS-2C">BSCS-2C</option>
                    </select>
                </div>

                <Button className='btns' buttonStyle='btn--primary' buttonSize={buttonSize}>SHOW</Button>

            </div>
        </div>
    )
};

export default FindSchedule;