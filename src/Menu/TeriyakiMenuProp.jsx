import React from 'react'
import './TeriyakiMenuProp.css'
import Shoyu_Chicken_Ramen from '../images/TeriyakiTrailsMenu/Shoyu_Chicken_Ramen.jpg'
import Miso_chicken_Ramen from '../images/TeriyakiTrailsMenu/Miso_chicken_Ramen.jpg'
import Shoyu_Beef_Ramen from '../images/TeriyakiTrailsMenu/Shoyu_Beef_ramen.jpg'
import Tokotsu_Pork_Ramen from '../images/TeriyakiTrailsMenu/Tokotsu_Pork_Ramen.jpg'
import Crispy_chicken_sushi from '../images/TeriyakiTrailsMenu/Crispy_chicken_sushi.jpg'
import Egg_roll_sushi from '../images/TeriyakiTrailsMenu/Egg_roll_sushi.jpg'
import Tuna_sushi from '../images/TeriyakiTrailsMenu/Tuna_sushi.jpg'
import Shrimp_Tempura from '../images/TeriyakiTrailsMenu/Shrimp_Tempura.jpg'
import Tofu_sushi from '../images/TeriyakiTrailsMenu/Tofu_sushi.jpg'
import Teriyaki_Chicken_Donburi from '../images/TeriyakiTrailsMenu/Teriyaki_Chicken_Donburi.jpg'
import Teriyaki_Beef_Donburi from '../images/TeriyakiTrailsMenu/Teriyaki_Beef_Donburi.jpg'
import Chicken_Katsu_Curry from '../images/TeriyakiTrailsMenu/Chicken_Katsu_Curry.jpg'
import Katsu_Tofu_Curry from '../images/TeriyakiTrailsMenu/Katsu_Tofu_Curry.jpg'
import Gyodon_Beef from '../images/TeriyakiTrailsMenu/Gyodon_Beef.jpg'
import Chicken_Onigiri from '../images/TeriyakiTrailsMenu/Chicken_Onigiri.jpg'
import Negima from '../images/TeriyakiTrailsMenu/Negima.jpg'
import Torikawa from '../images/TeriyakiTrailsMenu/Torikawa.jpg'
import Chicken_assorted from '../images/TeriyakiTrailsMenu/Chicken_assorted.jpg'


