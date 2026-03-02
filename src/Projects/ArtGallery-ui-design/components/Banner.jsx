import banner_1 from "../assets/banner-1.jpg";

function Banner(){

    return(<>
    <div className="banner-container pt-30  animate-attention">
        <div className="banner-center max-w-[1550px]  mx-auto  px-[20px] lg:flex   space-x-10  ">
            <div className="heading-section   lg:w-1/2 lg:flex lg:flex-col">
                <h1 className="text-5xl/15 font-meduim font-serif mb-6"><b>Ignite Your</b> <br /> <b className="text-[#FF6B6B]">Artistic Soul</b></h1>
                <p className="text-lg text-gray-700 mb-8 max-w-lg">Explore a curated selection of contemporary and classic artwork, connecting collectors and creators in an inspiring online space.</p>
                <div className="btn-container">
                <button className="text-white bg-[#FF6B6B] w-full lg:w-[200px]  py-4 text-lg rounded-lg transition-transform linear duration-300 cursor-pointer ouline-none md:hover:translate-y-[-10px] mb-6">Browse Gallery</button>
                <button className="text-[#1e1e2f] bg-transparent border border-gray-300 w-full  lg:w-[200px] lg:ml-[10px]   py-4 text-lg rounded-lg transition-transform linear duration-300 cursor-pointer  ouline-none md:hover:translate-y-[-10px] mb-6">Meet Artists</button>

                </div>
                <div className="info flex space-x-8">
                    <div className="flex flex-col justify-center item-center">
                        <span className="text-[#FF6B6B] text-[22px] font-medium">150+</span>
                        <span className="text-gray-700 text-lg  font-normal">Artworks</span>
                    </div>
                     <div className="flex flex-col justify-center item-center">
                        <span className="text-[#FF6B6B] text-[22px] font-medium">30</span>
                        <span className="text-gray-700 text-lg  font-normal">Exhibitions</span>
                    </div>
                     <div className="flex flex-col justify-center item-center">
                        <span className="text-[#FF6B6B] text-[22px] font-medium">24/7</span>
                        <span className="text-gray-700 text-lg  font-normal">Online Viewing</span>
                    </div>
                    
                    
                </div>
            </div>
            <div className="banner-section my-15 lg:my-0  relative lg:w-1/2 z-6">
                <div className="img-container w-[100%] h-[100%]   relative   rounded-3xl shadow-xl overflow transform-0 rotate-1 hover:rotate-0 transition-transform duration-500 ">
                    <img src={banner_1} alt="" className="w-[100%] h-[100%] object-center object-conver rounded-3xl" />


                    <button className="price absolute top-[20px] right-[20px] flex bg-[#ffd93d] font-bold py-3 px-5 animate-pulse  rounded-full">$499</button>
                    
                     
                </div>
                <div className="small-card flex flex-col bg-white rounded-lg  shadow-lg shadow-black/50 absolute -top-7 left-0 md:-left-2  lg:-left-7 py-3 px-3">
                        <span className="text-sm font-bold ">Original Work</span>
                        <span className="text-sm text-[#1e1e2f]">Signed by Artist</span>
                    </div>
                <div className="small-card flex flex-col bg-white rounded-lg  shadow-lg shadow-black/50 absolute -bottom-7 right-0 md:-right-2 lg:-right-3  py-3 px-3">
                        <span className="text-sm font-bold ">Limited Editions</span>
                        <span className="text-sm text-[#1e1e2f]">Only 50 Prints</span>
                    </div>
               

            </div>
        </div>
    </div>
    </>)
}

export default Banner;