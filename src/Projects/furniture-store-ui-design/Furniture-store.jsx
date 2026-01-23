import { useState } from "react";
import Navbar from "./components/Navbar";
import bed from "./assets/bed.png"
import Banner from "./components/Banner";

function Furniture_store(){

    // #ffaf4d --- primary color

    return (<>
    <Navbar/>
    <Banner/>
    {/* collections start */}
    <div className="collections-container">
        <div className="collections-center max-w-[1550px] mx-auto px-[20px] py-16">
            <div className="heading">
                <h1 className="text-black text-xl font-medium tracking-[2px] mb-5">LOVE WHERE YOU LIVE</h1>
                <button>VIEW ALL COLLECTION</button>
            </div>
        </div>
    </div>
    {/* collections end */}
    

    </>)

}

export default Furniture_store;