import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
//import teriyakislide1 from '../images/teriyakislide1.jpg'

const images = [
  '../images/teriyakislide1.jpg'

];

const TeriyakiSlideshow = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src='each' alt='teriyaki' />)
          }
        </Zoom>
      </div>
    )
}
export default TeriyakiSlideshow