import React from 'react'
import './TeriyakiMenu.css'
import TeriyakiMenuProp from './TeriyakiMenuProp'

const TeriyakiMenu = () => {
  return (
    <div style={{
        marginTop:'71px'
    }}>
    <div className='Menu-container'>
        <p style={{
            fontSize:'1.9em', fontWeight:'600'
        }}>Full Menu</p>
        <div className='eachMenu'>
            <TeriyakiMenuProp/>
        </div>
        <br/>
    </div>
    </div>
  )
}

export default TeriyakiMenu