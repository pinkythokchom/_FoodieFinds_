import React from 'react'
import Slideshow from "../extra/SlideImages";
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {

  const navigate = useNavigate();
  function GotoRestaurant(){
      navigate("/restaurant");
  }

  return (
    <div>
      < Slideshow/>
      <div className='para'>
      <p className='qoute'>Welcome, foodie. You are entering your comfort zone!</p>
      <div className='img-restaurant'>
        <div className='image-div'>
          <img style={{objectFit:'cover'}}
          src='https://images.unsplash.com/photo-1604321114353-45f97ea18d31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='juice' height={400} width={640}
          />
        </div>
        <div className='restaurant-link'>
          <p style={{
            marginTop:'120px', fontSize:'1.1em', fontWeight:'400'
          }}>Great menu leads to great vibes.
            <br/>
            We’re here to assist you in finding your favorite restaurant.
          </p>
          <button className='button-res' onClick={GotoRestaurant}>View Restaurants</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home