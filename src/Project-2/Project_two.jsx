import hero from "./assets/hero.jpg";
import section_two from "./assets/section-two.jpg";
import card_1 from "./assets/card-1.jpg";
import card_2 from "./assets/card-2.jpg";
import card_3 from "./assets/card-3.jpg";
import card_4 from "./assets/card-4.jpg";
import card_5 from "./assets/card-5.jpg";
import card_6 from "./assets/card-6.jpg";
function Project_two(){



    return(<>
    <div className="two-container scroll-smooth">
        <div className="two-center">

            {/* navbar start */}
            <nav className="ml-[50px] mt-[50px]">

                <ul className="flex">
                    <li>
                    <a   href="#" className="focus:outline-none text-[#1BC8D3] text-xl font-medium tracking-1 border-b-2 border-[#1BC8D3] p-1 mr-[30px]">Home</a>
                    </li>
                    <li>
                    <a  href="#skill" className="focus:outline-none transition-all duration-300 linear hover:text-[#1BC8D3] text-xl font-normal tracking-1 hover:border-b-2 hover:border-[#1BC8D3] p-1 mr-[30px]">Skills</a>
                    </li>
                    <li>
                    <a  href="#services" className="focus:outline-none transition-all duration-300 linear hover:text-[#1BC8D3] text-xl font-normal tracking-1 hover:border-b-2 hover:border-[#1BC8D3] p-1 mr-[30px]">Services</a>
                    </li> 
                    <li>
                    <a  href="#work" className="focus:outline-none transition-all duration-300 linear hover:text-[#1BC8D3] text-xl font-normal tracking-1 hover:border-b-2 hover:border-[#1BC8D3] p-1 ">Work</a>
                    </li>   

                   
                </ul>
            </nav>
            {/* navbar end */}


            {/* banner start */}
            <header className="hero mt-[50px] md:flex md:flex-row md:gap-[30px] md:justify-between md:items-center">
               <div className="">
                <img src={hero} className="" alt="" />
               </div>
               <div>
                
               <div className="mt-5 md:w-[50vw] md:mt-0">
                 <h1 className="text-3xl font-medium tracking-1 md:text-5xl">Web <span className="text-[#1BC8D3]">Agency</span></h1>

                <p className="font-normal mt-[10px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, vero alias molestias tempore facilis quae quibusdam! Non reprehenderit!</p>

                <div className="button-container mt-[20px]">
                    <button className="text-[18px] bg-[#1BC8D3] py-3 px-5 text-white mr-[40px] font-medium">Services</button>
                    <button className="text-[18px] font-medium p-2 border-b-2">Learn More</button>
                </div>
                <div className="sub-card mt-5 flex md:justify-around  ">

                    <div className="card p-3 bg-[#1BC8D3] md:mr-[30px]">
                        <h1 className="text-[16px] font-medium text-center"><span className="text-[18px] ">5 Star</span> Experience</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quod. Lorem ipsum dolor sit amet.</p>
                    </div>
                     <div className="card card p-3 bg-[#1BC8D3]/40 ">
                        <h1 className="text-[16px] font-medium text-center">Make <span className="text-[18px]">Your</span> offer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quod. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
               </div>
               </div>
            </header>
            {/* banner end */}

            {/* section  start */}
            <section className="mt-[50px] md:flex  md:gap-[20px]" id="skill">

                <div className="info mb-[15px] md:w-[50%] md:flex md:flex-col md:justify-center md:gap-[20px] md:items-start md:mb-0 md:pl-[50px] ">
                    <h1 className="text-[40px] font-bold text-center md:text-5xl">Our</h1>
                    <h1 className="text-[40px] font-bold text-center md:text-5xl text-[#1BC8D3]">Skills</h1>
                    <p className=" mt-[15px] md:w-[340px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime, doloribus accusamus libero magnam neque consequatur dolore incidunt in facere?</p>
                    <button className="bg-[#1BC8D3] py-3 px-5 text-[18px] text-white mt-[15px] tracking-2">Services</button>
                </div>
                <div className="md:w-[50%]">   
                <img src={section_two} alt="" />
                </div>
            </section>
            {/* section  end */}

            {/* service start */}
            <section className="mt-[50px]" id="services">

                <h1 className="text-[40px] font-bold text-center md:text-start md:pl-[50px]">Services</h1>
                <div className="flex gap-[15px] md:h-auto md:w-[450px] md:bg-[#444647] md:mt-[20px] ">

                    <div className="  one mt-[15px] space-y-[15px] md:mt-0 md:relative md:top-[20px] md:left-[100px]">

                        <div className="card  bg-[#1BC8D3] p-4 md:py-7 md:px-6">
                            <h1 className="font-medium text-base mb-[10px]">Web <br />Development
                            </h1>
                            <p className="font-normal text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              gravida volutpat a amet ut scelerisque nulla.</p>
                        </div>
                          <div className="card  bg-[#1BC8D3] p-4 md:py-7 md:px-6">
                            <h1 className="font-medium text-base mb-[10px]">Web <br />Design
                            </h1>
                            <p className="font-normal text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              gravida volutpat a amet ut scelerisque nulla.</p>
                        </div>
                    </div>

                    <div className="two mt-[15px] space-y-[15px] md:mt-0 md:relative md:top-[20px] md:left-[130px]">

                             <div className="card  bg-[#292A2B] text-white p-4 md:py-7 md:px-6">
                            <h1 className="font-medium text-base mb-[10px]">Web <br />Analytic
                            </h1>
                            <p className="font-normal text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              gravida volutpat a amet ut scelerisque nulla.</p>
                        </div>
                          <div className="card  bg-[#292A2B] text-white p-4 md:py-7 md:px-6">
                            <h1 className="font-medium text-base mb-[10px]">SEO <br /> Smm
                            </h1>
                            <p className="font-normal text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              gravida volutpat a amet ut scelerisque nulla.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* service end */}


            {/* project start */}
            <section className="mt-[50px]" id="work">
                <h1 className="text-[40px] font-bold text-center">Projects</h1>

                <div className="sub mt-[30px] p-2 grid  gap-3 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">

                    <article className="card bg-white w-[100%] h-[100%] rounded-b-xl  shadow-md shadow-black/30 ">

                        <div className="img-container aspect-[355/250]  overflow-hidden object-cover object-center rounded-t-xl">
                            <img src={card_1} alt="" className="w-[100%] h-[100%] overflow-hidden object-cover object-center" />
                        </div>
                        <h3 className="text-[16px] font-medium text-center p-2">Web Design</h3>
                    </article>

                    
                    <article className="card bg-white w-[100%] h-[100%] rounded-b-xl  shadow-md shadow-black/30 ">

                        <div className="img-container aspect-[355/250] overflow-hidden object-cover object-center rounded-t-xl">
                            <img src={card_2} alt="" className="w-[100%] h-[100%] overflow-hidden object-cover object-center" />
                        </div>
                        <h3 className="text-[16px] font-medium text-center p-2">Web Design</h3>
                    </article>


                    
                    <article className="card bg-white w-[100%] h-[100%] rounded-b-xl  shadow-md shadow-black/30 ">

                        <div className="img-container aspect-[355/250]  overflow-hidden object-cover object-center rounded-t-xl">
                            <img src={card_3} alt="" className="w-[100%] h-[100%] overflow-hidden object-cover object-center" />
                        </div>
                        <h3 className="text-[16px] font-medium text-center p-2">Web Design</h3>
                    </article>


                    
                    <article className="card bg-white w-[100%] h-[100%] rounded-b-xl  shadow-md shadow-black/30 ">

                        <div className="img-container aspect-[355/250]   overflow-hidden object-cover object-center rounded-t-xl">
                            <img src={card_4} alt="" className="w-[100%] h-[100%] overflow-hidden object-cover object-center" />
                        </div>
                        <h3 className="text-[16px] font-medium text-center p-2">Web Design</h3>
                    </article>



                    
                    <article className="card bg-white w-[100%] h-[100%] rounded-b-xl  shadow-md shadow-black/30 ">

                        <div className="img-container aspect-[355/250]  overflow-hidden object-cover object-center rounded-t-xl">
                            <img src={card_5} alt="" className="w-[100%] h-[100%] overflow-hidden object-cover object-center" />
                        </div>
                        <h3 className="text-[16px] font-medium text-center p-2">Web Design</h3>
                    </article>


                    
                    <article className="card bg-white w-[100%] h-[100%] rounded-b-xl  shadow-md shadow-black/30 ">

                        <div className="img-container aspect-[355/250] overflow-hidden object-cover object-center rounded-t-xl">
                            <img src={card_6} alt="" className="w-[100%] h-[100%] overflow-hidden object-cover object-center" />
                        </div>
                        <h3 className="text-[16px] font-medium text-center p-2">Web Design</h3>
                    </article>





        
                </div>
            </section>
            {/* project end */}

            {/* footer start */}
            <section className="footer mt-[50px] min-h-[150px] bg-[#444647]">
                <div className="sub-section p-5 mt-[20px] flex justify-around  items-center flex-wrap flex-auto  ">

                    <div className="child">
                        <h1 className="text-white text-xl mb-[5px]">Site Menu</h1>
                        <ul>
                                <li class="text-white">About Us</li>
                                <li class="text-white">Photography</li>
                                <li class="text-white">Lens Database</li>
                                <li class="text-white">Lens Index</li>
                        </ul>
                    </div>

                    <div className="child">
                        <h1 className="text-white text-xl mb-[5px]">REVIEWS</h1>
                        <ul>
                                <li class="text-white">Reviews Archive</li>
                                <li class="text-white">Camera Reviews</li>
                                <li class="text-white">Lens Reviews</li>
                                <li class="text-white">Other Gear Reviews</li>
                        </ul>
                    </div>

                    <div className="child">
                        <h1 className="text-white text-xl mb-[5px]">More</h1>
                        <ul>
                                <li class="text-white">Contact Us</li>
                                <li class="text-white">Subscribe</li>
                                <li class="text-white">Workshops</li>
                                <li class="text-white">Support Us</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* footer end */}
        </div>
    </div>
    </>)

}


export default Project_two;