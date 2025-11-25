import hero from "./assets/hero.jpg";
import section_two from "./assets/section-two.jpg";
function Project_two(){

    return(<>
    <div className="two-container">
        <div className="two-center">

            {/* navbar start */}
            <nav className="ml-[50px] mt-[50px]">

                <ul>
                    <li>
                        <a href="#" className="focus:outline-none text-[#1BC8D3] text-xl font-medium tracking-1 border-b-2 border-[#1BC8D3] p-1 mr-[30px]">Home</a>
                        <a href="#" className="focus:outline-none transition-all duration-300 linear hover:text-[#1BC8D3] text-xl font-normal tracking-1 hover:border-b-2 hover:border-[#1BC8D3] p-1 mr-[30px]">Skills</a>
                        <a href="#" className="focus:outline-none transition-all duration-300 linear hover:text-[#1BC8D3] text-xl font-normal tracking-1 hover:border-b-2 hover:border-[#1BC8D3] p-1 mr-[30px]">Services</a>
                        <a href="#" className="focus:outline-none transition-all duration-300 linear hover:text-[#1BC8D3] text-xl font-normal tracking-1 hover:border-b-2 hover:border-[#1BC8D3] p-1 ">Work</a>
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
            <section className="mt-[50px] md:flex md:justify-center md:gap-[20px]">

                <div className="info mb-[15px] md:w-[50%] md:flex md:flex-col md:justify-center md:items-start ">
                    <h1 className="text-[40px] font-medium text-center">Our <br /> <span className="text-[#1BC8D3]">Skills</span></h1>
                    <p className="font-normal mt-[15px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime, doloribus accusamus libero magnam neque consequatur dolore incidunt in facere?</p>
                    <button className="bg-[#1BC8D3] py-3 px-5 text-[18px] text-white mt-[15px] tracking-2">Services</button>
                </div>
                <div className="md:w-[50%]">   
                <img src={section_two} alt="" />
                </div>
            </section>
            {/* section  end */}
        </div>
    </div>
    </>)

}


export default Project_two;