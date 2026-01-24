import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Collections from "./components/Collections";
import BedMaterial from "./components/BedMaterial";

function Furniture_store(){

    // #ffaf4d --- primary color

    return (<>
    <Navbar/>
    <Banner/>
    <Collections/>
    <BedMaterial/>
    

    </>)

}

export default Furniture_store;