import Banner from "./components/Banner";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import New_Arrivals from "./components/New-Arrivals";
import ShopCategory from "./components/ShopCategory";
import Subscription from "./components/Subscription";
import Summer_sale from "./components/Summer-Sale";
import Testmonial from "./components/Testmonial";

import Social_Media from "./components/social-media";

function E_com(){


    return(<>
    <Navbar/>
    <Banner/>
    <ShopCategory/>
    <FeaturedProducts/>
    <Summer_sale/>
    <New_Arrivals/>
    <Testmonial/>
    <Social_Media/>
    <Subscription/>
    <Footer/>
  
    </>)
}

export default E_com;