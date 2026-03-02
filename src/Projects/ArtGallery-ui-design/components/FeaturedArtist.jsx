import card_1 from "../assets/card_1.jpg"
function FeaturedArtist(){

    return(<>
    <div className="featured-container pt-30">
        <div className="featured-center max-w-[1550px] mx-auto px-[20px]">
            <div className="heading flex flex-col justify-center items-center mx-auto">
                <h1 className="text-2xl text-[#1e1e2f] font-normal font-serif">Featured Artist</h1>
                <p className="text-lg text-gray-700 mb-8 max-w-lg">Celebrating global talent through inspiring creations</p>
            </div>
            <div className="featured-section grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] items-center gap-10">
                <article className="single-item shadow-xl rounded-b-xl">
                    <div className="img-container w-full h-full overflow-hidden rounded-t-xl">
                        <img src={card_1} alt="Men playing music" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="info p-3 bg-white ">
                        <h3 className="text-black  font-bold ">Elena Mirov</h3>
                        <p>Known for her abstract watercolor dreamscapes, Elena’s work evokes deep introspection.</p>
                    </div>

                </article>

                <article className="single-item shadow-xl rounded-b-xl">
                    <div className="img-container w-full h-full overflow-hidden rounded-t-xl">
                        <img src={card_1} alt="Men playing music" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="info p-3 bg-white ">
                        <h3 className="text-black  font-bold ">Elena Mirov</h3>
                        <p>Known for her abstract watercolor dreamscapes, Elena’s work evokes deep introspection.</p>
                    </div>

                </article>

                <article className="single-item shadow-xl rounded-b-xl">
                    <div className="img-container w-full h-full overflow-hidden rounded-t-xl">
                        <img src={card_1} alt="Men playing music" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="info p-3 bg-white ">
                        <h3 className="text-black  font-bold ">Elena Mirov</h3>
                        <p>Known for her abstract watercolor dreamscapes, Elena’s work evokes deep introspection.</p>
                    </div>

                </article>
            </div>
        </div>
    </div>
    </>)

}

export default FeaturedArtist;