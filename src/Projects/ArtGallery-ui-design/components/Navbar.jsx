import { useState } from "react";
import menu_bar from "../assets/hamburger_icon.svg"
import close_icon from "../assets/close.svg"
function Navbar(){

    const [show_sidebar , setshow_sidebar] = useState(false);

    return(<>
    <nav className="navbar-container bg-[#FFF8F0]/80 sticky top-0 left-0  backdrop-blur-md">
        <div className="navbar-center  max-w-[1550px] mx-auto min-h-[70px] py-[20px] px-[20px] flex justify-between items-center">
            <div className="logo-section">
                <h1 className="font-bold font-serif text-xl md:text-2xl">Arto<span className="text-[#FF6B6B]">Gallery</span></h1>
            </div>
            <div className="hambegur-section sm:hidden" onClick={() => setshow_sidebar(!show_sidebar)}>
                <img  src={menu_bar} alt="hamburger icon" />
            </div>
            {/* mobile sidebar */}
            {
            show_sidebar && 
            <div className={show_sidebar == true ?
            `nav-list-main fixed w-[100%] sm:hidden  h-[100vh] inset-0 overflow-hidden bg-black/60   z-10  p-[20px] transition-all linear duration-100 opacity-100 ` 
            :
            `nav-list-main fixed w-[100%]  h-[100vh]  bg-black/60 inset-0 overflow-hidden  z-10  p-[20px] transition-all linear duration-100 `
            }>
                
                <div className="w-[60%] h-[100vh]    absolute  top-0 right-0  bg-[#FFF8F0]  p-[20px]"  >

                <div className="close-btn flex flex-col items-end " onClick={() => setshow_sidebar(false)}>
                    <img   src={close_icon} alt="close icon" />
                </div>
                <ul className="nav-list mt-10 ">
                    <li className="mb-5 text-base font-medium hover:text-[#FF6B6B]"><a href="#" className="nav-link" onClick={() => {setshow_sidebar(false)}}>Gallery</a></li>
                    <li className="mb-5 text-base font-medium hover:text-[#FF6B6B]"><a href="#" className="nav-link" onClick={() => {setshow_sidebar(false)}}>Artists</a></li>
                    <li className="mb-5 text-base font-medium hover:text-[#FF6B6B]"><a href="#" className="nav-link" onClick={() => {setshow_sidebar(false)}}>Events</a></li>
                    <li className="mb-5 text-base font-medium hover:text-[#FF6B6B]"><a href="#" className="nav-link" onClick={() => {setshow_sidebar(false)}}>About</a></li>
                </ul>
                </div>
                
            </div>
            }
            {/* mobile sidebar */}

            {/* desktop Nav Links */}
            <div className="desktop-nav-links-main hidden sm:block">
                <ul className="nav-links flex flex-row gap-x-5">
                    <li className="text-base font-normal text-black transition-color ease-in duration-200  hover:text-[#FF6B6B] "><a href="#" className="nav-link  outline-0">Gallery</a></li>
                    <li className="text-base font-normal text-black transition-color ease-in duration-200  hover:text-[#FF6B6B] "><a href="#" className="nav-link outline-0">Artists</a></li>
                    <li className="text-base font-normal text-black transition-color ease-in duration-200  hover:text-[#FF6B6B] "><a href="#" className="nav-link outline-0">Events</a></li>
                    <li className="text-base font-normal text-black transition-color ease-in duration-200  hover:text-[#FF6B6B] "><a href="#" className="nav-link outline-0">About</a></li>
                </ul>
            </div>
            {/* desktop Nav Links */}

        </div>

    </nav>
    </>)
}
export default Navbar;