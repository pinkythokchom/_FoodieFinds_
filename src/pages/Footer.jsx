import React from 'react'
import { Link} from 'react-router-dom'
import './Footer.css'
import instaIcon from '../images/instaIcon.png'
import FBicon from '../images/FBicon.png'
import xicon from '../images/xicon.png'

const Footer = () => {

  return (
    <div style={{margin:'0px 0px 0px 0px'}}>
        <div className='footer'>
            <div className='footer-section'>
                <div className="about-us">
                    <p style={{paddingLeft:'8px',fontSize:'1.8em'}}>About Us</p>
                    <ul style={{listStyle: 'none'}}>
                        <li>
                            <Link>About FoodieFinds</Link>
                        </li>
                        <li>
                            <Link>Privacy policy</Link>
                        </li>
                        <li>
                            <Link>Careers</Link>
                        </li>
                    </ul>
                </div>
                <div className="services">
                    <p style={{paddingLeft:'8px' , fontSize:'1.8em'}}>Services</p>
                    <ul>
                        <li>
                            <Link>Catering</Link>
                        </li>
                        <li>
                            <Link>Menu Development</Link>
                        </li>
                        <li>
                            <Link>Ordering Facility</Link>
                        </li>
                    </ul>
                </div>
                <div className="contact">
                    <p style={{paddingLeft:'8px', fontSize:'1.8em'}}>Contact</p>
                    <ul>
                        <li>Phone:(+91)8787584755</li>
                        <li>Email:pnkthokchom@gmail.com</li>
                    </ul>

                    <ul style={{listStyle: 'none', display:'flex'}}>
                        <li>
                            <Link>
                            <img style={{background:'transparent'}} src={instaIcon} 
                            alt='instagram' height={20} width={20}/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <img src={FBicon} 
                            alt='facebook' height={20} width={20}/>
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <img src={xicon} 
                            alt='X' height={20} width={20}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='copyright' style={{textAlign: 'center', padding: "20px", backgroundColor: 'black', color: 'whitesmoke'} }>©2024 This project is created as a project by Pinky Thokchom</div>
        </div>
    </div>
  )
}

export default Footer