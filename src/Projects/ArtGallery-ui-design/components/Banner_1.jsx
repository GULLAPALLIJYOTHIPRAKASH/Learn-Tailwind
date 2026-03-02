import banner_2 from "../assets/banner-2.jpg";

function Banner_1(){

    return(<>
    <div className="banner-container pt-30">
        <div className="banner-center max-w-[1550px]  mx-auto  px-[20px] lg:flex   space-x-10  ">
            <div className="heading-section   lg:w-1/2 lg:flex lg:flex-col">
                <h1 className="text-5xl/15 font-meduim font-serif mb-6"><b>Live With</b> <br /> <b className="text-black">Creative Soul</b></h1>
                <p className="text-lg text-gray-700 mb-8 max-w-lg">ArtistryHaus curates a collection of evocative art pieces, decor, and furniture that transform your home into a personal gallery.</p>
                <div className="btn-container">
                <button className="text-white bg-black w-full lg:w-[200px]  py-4 text-lg rounded-lg transition-transform linear duration-300 cursor-pointer ouline-none md:hover:translate-y-[-10px] mb-6">Make Gallery</button>
                <button className="text-[#1e1e2f] bg-transparent border border-gray-300 w-full  lg:w-[200px] lg:ml-[10px]   py-4 text-lg rounded-lg transition-transform linear duration-300 cursor-pointer  ouline-none md:hover:translate-y-[-10px] mb-6">Browse Gallery</button>

                </div>
                <div className="info flex space-x-8">
                    <div className="flex flex-col justify-center item-center">
                        <span className="text-black text-[22px] font-medium">30+</span>
                        <span className="text-gray-700 text-lg  font-normal">Featured Artists</span>
                    </div>
                     <div className="flex flex-col justify-center item-center">
                        <span className="text-black text-[22px] font-medium">200+</span>
                        <span className="text-gray-700 text-lg  font-normal">Curated Pieces</span>
                    </div>
                     <div className="flex flex-col justify-center item-center">
                        <span className="text-black text-[22px] font-medium">Global</span>
                        <span className="text-gray-700 text-lg  font-normal">Artist Network</span>
                    </div>
                    
                    
                </div>
            </div>
            <div className="banner-section my-15 lg:my-0  relative lg:w-1/2 z-6">
                <div className="img-container w-[100%] h-[100%]   relative   rounded-3xl shadow-xl overflow transform-0 rotate-1 hover:rotate-0 transition-transform duration-500 ">
                    <img src={banner_2} alt="" className="w-[100%] h-[100%] object-center object-conver rounded-3xl" />


                    {/* <button className="price absolute top-[20px] right-[20px] flex bg-[#ffd93d] font-bold py-3 px-5 animate-pulse  rounded-full">$499</button> */}
                    
                     
                </div>
                <div className="small-card flex flex-col bg-white rounded-lg  shadow-lg shadow-black/50 absolute -top-7 left-0 md:-left-2  lg:-left-7 py-3 px-3">
                        <span className="text-sm font-bold ">Original</span>
                        <span className="text-sm text-[#1e1e2f]">One-of-a-kind pieces</span>
                    </div>
                <div className="small-card flex flex-col bg-white rounded-lg  shadow-lg shadow-black/50 absolute -bottom-7 right-0 md:-right-2 lg:-right-3  py-3 px-3">
                        <span className="text-sm font-bold ">Expressive</span>
                        <span className="text-sm text-[#1e1e2f]">Curated for emotion</span>
                    </div>
               

            </div>
        </div>
    </div>
    </>)
}

export default Banner_1;