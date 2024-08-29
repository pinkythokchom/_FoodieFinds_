import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideImages.css'



const fadeImages = [
  {
    img : 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //caption1: 'Feed Your Happy!'
  },
  {
    img:'https://images.unsplash.com/photo-1450152021501-598b36b17449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption2: 'Life is short, make it sweet.'
  },
  {
    img: 'https://images.unsplash.com/photo-1648096627542-be875f5be534?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption3: 'Calories don’t count during the weekends.'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className='image-wrapper'>
            <img style={{objectFit:'cover', height: '680px' ,width: '1270px'}} alt='background' src={fadeImage.img} />
            <div className='caption1'>{fadeImage.caption1}</div>
            <div className='caption2'>{fadeImage.caption2}</div>
            <div className='caption3'>{fadeImage.caption3}</div>
          </div>
        ))}
      </Fade>
    </div>
  )
}
export default Slideshow