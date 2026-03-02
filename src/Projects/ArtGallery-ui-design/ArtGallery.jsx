import Banner from "./components/Banner";
import Banner_1 from "./components/Banner_1";
import FeaturedArtist from "./components/FeaturedArtist";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function ArtGallery(){

    return(<>
    
    <div className="page-back-design w-full min-h-full bg-[#FFF8F0] fixed -z-4 ">
            <div className="page-cirlce-design w-[200px] h-[200px] rounded-full  animate-mybounce bg-[#ff6b6b]/20   absolute  -z-5 -left-[100px]  top-[50vh]"></div>
            <div className="page-cirlce-design w-[200px] h-[200px] rounded-full  animate-mybounce bg-[#ffd93d]/20   absolute  -z-5 -right-[100px]  top-[70vh]"></div>


    </div>
        <Navbar/>
        <Banner/>
        <Banner_1/>
        <FeaturedArtist/>
        <Footer/>
    </>
    )
}

export default ArtGallery;