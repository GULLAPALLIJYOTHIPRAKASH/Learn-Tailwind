import banner_1 from "./assets/banner-1.jpg";
import banner_2 from "./assets/banner-2.jpg";
import founder from "./assets/founder.jpg";
import card_1 from "./assets/card-1.jpg";
import card_2 from "./assets/card-2.jpg";
import card_3 from "./assets/card-3.jpg";
import card_4 from "./assets/card-4.jpg";
import card_5 from "./assets/card-5.jpg";
import card_6 from "./assets/card-6.jpg";
import card_7 from "./assets/card-7.jpg";
function Project_three(){

    return(<>

    <div className="three-container">
        <div className="three-center">

            {/* navbar start */}
            <nav className=" mt-[25px]">

                <ul className="flex justify-center gap-[10px]">
                    <li>
                        <a href="#" className="text-base  sm:text-xl text-[#137548] font-bold  border-b-2 p-2 ">Home</a>
                    </li>
                    <li>
                        <a  className="text-base sm:text-xl  p-2 text-green-800 hover:text-[#137548] transition-all  linear duration-200 hover:font-bold  hover:border-b-2" href="#">Free Courses</a>
                    </li>
                    <li>
                        <a className="text-base  sm:text-xl p-2 text-green-800 hover:text-[#137548] transition-all  linear duration-200 hover:font-bold  hover:border-b-2" href="#">Meet The Founder</a>
                    </li>
                    <li>
                        <a className="text-base  sm:text-xl p-2 text-green-800 hover:text-[#137548] transition-all  linear duration-200 hover:font-bold  hover:border-b-2" href="#">Blogs</a>
                    </li>
                </ul>

            </nav>
            {/* navbar end */}

            {/* banner start */}
            <header className="mt-[50px]">

                <div className="side flex flex-col justify-center items-center md:flex-row md:gap-15">
                    <div className="img-container w-[350px] object-cover object-center">
                    <img src={banner_1} alt="" className="w-[100%] h-[100%] object-cover object-center" />
                </div>
                <h1 className="text-[30px] text-[#212221]  mt-[15px] font-bold tracking-1 md:text-5xl md:mt-0">The <br /> <span className="text-[#137548]">Photography</span></h1>

                </div>

                <div className="side flex flex-col justify-center items-center mt-[15px] md:flex-row-reverse md:gap-15">
                    <div className="img-container w-[350px] object-cover object-center">
                    <img src={banner_2} alt="" className="w-[100%] h-[100%] object-cover object-center" />
                </div>
                <p className="text-[30px] text-[#212221]  mt-[15px] font-bold tracking-1 md:mt-0">" <span className="text-[#137548] font-bold">Photography</span> is the story
          <br />
          I fail to put into words. "
        </p>
                </div>
                
            </header>
            {/* banner end */}


            {/* photograpy ? start */}

            <section className="mt-[50px] flex flex-col items-center  md:flex-row-reverse  md:justify-center md:gap-50">

                <h1 className="text-[30px] font-bold">What is<br />
        <span className="text-[#137548]">Photography?</span></h1>

        <p className="text-lg/8 font-normal w-[340px] mt-[15px] text-justify md:mt-0   ">
            <span className="font-bold">Photography</span> is the art, application, and
        practice of creating durable images by recording light, either
        electronically by means of an image sensor, or chemically by means of a
        light-sensitive material such as photographic film.

        </p>
            </section>
            {/* photograpy ? end */}


            {/* about start */}
            <section className="mt-[50px]">

                <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-50">

                    <div className="md:w-[350px] md:h-[400px] md:bg-[#137548]/60 ">

                            <div className="img-container w-[350px]  object-cover object-center md:relative md:top-[100px] md:left-[80px]">
                                <img src={founder} alt="" className="w-[100%] h-[100%] object-cover object-center" />
                            </div>

            </div>

                    <div className="info mt-[15px] flex flex-col items-center md:mt-0">
                        <h1 className="text-[30px] font-bold text-center">About <span className="text-[#137548]">Founder</span></h1>
                        <p className="w-80 text-lg/7 text-justify mt-[10px] md:mt-[30px]">Alec Soth is an American photographer, based in Minneapolis. Soth
          makes "large-scale American projects" featuring the midwestern United
          States. New York Times art critic Hilarie M. Sheets wrote that he has
          made a "photographic career out of finding chemistry with strangers"
          and photographs "loners and dreamers".</p>
                    </div>
                </div>
            </section>
            {/* about end */}


            {/* Projects start */}
            <section className="mt-[50px]">

                <h1 className="text-[30px] font-bold text-center">Recent <span  className="text-[#137548]">Projects</span></h1>

                <div className="cards mt-[30px] p-3  grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 justify-center items-center">
 
                    <article className="card rounded-xl w-[100%] h-[100%] shadow-md shadow-black/60">

                        <div className="img-container aspect-[355/250] object-cover object-center ">
                            <img src={card_1} alt="" className="w-[100%] h-[100%]  object-cover object-center rounded-t-xl" />
                        </div>
                        <p className="text-center text-lg py-2 text-green-400">Mountian View</p>

                    </article>
                    <article className="card rounded-xl w-[100%] h-[100%] shadow-md shadow-black/60">

                        <div className="img-container aspect-[355/250] object-cover object-center ">
                            <img src={card_2} alt="" className="w-[100%] h-[100%]  object-cover object-center rounded-t-xl" />
                        </div>
                        <p className="text-center text-lg py-2 text-green-400">Impact</p>

                    </article>
                    <article className="card rounded-xl w-[100%] h-[100%] shadow-md shadow-black/60">

                        <div className="img-container aspect-[355/250] object-cover object-center ">
                            <img src={card_3} alt="" className="w-[100%] h-[100%]  object-cover object-center rounded-t-xl" />
                        </div>
                        <p className="text-center text-lg py-2 text-green-400">Nature</p>

                    </article>
                    <article className="card rounded-xl w-[100%] h-[100%] shadow-md shadow-black/60">

                        <div className="img-container aspect-[355/250] object-cover object-center ">
                            <img src={card_4} alt="" className="w-[100%] h-[100%]  object-cover object-center rounded-t-xl" />
                        </div>
                        <p className="text-center text-lg py-2 text-green-400">Personal</p>

                    </article>
                    <article className="card rounded-xl w-[100%] h-[100%] shadow-md shadow-black/60">

                        <div className="img-container aspect-[355/250] object-cover object-center ">
                            <img src={card_5} alt="" className="w-[100%] h-[100%]  object-cover object-center rounded-t-xl" />
                        </div>
                        <p className="text-center text-lg py-2 text-green-400">Fancy</p>

                    </article>
                    <article className="card rounded-xl w-[100%] h-[100%] shadow-md shadow-black/60">

                        <div className="img-container aspect-[355/250] object-cover object-center ">
                            <img src={card_6} alt="" className="w-[100%] h-[100%]  object-cover object-center rounded-t-xl" />
                        </div>
                        <p className="text-center text-lg py-2 text-green-400">Lexcury</p>

                    </article>
                </div>
            </section>
            {/* Projects end */}


            {/* footer start */}

            <div className="footer mt-[50px] min-h-[200px] flex justify-around ">

                <div className="card">
                    <h1 className="text-xl font-bold">SITE MENU</h1>
                    <p className="py-[4px]">About Us</p>
                    <p className="py-[4px]">Photography</p>
                    <p className="py-[4px]">Lens Database</p>
                    <p className="py-[4px]">Lens Index</p>
                </div>

                 <div className="card">
                    <h1 className="text-xl font-bold">REVIEWS</h1>
                    <p className="py-[4px]">Reviews Archive</p>
                    <p className="py-[4px]">Camera Reviews</p>
                    <p className="py-[4px]">Lens Reviews</p>
                    <p className="py-[4px]">Other Gear Reviews</p>
                </div>


                 <div className="card">
                    <h1 className="text-xl font-bold">MORE</h1>
                        <p className="py-[4px]">Contact Us</p>
                        <p className="py-[4px]">Subscribe</p>
                        <p className="py-[4px]">Workshops</p>
                        <p className="py-[4px]">Support Us</p>
                </div>
            </div>
            {/* footer end */}


        </div>
    </div>
    </>)
}

export default Project_three;