function TeriyakiEachProp(
    {
        ItemName,
        ItemPrice,
        img
    }
){
    return(
        <div className='Menu-div'>
            <button style={{
            }}>
                <div className='eachMenuItem'>
                    <p style={{
                        margin:'0px 0px 0px 0px',
                        padding:'3px 3px 3px 3px',
                    }}>{ItemPrice}</p>
                    <p style={{
                        margin:'0px 0px 0px 0px',
                        padding:'3px 3px 3px 3px',
                        fontWeight:'500'
                    }}>{ItemName}</p>
                     <img style={{
                            margin:'0px 0px 0px 0px',
                            padding:'3px 3px 3px 3px',
                            borderRadius:'50%',
                            objectFit:'cover'
                    }} src={img} alt={ItemName} height={160} width={160}/>
                    <br/>
                    <button>Order Now</button>
                </div>
            </button>
        </div>
    );
}

    export default function TeriyakiMenuProp(){
        return(
            <>
            <p style={{
                fontSize:'1.6em',
                fontWeight:'500',
                backgroundColor:'lightgray',
                padding:'10px 10px 10px 10px',
    
            }}>Ramen</p>
            <div className='menuitem' style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly' }}>

                <TeriyakiEachProp 
                    img={Shoyu_Chicken_Ramen}
                    ItemName='Shoyu Chicken Ramen'
                    ItemPrice='₹329'
                />

                <TeriyakiEachProp
                    img={Shoyu_Beef_Ramen}
                    ItemName='Shoyu Beef Ramen'
                    ItemPrice='₹399'
                />
                <TeriyakiEachProp
                    img={Tokotsu_Pork_Ramen}
                    ItemName='Tokotsu Pork Ramen'
                    ItemPrice='₹389'
                />
                <TeriyakiEachProp
                    img={Miso_chicken_Ramen}
                    ItemName='Miso Chicken Ramen'
                    ItemPrice='₹369'
                />
            </div>
            <br/>
            <p style={{
                fontSize:'1.6em',
                fontWeight:'500',
                backgroundColor:'lightgray',
                padding:'10px 10px 10px 10px',
            }}>Uramaki Sushi</p>
            <div className='menuitem' style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly' }}>

                <TeriyakiEachProp 
                    img={Crispy_chicken_sushi}
                    ItemName='Crispy Chicken'
                    ItemPrice='₹279'
                />

                <TeriyakiEachProp
                    img={Tuna_sushi}
                    ItemName='Tuna'
                    ItemPrice='₹279'
                />
                <TeriyakiEachProp
                    img={Shrimp_Tempura}
                    ItemName='Tempura Shrimp'
                    ItemPrice='₹299'
                />
                <TeriyakiEachProp
                    img={Tofu_sushi}
                    ItemName='Crispy Tofu'
                    ItemPrice='₹239'
                />
            </div>
            <div style={{
                marginLeft:'72px', marginTop:'30px'
            }}>
                <TeriyakiEachProp 
                    img={Egg_roll_sushi}
                    ItemName='Egg Roll'
                    ItemPrice='₹219'
                />
            </div>
            <br/>
            

            <p style={{
                fontSize:'1.6em',
                fontWeight:'500',
                backgroundColor:'lightgray',
                padding:'10px 10px 10px 10px',
    
            }}>Rice Meals</p>
            <div className='menuitem' style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly' }}>

                <TeriyakiEachProp 
                    img={Teriyaki_Chicken_Donburi}
                    ItemName='Teriyaki Chicken Donburi'
                    ItemPrice='₹349'
                />

                <TeriyakiEachProp
                    img={Teriyaki_Beef_Donburi}
                    ItemName='Teriyaki Beef Donburi'
                    ItemPrice='₹379'
                />
                <TeriyakiEachProp
                    img={Chicken_Katsu_Curry}
                    ItemName='Katsu Chicken Curry'
                    ItemPrice='₹349'
                />
                <TeriyakiEachProp
                    img={Katsu_Tofu_Curry}
                    ItemName='Katsu Tofu Curry'
                    ItemPrice='₹329'
                />
            </div>
            <div style={{
                marginLeft:'72px', marginTop:'30px'
            }}>
                <TeriyakiEachProp 
                    img={Gyodon_Beef}
                    ItemName='Gyodon(Beef)'
                    ItemPrice='₹219'
                />
            </div>
            <br/>
            <p style={{
                fontSize:'1.6em',
                fontWeight:'500',
                backgroundColor:'lightgray',
                padding:'10px 10px 10px 10px',
    
            }}>Onigiri</p>
            <div className='menuitem' style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly' }}>

                <TeriyakiEachProp 
                    img={Chicken_Onigiri}
                    ItemName='Chicken Onigiri'
                    ItemPrice='₹229'
                />

                <TeriyakiEachProp
                    img={Chicken_Onigiri}
                    ItemName='Tuna Onigiri'
                    ItemPrice='₹229'
                />
                <TeriyakiEachProp
                    img={Chicken_Onigiri}
                    ItemName='Shrimp Onigiri'
                    ItemPrice='₹399'
                />
            </div>
            <br/>
            <p style={{
                fontSize:'1.6em',
                fontWeight:'500',
                backgroundColor:'lightgray',
                padding:'10px 10px 10px 10px',
    
            }}>Yakitori</p>
            <div className='menuitem' style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly' }}>

                <TeriyakiEachProp 
                    img={Negima }
                    ItemName='Negima(Chicken Thighs)'
                    ItemPrice='₹239'
                />

                <TeriyakiEachProp
                    img={Torikawa}
                    ItemName='Torikawa(Chicken Skin)'
                    ItemPrice='₹119'
                />
                <TeriyakiEachProp
                    img={Chicken_assorted}
                    ItemName='Chicken assorted'
                    ItemPrice='₹249'
                />
            </div>
            </>
        );
    }