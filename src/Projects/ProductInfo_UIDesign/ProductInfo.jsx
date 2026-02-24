import product_img from "./assets/headset.webp"
function ProductInfo(){

    return(<>
    <div className="productinfo-container font-Inter p-[20px] flex justify-center items-center h-[100vh]  bg-blue-100/60">
        <div className="productinfo-center max-w-[850px]     mx-auto   bg-white rounded-lg shadow-xl  shadow-grey-400   p-5 md:flex md:flex-row md:gap-x-10  transition-shadow ease-out duration-300 hover:shadow-lg hover: shadow-grey-300">
            <div className="img-container w-1/2 object-center overflow-hidden mx-auto">
                <img src={product_img} alt="Headset" className="w-[100%] h-[100%] object-center object-cover overflow-hidden" />
            </div>
            <div className="product-info-sectionmin-h-[100%] md:flex md:flex-col md:justify-center md:items-start">
                <span className="text-white bg-[#191847] p-1 rounded-xl text-xs capitalize tracking-1 font-medium">free shipping</span>
                <h1 className="text-[#191847] font-bold text-xl tracking-1 mt-2">Razer Kraken Kitty Edt Gaming <br />Headset Quartz</h1>
                <h4 className="text-base font-normal line-through mt-3">$ 1599.00</h4>
                <h3 className="text-2xl font-bold text-[#191847] mt-3">$ 799.00</h3>
                <p className="text-[#a7a6b9] text-sm font-medium mt-3">The offer is valid until April 3 or as long as stock lasts!</p>
                <button className=" outline-none text-white bg-[#4787e9] px-25 py-2 text-base font-normal rounded-lg shadow-lg mt-3 transition-all linear duration-300 hover:opacity-90  ">Add to cart</button>
                <p className="mt-3 text-[#191847] font-medium text-sm "> <span className="inline-block w-[10px] h-[10px] rounded-full bg-green-400 animate-pulse"></span> 50+ pcs. in stock.</p>
                <div className="btn-container mt-3 flex ">
                    <button className="outline-none text-base border-2 border-gray-300 rounded-lg px-3 py-2 mr-5  transition-all linear duration-300 hover:scale-[1.02]  text-sm md:text-base"><i className="fa-solid fa-scale-balanced "></i>  Add to Compare</button>
                    <button  className="outline-none text-base border-2 border-gray-300 rounded-lg px-3 py-2  transition-all linear duration-300 hover:scale-[1.02]  text-sm md:text-base"><i className="fa-regular fa-heart"></i> Add to Wishlist</button>
                </div>

            </div>
        </div>
    </div>
        </>)
}

export default ProductInfo;