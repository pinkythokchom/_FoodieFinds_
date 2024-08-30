import React from 'react'
import Shoyu_Chicken_Ramen from '../images/TeriyakiTrailsMenu/Shoyu_Chicken_Ramen.jpg'
import './teriyaki_prop.css'
import Chicken_Katsu_Curry from '../images/TeriyakiTrailsMenu/Chicken_Katsu_Curry.jpg'
import Shoyu_Beef_Ramen from '../images/TeriyakiTrailsMenu/Shoyu_Beef_ramen.jpg'
import Teriyaki_Chicken_Donburi from '../images/TeriyakiTrailsMenu/Teriyaki_Chicken_Donburi.jpg'
function Teriyakipopular(
    {
        ItemName,
        ItemPrice,
        img
    }
){
    return(
        <div className='popular-div'>
            <button style={{
            }}>
                <div className='eachPopular'>
                    <img style={{
                            margin:'0px 0px 0px 0px',
                            padding:'3px 3px 3px 3px',
                            borderRadius:'50%'
                    }} src={img} alt={ItemName} height={160} width={160}/>
                    <p style={{
                        margin:'0px 0px 0px 0px',
                        padding:'3px 3px 3px 3px',
                        fontWeight:'500'
                    }}>{ItemName}</p>
                    <p style={{
                        margin:'0px 0px 0px 0px',
                        padding:'3px 3px 3px 3px'
                    }}>{ItemPrice}</p>
                </div>
            </button>
        </div>
    );
}

    export default function TeriyakiPopular(){
        return(
            <div className='popular' style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly' }}>
                <Teriyakipopular 
                    img={Shoyu_Chicken_Ramen}
                    ItemName='Shoyu Chicken Ramen'
                    ItemPrice='₹329'
                />

                <Teriyakipopular 
                    img={Chicken_Katsu_Curry}
                    ItemName='Chicken Katsu Curry'
                    ItemPrice='₹299'
                />
                
                <Teriyakipopular 
                    img={Shoyu_Beef_Ramen}
                    ItemName='Shoyu Beef Ramen'
                    ItemPrice='₹399'
                />
                <Teriyakipopular 
                    img={Teriyaki_Chicken_Donburi}
                    ItemName='Teriyaki Chicken Donburi'
                    ItemPrice='₹349'
                />
            </div>
        );
    }