import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './TeriyakiSlide.css'
import teriyaki_background from '../images/teriyaki_background.jpg'
import slide1 from '../images/slide1.jpg'
import teriyaki_trails_dp from '../images/teriyaki_trails_dp.jpg'

const TeriyakiFade = [
    teriyaki_background,
    slide1,

  ];
  
  const TeriyakiSlideshow = () => {
    return (
      <div className="Teriyakislide-container">
        <Fade>
          {TeriyakiFade.map((fade, index) => (
            <div key={index} className='teriyaki-wrapper'>
              <img style={{objectFit:'cover', height: '400px' ,width: '1270px'}} alt='background' src={fade} />
              <div className='teriyaki_logo'>
                <div>
                <img style={{borderRadius:'50%'}} src={teriyaki_trails_dp}  alt='teriyakiLogo' height={170} width={170}/>
                <br/>
                </div>
                <div className='teriyaki-front'>
                    <p style={{
                        fontSize:'1.9em', color:'white', padding:'0px 0px 0px 0px', margin:'0px 0px 5px 0px',
                        fontWeight:'700',textShadow:'0 0 3px grey, 0 0 5px grey'
                        }}> TERIYAKI TRAILS</p>
                        <Link className='teriyaki-link' style={{
                        color:"white", textDecoration:'none', fontSize:'1.4em', fontWeight:'400',margin:"0px 0p 0px 0px",padding:'0px 0px 0px 0px',
                        textShadow:'0 0 3px grey, 0 0 5px grey'
                        }}>Japanese Cuisine</Link>
                        <p style={{
                        color:'green', fontSize:'1.1em',fontWeight:'500', margin:"0px 0p 0px 0px"
                        }}>Open 12PM-8PM</p>
                </div>
                </div>
            </div>
          ))}
        </Fade>
      </div>
    )
  }
  export default TeriyakiSlideshow