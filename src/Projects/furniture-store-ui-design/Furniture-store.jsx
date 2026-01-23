import { useState } from "react";
import Navbar from "./components/Navbar";
import bed from "./assets/bed.png"
import Banner from "./components/Banner";

function Furniture_store(){


    return (<>
    <Navbar/>
    <Banner/>
    {/* collections start */}
    <div className="collections-container">
        <div className="collections-center max-w-[1550px] mx-auto p-[20px]">
            <div className="heading">
                <h1>LOVE WHERE YOU LIVE</h1>
                <button>VIEW ALL COLLECTION</button>
            </div>
        </div>
    </div>
    {/* collections end */}

    </>)

}

export default Furniture_store;