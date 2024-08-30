import React from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Reserve from "./pages/Reserve";
import Restaurant from "./pages/Restaurant";
import { Route, Routes } from 'react-router-dom';
import ButtonLogin from "./components/ButtonLogin";
import ButtonSignup from "./components/ButtonSignup";
import Footer from "./pages/Footer";
import TeriyakiTrails from "./EachRestaurant/TeriyakiTrails";
import HarvestCafe from './EachRestaurant/HarvestCafe';
import TeriyakiMenu from "./Menu/TeriyakiMenu";
 
const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/reserve" element={<Reserve/>} />
            <Route path="/restaurant" element={<Restaurant/>} />
            <Route path="/ButtonLogin" element={<ButtonLogin/>} />
            <Route path="/ButtonSignup" element={<ButtonSignup/>} />
            <Route path="/teriyaki_trails" element={<TeriyakiTrails/>}/>
            <Route path="/harvestcafe" element={<HarvestCafe/>}/>
            <Route path="/harvestcafe" element={<HarvestCafe/>}/>
            <Route path="/teriyakimenu" element={<TeriyakiMenu/>}/>
            

            </Routes>

            <Footer/>
        </div>
        
    );
};
 
export default App;