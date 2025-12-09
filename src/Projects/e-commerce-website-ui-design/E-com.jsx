import { useState } from "react";

function E_com(){

    const [icons_show , setIconsShow]  = useState(null);

    return(<>
    <nav className="nav-container  bg-white border-1">
        <div className="nav-center max-w-[1250px] mx-auto p-[20px] flex justify-between items-center">
            <div className="logo ">
                <a href="#" className="font-['Pacifico'] text-[#4f46e5] font-medium text-2xl">logo</a>
            </div>
            <ul className="nav-main-list relative flex justify-between space-x-[45px]">
                <li  ><a href="#" onClick={() => setIconsShow((prev) => prev == "search-icon" ? null : "search-icon")}><i className="fa-solid fa-magnifying-glass text-[#374151]  text-lg "></i></a>
                <div className={`search ${icons_show =="search-icon" ? 'block' : 'hidden' }  absolute right-[100px] -bottom-[80px] p-[10px] bg-white rounded-[10px] shadow-xs  shadow-black/30`}>
                    <input type="text" placeholder="Search Products..." className=" border-1 py-[5px] px-[10px] rounded-[10px] focus:outline-1 focus:outline-offset-1  focus:outline-[#4f46e5]" />
                </div>
                </li>
                <li ><a href="#" onClick={() => setIconsShow( (prev) => prev == "profile-icon" ? null : "profile-icon")}><i className="fa-solid fa-user  text-[#374151] text-lg  "></i></a>
                <div className={`profile ${icons_show == "profile-icon" ? 'block' : 'hidden'} w-[200px] absolute right-[100px] -bottom-[175px] bg-white p-[10px] shadow-sm rounded-[10px]`}>
                    <p className="text-base hover:bg-gray-300/20 p-1">Sign In</p>
                    <p className="text-base hover:bg-gray-300/20 p-1">Register</p>
                    <p className="text-base hover:bg-gray-300/20 p-1">My Account</p>
                    <p className="text-base hover:bg-gray-300/20 p-1">Orders</p>
                </div>
                </li>
                <li className="relative"><a href="#"><i className="fa-solid fa-bag-shopping text-[#374151]  text-lg"></i></a>
                    <div className="bg-[#4f46e5] text-white font-medium text-sm size-[20px]  rounded-full text-center absolute -top-[15px] -right-[15px]">3</div>
                </li>
                <li><a href="#"><i className="fa-solid fa-bars text-[#374151] text-xl "></i></a></li>
            </ul>
        </div>
    </nav>
    </>)
}

export default E_com;