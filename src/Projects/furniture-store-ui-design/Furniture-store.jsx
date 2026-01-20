import { useState } from "react";

function Furniture_store(){

    const[showHover , setshowHover] = useState(null);

    return (<>

    {/* Navbar start */}
    <nav className="Navbar-container relative border-1" >
        <div className="navbar-center max-w-[1550px] mx-auto p-[20px] flex justify-between items-center">
            <div className="logo-section">
                <h1 className="text-xl font-bold">FURNIX.</h1>
            </div>
            <div className="navbar-links-main">
                <ul className="navbar-links flex justify-between space-x-[20px]">
                    <li><a href="#" className="outline-none" onClick={() => setshowHover((prev) => prev != "search-icon" ? "search-icon" : null )}><i className="text-lg text-black cursor-pointer  hover:opacity-70   fa-solid fa-magnifying-glass"></i></a></li>
                    <li><a href="#" className="outline-none"><i className="text-lg text-black cursor-pointer  hover:opacity-70   fa-solid fa-user"></i></a></li>
                    <li><a href="#" className="outline-none"><i className="text-lg text-black cursor-pointer  hover:opacity-70   fa-solid fa-bag-shopping"></i></a></li>
                    <li className="md:hidden" ><a href="#" className="outline-none"><i className="text-lg text-black cursor-pointer  hover:opacity-70   fa-solid fa-bars"></i></a></li>
                </ul>
            </div> 
            <div className={`search-input ${showHover == "search-icon" ? "block" : "hidden"}  absolute bottom-[-60px] right-[150px] bg-white p-2 rounded-[10px] shadow-sm shadow-black/20 transition-all duration-300 linear`}>
                <input type="text" placeholder="Search for Items..." className="w-[200px] p-2 border-1 rounded-[10px] outline-none" />
            </div>
        </div>


    </nav>
    {/* Navbar end */}
    </>)

}

export default Furniture_store;