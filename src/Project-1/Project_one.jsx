import search from "./assets/search-icon.svg";
import profile from "./assets/profile-icon.svg";
import cart from "./assets/cart-icon.svg";
import man_1 from "./assets/man-1.jpg";
import man_1_1 from "./assets/man-1.1.jpg";
import man_1_2 from "./assets/man-1.2.jpg";
import man_2 from "./assets/man-2.jpg";

function Project_one(){

    return(<>
    <div className="one-container w-[100%] min-h-screen bg-[#FBF7EE] font-sans">
        <div className="one-center">
            {/* navbar start */}
            <nav className="nav-container flex justify-around ">
                <div className="logo-section mt-5">
                    <h1 className="text-xl font-medium tracking-[2px]">MyFashion</h1>
                </div>
                <div className="nav-icons mt-5">
                    <img className="inline ml-5 sm:ml-7" src={search} alt="" />
                    <img className="inline ml-5 sm:ml-7" src={profile} alt="" />
                    <img className="inline ml-5 sm:ml-7" src={cart} alt="" />
                </div>
            </nav>
            {/* navbar end */}

            {/* banner start */}
            <header className="banner mt-[50px] flex flex-col items-center md:flex-row md:justify-around">
                <div className="card-left">
                    <h1 className="text-xl font-medium">Spring / Summer Vibes</h1>
                    <p className="font-light w-[340px] my-[15px] text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          asperiores soluta dolore nisi ad tempora odit illo aliquam tempore
          ratione.</p>
            <img src={man_2} alt="" className="w-[340px]" />
                </div>

                 <div className="card-right mt-[30px] md:mt-0">
                <img src={man_1} alt="" className="w-[340px] rounded-tl-full  rounded-tr-full" />
                <p className="font-light w-[340px] my-[15px] text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          asperiores soluta dolore nisi ad tempora odit illo aliquam tempore
          ratione.</p>
          <button className="border-1 p-[10px]  border-[#AF7452] text-[#AF7452] focus:outline-none">Explore</button>
                </div>
            </header>
            {/* banner end */}

            {/* section start */}
            <section className="main mt-[50px] flex flex-col items-center md:flex-row md:justify-around ">
                <div className="sub-info flex flex-col items-start">
                <h1 className="text-xl font-medium md:text-2xl ">An Industrial Take <br /> On Streetwear</h1>
          <p className="w-[340px] font-light my-[15px]">  Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.</p>
          <button className=" p-[10px] border-1 border-[#AF7452] text-[#AF7452] mb-[15px]  focus:outline-none ">Shop Now</button>

                </div>
          <img  className="w-[340px]" src={man_1_1} alt="" />
            </section>
            {/* section end */}

            {/* card section start */}
            <section className="mt-[50px] w-[100%   ] flex flex-row gap-[25px] justify-center flex-wrap flex-auto">
                <div className="card border-1 border-[#AF7452]/30    p-[10px_25px] rounded-md ">
                    <h1 className="text-lg font-medium mb-[15px]">Buy Now, Pay Later</h1>
                    <p className="font-light mb-[15px] w-[250px]">0% interest financing available pay after 30 days.</p>
                    <button className="border-1 p-[10px]  border-[#AF7452] text-[#AF7452] focus:outline-none ">Shop Now</button>
                </div>
                 <div className="card border-1 border-[#AF7452]/30    p-[10px_25px] ">
                    <h1 className="text-lg font-medium mb-[15px]">Buy Now, Pay Later</h1>
                    <p className="font-light mb-[15px] w-[250px]">0% interest financing available pay after 30 days.</p>
                    <button className="border-1 p-[10px]  border-[#AF7452] text-[#AF7452] focus:outline-none ">Shop Now</button>
                </div>
                 <div className="card border-1 border-[#AF7452]/30    p-[10px_25px]  ">
                    <h1 className="text-lg font-medium mb-[15px]">Buy Now, Pay Later</h1>
                    <p className="font-light mb-[15px] w-[250px]">0% interest financing available pay after 30 days.</p>
                    <button className="border-1 p-[10px]  border-[#AF7452] text-[#AF7452] focus:outline-none ">Shop Now</button>
                </div>
            </section>
            {/* card section end */}
        </div>
    </div>
    </>)
}

export default Project_one;