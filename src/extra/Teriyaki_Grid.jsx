"use client";
import { ImageGallery } from "react-image-grid-gallery";
import Gallery1 from '../images/TeriyakiTrailsMenu/Gallery1.jpg'
import Gallery2 from '../images/TeriyakiTrailsMenu/Gallery2.jpg'
import Gallery3 from '../images/TeriyakiTrailsMenu/Gallery3.jpg'
import Gallery4 from '../images/TeriyakiTrailsMenu/Gallery4.jpg'
import Gallery16 from '../images/TeriyakiTrailsMenu/Gallery16.jpg'
import Gallery17 from '../images/TeriyakiTrailsMenu/Gallery17.jpg'
import Gallery7 from '../images/TeriyakiTrailsMenu/Gallery7.jpg'
import Gallery9 from '../images/TeriyakiTrailsMenu/Gallery9.jpg'
import Gallery10 from '../images/TeriyakiTrailsMenu/Gallery10.jpg'
import Gallery11 from '../images/TeriyakiTrailsMenu/Gallery11.jpg'
import Gallery12 from '../images/TeriyakiTrailsMenu/Gallery12.jpg'
import Gallery8 from '../images/TeriyakiTrailsMenu/Gallery8.jpg'




const imagesArray = [
  {
    alt: "Image1's alt text",
    src: Gallery1,
  },
  {
    alt: "Image2's alt text",
    src: Gallery2,
  },
  {
    alt: "Image3's alt text",
    src: Gallery3,
  },
  {
    alt: "Image3's alt text",
    src: Gallery4,
  },
  {
    alt: "Image3's alt text",
    src: Gallery16,
  },
  {
    alt: "Image3's alt text",
    src: Gallery17,
  },
  {
    alt: "Image3's alt text",
    src: Gallery7,
  },
  {
    alt: "Image3's alt text",
    src: Gallery8,
  },
  {
    alt: "Image3's alt text",
    src: Gallery12,
  },
  {
    alt: "Image3's alt text",
    src: Gallery9,
  },
  {
    alt: "Image3's alt text",
    src: Gallery10,
  },
  {
    alt: "Image3's alt text",
    src: Gallery11,
  },

];

export default function TeriyakiGrid() {
  return (
    <ImageGallery
      imagesInfoArray={imagesArray}
      columnCount={'auto'}
      columnWidth={190}
      gapSize={5}
    />
  );
}