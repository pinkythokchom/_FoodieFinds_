import React from 'react'
import './Restaurant.css'
import { useNavigate } from 'react-router-dom'
import teriyaki_dp from '../images/teriyaki_trails_dp.jpg'
import harvest_dp from '../images/harvest_dp.jpg'
import seoul_dp from '../images/seoul_dp.jpg'
import timber_dp from '../images/timber_dp.jpg'
import farm_cafe_dp from '../images/farm_cafe_dp.jpg'
import reikos_cafe_dp from '../images/reikos_cafe_dp.jpg'
import ciao_bella_cafe_dp from '../images/ciao_bella_cafe_dp.jpg'
import langol_vista_cafe_dp from '../images/langol_vista_cafe_dp.jpg'
//import Pagination from '@mui/material/Pagination';
//import Stack from '@mui/material/Stack';  


function Restaurants(
  {
    Restaurantname,
    num,
    url,
    Rating,
    OpeningClosing,
    Address,
    detail,
    DeliveryTakeout,
    Goto
  }
) {

  return (
    <div>
    <section>
      <button onClick={Goto} className='r-button'>
      <div  className="each-restaurant">
        <div className='image-res'>
            <img style={{
              objectFit:'cover',
              borderRadius:'50%'
            }} alt={Restaurantname} src={url} height={180} width={180}/>
        </div>
        <div className='detail'>
          <p style={{fontSize:'1.6em', fontWeight:'500', margin:'0px 0px 9px 0px'}}>{num}. {Restaurantname}</p>
          <p>{detail}</p>
          <p>{Rating}</p>
          <p style={{color:'dodgerblue'}}>{OpeningClosing}</p>
          <p>{Address}</p>
          <p style={{
            color:'green'
          }}>{DeliveryTakeout}</p>
        </div>
      </div>
      </button>
    </section>
    </div>
  );
}

export default function Restaurant() {
const navigate =useNavigate();
function GotoTeriyakiTrails(){
  navigate("/teriyaki_trails");
}

function GotoHarvest(){
  navigate("/harvestcafe");
}
  return (
   <div className='container'>
      <p style={{fontSize:'1.5em', fontWeight:'500'}}>Restaurants/Cafes</p>
      <Restaurants
      Goto={GotoTeriyakiTrails}
      Restaurantname ='Teriyaki Trails'
      detail='Japanese Cuisine'
      num='1'
      url={teriyaki_dp}
      Rating='4.3(1.2k reviews)'
      OpeningClosing='Open-(12pm - 8pm)|All days'
      Address=' Kwakeithel Thokchom Leikai,  Imphal,Manipur 795004'
      DeliveryTakeout='Delivery|Takeout|DineIn'
      />
    <br/>
    <Restaurants
    Goto={GotoHarvest}
      Restaurantname='Harvest Cafe'
      detail='Fusion Food| Wines|Drinks|Breakfast and Brunch'
      num='2'
      url={harvest_dp}
      Rating='4.1(1k reviews)'
      OpeningClosing='Open-7am-10:30am(Breakfast)|1pm - 8pm(Lunch)|Tuesday-Sunday'
      Address=' Ghari Mamang Leikai, Imphal West Manipur 795004'
      DeliveryTakeout='Takeout|DineIn'
      />
    <br/>
    <Restaurants
      Restaurantname='Seoul House'
      detail='Authentic Korean|Chinese Cuisine'
      num='3'
      url={seoul_dp}
      Rating='4.3(1.5k reviews)'
      OpeningClosing='Open-(12:30pm - 6pm)|Tuesday-Sunday'
      Address='Nambol Maibam, near IPM, Nambol, Manipur 795134'
      DeliveryTakeout='DineIn'
      />
      <br/>
      <Restaurants
      Restaurantname='Timber Cafe Imphal'
      detail='An upscale Asian|Continental Food'
      num='4'
      url={timber_dp}
      Rating='4(900 reviews)'
      OpeningClosing='Open-(12pm - 8pm)|All days'
      Address='MBC Shopping Complex, Impahal Manipur'
      DeliveryTakeout='Takeout|DineIn'
      />
      <br/>
      <Restaurants
      Restaurantname='The Farm Cafe'
      detail='Fusion Food|Desserts|Cakes|Bakes'
      num='5'
      url={farm_cafe_dp}
      Rating='3.9(800 reviews)'
      OpeningClosing='Open-(11am - 7pm)|Tuesday-Sunday'
      Address='Mantripukhri, Imphal 795002'
      DeliveryTakeout='Delivery|Takeout|DineIn'
      />
      <br/>
      <Restaurants
      Restaurantname='Reikos Cafe'
      detail='Coffee|Foods|Drinks'
      num='6'
      url={reikos_cafe_dp}
      Rating='4.0(1k reviews)'
      OpeningClosing='Open-(12pm - 7pm)|Monday-Saturday'
      Address='Koirengei Luwangshangbam Near BSF Camp, Imphal Manipur'
      DeliveryTakeout='Takeout|DineIn'
      />
      <br/>
      <Restaurants
      Restaurantname='Ciao Bella Cafe'
      detail='Fusion Foods'
      num='7'
      url={ciao_bella_cafe_dp}
      Rating='3.8(800 reviews)'
      OpeningClosing='Open-(12pm - 8pm)|All days'
      Address='Canchipur MU Road, Impahl Manipur'
      DeliveryTakeout='Delivery|Takeout|DineIn'
      />
      <br/>
      <Restaurants
      Restaurantname='Langol Vista Cafe'
      num='8'
      url={langol_vista_cafe_dp}
      Rating='4.1(1.1k reviews)'
      OpeningClosing='Open-(1pm - 8pm)|Tuesday-Sunday'
      Address=' Ghari Mamang Leikai, Imphal West Manipur 795004'
      DeliveryTakeout='Takeout|DineIn'
      />
      <br/>
   </div>
  );
}
