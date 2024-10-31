import React, {useState, useEffect, useRef} from 'react';
import './Schedule.css';
import { Button } from './globals/Button';
import { FaFile } from "react-icons/fa";
import html2canvas from 'html2canvas';

function Schedule() {
    const [buttonSize, setButtonSize] = useState('btn--large');
    const tableRef = useRef(null);

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


    const downloadTableAsPNG = () => {
      html2canvas(tableRef.current, {
          backgroundColor: '#ffffff'
      }).then(canvas => {
          const spacing = 20;
          const newCanvas = document.createElement('canvas');
          const ctx = newCanvas.getContext('2d');

          newCanvas.width = canvas.width + spacing * 2;
          newCanvas.height = canvas.height;
  
          ctx.fillStyle = 'transparent';
          ctx.fillRect(0, 0, newCanvas.width, newCanvas.height);
 
          ctx.drawImage(canvas, spacing, 0);
  
          const link = document.createElement('a');
          link.href = newCanvas.toDataURL('image/png');
          link.download = 'exam_schedule.png';
          link.click();
      });
    };

  return (
    <div className='table-container' id='table-sched'>
        <h1>EXAM SCHEDULE FOR: <span>BSCS - 2A</span></h1>
          <table className='content-table'  ref={tableRef}>
              <thead>
                  <tr>
                      <th>DATE</th>
                      <th>TIME</th>
                      <th>SUBJECT</th>
                      <th>ROOM</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>5/21/2024</td>
                      <td>1:00-2:30</td>
                      <td>CCNA2-SWITCHING, ROUTING AND WIRELESS ESSENTIALS</td>
                      <td>L101</td>
                  </tr>
                  <tr>
                      <td>5/21/2024</td>
                      <td>9:30-11:00</td>
                      <td>DS1-DISCRETE STRUCTURES 1</td>
                      <td>L101</td>
                  </tr>
                  <tr>
                      <td>5/21/2024</td>
                      <td>2:45-4:15</td>
                      <td>COMPROG 3 LEC-COMPUTER PROGRAMMING 3 LEC</td>
                      <td>C214</td>
                  </tr>
                  <tr>
                      <td>5/21/2024</td>
                      <td>11:15-12:45</td>
                      <td>OOP-OBJECT ORIENTED PROGRAMMING</td>
                      <td>C214</td>
                  </tr>
              </tbody>
          </table>

        <div className='icon-container'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize={buttonSize} onClick={downloadTableAsPNG}><FaFile /> PNG</Button>  
        </div>

    </div>
  );
}

export default Schedule;