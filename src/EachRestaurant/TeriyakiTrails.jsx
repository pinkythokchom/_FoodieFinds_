import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TeriyakiTrails.css'
import TeriyakiGrid from '../extra/Teriyaki_Grid'
import TeriyakiSlideshow from '../extra/TeriyakiSlide'
import TeriyakiPopular from '../extra/teriyaki_prop'

const Teriyaki_Trails = () => {
const navigate = useNavigate();
function GotoTeriyakiMenu(){
  navigate("/teriyakimenu");
}


  return (
    <div className='Teriyaki-container'>
        <div className='teriyaki-slide'>
            <TeriyakiSlideshow/>
        </div>
        <div className='reviews-buttons'>
          <button>Write Review</button>
          <button>Add Photo</button>
          <button>See Reviews</button>
        </div>
        <div className='popular-container'>
            <p style={{
              fontSize:'1.6em', fontWeight:'600'
            }}>Popular Dishes</p>
            <div>
              < TeriyakiPopular/>
            </div>
            <button onClick={GotoTeriyakiMenu} className='menu_btn'>Full Menu...</button>
        </div>
          <br/>
        <div className='Gallery'>
            <p style={{
              fontSize:'1.6em', fontWeight:'600'
            }} >what's the vibe</p>
            <div>
              <TeriyakiGrid/>
            </div>
            <button className='buttongrid'>Show more</button>
        </div>
        <br/>
        <p style={
          { 
            fontSize:'1.6em', fontWeight:'600',marginLeft:'90px'

          }
        }>Location & Hours</p>
        <div className='Locations-hours'>
            <div className='location'>
              <p style={{
                fontSize:'1.3em',
                fontWeight:'500',
                margin:'0px 0px 10px 0px',
                color:'grey'
              }}>Located in:</p>
              <p>Kwakeithel Thokchom Leikai,
                <br/>
                Imphal,
                <br/>
                Manipur 795004</p>
            </div>
            <div className='Hours'> 
              <p>All Days</p>
              <table style={{
                color:'green'
              }}>
                  <tr>
                    <td>Mon </td>
                    <br/>
                    <td>12:00 PM -8:00 PM </td>
                  </tr>
                  <tr>
                    <td>Tue </td>
                    <br/>
                    <td>12:00 PM - 8:00 PM </td>
                  </tr>
                  <tr>
                    <td>Wed </td>
                    <br/>
                    <td>12:00 PM - 8:00 PM </td>
                  </tr>
                  <tr>
                    <td>Thurs</td>
                    <br/>
                    <td>12:00 PM - 8:00 PM </td>
                  </tr>
                  <tr>
                    <td>Fri </td>
                    <br/>
                    <td>12:00 PM -8:00 PM </td>
                  </tr>
                  <tr>
                    <td>Sat </td>
                    <br/>
                    <td>12:00 PM - 8:00 PM</td>
                  </tr>
                  <tr>
                    <td>Sun </td>
                    <br/>
                    <td>12:00 PM - 8:00 PM</td>
                  </tr>
              </table>
            </div>
        </div>
    </div>
  )
}

export default Teriyaki_Trails