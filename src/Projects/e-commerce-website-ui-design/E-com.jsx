import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import men_dress from "./assets/men-dress.jpg"
import women_dress from "./assets/women-dress.jpg"
import handbags from "./assets/handbags.jpg"
import footwear from "./assets/footwear.jpg"
 
function E_com(){


    return(<>
    <Navbar/>
    <Banner/>

    {/* Shop By Category  */}
    <section className="category-container bg-gray-50 pt-16 ">
        <div className="category-center max-w-[1550px] mx-auto px-[20px]  mx-auto">
            <div className="heading">
                <h3 className="text-3xl font-bold text-center mb-10">Shop by Category</h3>
            </div>
            <section className="all-collections grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-6 mx-auto">

                {/* women collection */}
                <article className="collection  ">
                    <div className="img-container relative overflow-hidden rounded-lg aspect-[3/4]">
                        <img src={women_dress} alt="women's dress collection" className="w-[100%] h-[100%] object-center object-center overflow-hidden" />
                    <div className="info   absolute inset-0 bg-black/20 p-6 flex   items-end rounded-lg">
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">Women</h3>
                                <p className="text-white/80 text-sm">View Collection</p>
                            </div>
                    </div>

                    </div>
                </article>

                {/* men collection */}
                 <article className="collection  ">
                    <div className="img-container relative overflow-hidden rounded-lg aspect-[3/4]">
                        <img src={men_dress} alt="Men's dress collection" className="w-[100%] h-[100%] object-center object-center overflow-hidden" />
                    <div className="info   absolute inset-0 bg-black/20 p-6 flex   items-end rounded-lg">
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">Men</h3>
                                <p className="text-white/80 text-sm">View Collection</p>
                            </div>
                    </div>

                    </div>
                </article>

                {/* Handbags collection */}
                 <article className="collection  ">
                    <div className="img-container relative overflow-hidden rounded-lg aspect-[3/4]">
                        <img src={handbags} alt="Handbag's collection" className="w-[100%] h-[100%] object-center object-center overflow-hidden" />
                    <div className="info   absolute inset-0 bg-black/20 p-6 flex   items-end rounded-lg">
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">Handbags</h3>
                                <p className="text-white/80 text-sm">View Collection</p>
                            </div>
                    </div>

                    </div>
                </article>

                {/* Footwear Collection */}
                <article className="collection  ">
                    <div className="img-container relative overflow-hidden rounded-lg aspect-[3/4]">
                        <img src={footwear} alt="Footwear's collection" className="w-[100%] h-[100%] object-center object-center overflow-hidden" />
                    <div className="info   absolute inset-0 bg-black/20 p-6 flex   items-end rounded-lg">
                            <div>
                                <h3 className="text-white font-bold text-xl mb-1">FootWear</h3>
                                <p className="text-white/80 text-sm">View Collection</p>
                            </div>
                    </div>

                    </div>
                </article>
            </section>

        </div>
    </section>

    </>)
}

export default E_com;