function Shadows(){

    return(<>
    
    {/* box shadows */}
    <h1 className="text-3xl bg-black text-white">1.Shadows</h1>

    <div className="w-100 bg-white shadow-teal-300  shadow-2xs p-[10px]"> box shadow 2xs </div> <br />
    <div className="w-100 bg-white shadow-teal-300  shadow-xs p-[10px]"> box shadow xs </div> <br />
    <div className="w-100 bg-white shadow-teal-300  shadow-sm p-[10px]"> box shadow sm </div> <br />
    <div className="w-100 bg-white shadow-teal-300  shadow-md p-[10px]"> box shadow md </div> <br />
    <div className="w-100 bg-white shadow-teal-300  shadow-lg p-[10px]"> box shadow lg </div> <br />
    <div className="w-100 bg-white shadow-teal-300  shadow-xl p-[10px]"> box shadow xl </div> <br />
    <div className="w-100 bg-white shadow-teal-300  shadow-2xl p-[10px]"> box shadow 2xl </div> <br /> <br />
    <div className="w-100 bg-white shadow-inner shadow-teal-300  shadow-2xl p-[10px]">inner box shadow 2xl </div> <br /> <br />
    <div className="w-100 bg-white shadow-teal-300  shadow-2xl/30 p-[10px]"> box shadow 2xl  with opacity</div> 


    {/* text-shadows */}
    <h1 className="m-10 text-xl text-red-400">Text Shadows</h1>
    <h1 className=" text-2xl text-white text-shadow-teal-300  text-shadow-2xs  "> box shadow 2xs </h1> <br />
    <h1 className=" text-2xl text-white text-shadow-teal-300  text-shadow-xs   "> box shadow xs </h1> <br />
    <h1 className=" text-2xl text-white text-shadow-teal-300  text-shadow-sm   "> box shadow sm </h1> <br />
    <h1 className=" text-2xl text-white text-shadow-teal-300  text-shadow-md   "> box shadow md </h1> <br />
    <h1 className=" text-2xl text-white text-shadow-red-300  text-shadow-lg   "> box shadow lg </h1> <br />
    <div className="text-2xl bg-white text-shadow-teal-300  text-shadow-lg/30 p-[10px]"> box shadow lg  with opacity.</div> 

    </>)
}

export default Shadows;