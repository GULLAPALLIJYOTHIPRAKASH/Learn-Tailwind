import { useState } from "react";
import menu_bar from "../assets/hamburger_icon.svg"
import close_icon from "../assets/close.svg"
function Navbar(){

    const [show_sidebar , setshow_sidebar] = useState(false);

    return(<>
    <nav className="navbar-container bg-[#FFF8F0]/80 relative">
        <div className="navbar-center  max-w-[1550px] mx-auto p-[20px] flex justify-between items-center">
            <div className="logo-section">
                <h1 className="font-bold font-serif text-xl">Arto<span className="text-[#FF6B6B]">Gallery</span></h1>
            </div>
            <div className="hambegur-section sm:hidden" onClick={() => setshow_sidebar(!show_sidebar)}>
                <img  src={menu_bar} alt="hamburger icon" />
            </div>
            {
            show_sidebar && <div className={show_sidebar == true ? `nav-list-main absolute min-w-[100%] inset-0 min-h-[100vh] top-0 left-0 overflow-hidden bg-black/60   z-9  p-[20px] transition-all linear duration-600` :`nav-list-main absolute min-w-[100%] inset-0 min-h-[100vh] overflow-hidden bg-black/60 top-0 left-[100%]   z-9  p-[20px]`}>
                
                <div className="w-[60%] h-[100vh]    absolute  top-0 right-0  bg-[#FFF8F0]  p-[20px]"  >

                <div className="close-btn flex flex-col items-end " onClick={() => setshow_sidebar(false)}>
                    <img   src={close_icon} alt="close icon" />
                </div>
                <ul className="nav-list mt-10 ">
                    <li className="mb-5 text-base font-medium hover:text-[#FF6B6B]"><a href="#" className="nav-link">Gallery</a></li>
                    <li className="mb-5 text-base font-medium hover:text-[#FF6B6B]"><a href="#" className="nav-link">Artists</a></li>
                    <li className="mb-5 text-base font-medium hover:text-[#FF6B6B]"><a href="#" className="nav-link">Events</a></li>
                    <li className="mb-5 text-base font-medium hover:text-[#FF6B6B]"><a href="#" className="nav-link">About</a></li>
                </ul>
                </div>
                
            </div>
            }
        </div>

    </nav>
    </>)
}
export default Navbar;