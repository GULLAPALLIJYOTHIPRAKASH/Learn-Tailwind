import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Collections from "./components/Collections";
import BedMaterial from "./components/BedMaterial";
import New_Arrivals from "./components/New_Arrivals";
import About_US from "./components/About_US";


function Furniture_store(){

    // #ffaf4d --- primary color

    return (<>
    <Navbar/>
    <Banner/>
    <Collections/>
    <BedMaterial/>
    <New_Arrivals/>
    <About_US/>
    
    

    </>)

}

export default Furniture_store;