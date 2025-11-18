function Border(){

    return(<>
    
    {/* border */}
    <h1 className="text-xl font-extrabold text-red-500">1.Border</h1>

    <div className="border-2 border-blue-400 w-[400px] h-[100px]">border width & color</div> <br />
    <div className="border-3 border-red-400 w-[400px] h-[100px]">border width & color</div>
     <br />
    <div className="border-5 border-green-400 w-[400px] h-[100px]">border width & color</div>
    <br />
    <div className="m-5 w-[400px] h-[100px] border-t-4 border-red-400 ">border Top width & color</div> <br />
    <div className="m-5 w-[400px] h-[100px] border-l-4 border-green-400 ">border left width & color</div> <br />
    <div className="m-5 w-[400px] h-[100px] border-r-5 border-sky-500 ">border right width & color</div> <br />
    <div className="m-5 w-[400px] h-[100px] border-b-5 border-blue-500 ">border bottom width & color</div> <br />
    <div className="m-5 w-[400px] h-[100px] border-x-5 border-blue-500 ">border rught & left width & color</div> <br />
    <div className="m-5 w-[400px] h-[100px] border-y-5 border-blue-500 ">border bottom  &Top width & color</div> <br />

    <div className="m-5 w-[400px] h-[100px] border-solid  border-4 border-blue-500 ">border width , color , style</div> <br />
    <div className="m-5 w-[400px] h-[100px] border-dotted border-4  border-red-500 ">border width , color , style</div> <br />
    <div className="m-5 w-[400px] h-[100px] border-double  border-4 border-violet-500 ">border width , color , style</div> <br />
    <div className="m-5 w-[400px] h-[100px] border-dashed  border-4 border-pink-500 ">border width , color , style</div> <br /> 
    <div className="m-5 w-[400px] h-[100px] border-dashed  border-4 border-pink-500 rounded-[50%] ">border width , color , style , radius</div> <br /> 
    <div className="m-5 w-[400px] h-[100px] border-dashed  border-4 border-pink-500 rounded-[10px] ">border width , color , style , radius</div> <br /> 
    <div className="m-5 w-[400px] h-[100px] border-dashed  border-4 border-pink-500 rounded-5 ">ALL radius</div> <br /> 
    <div className="m-5 w-[400px] h-[100px] border-dashed  border-4 border-pink-500 rounded-tl-[40px] ">top left</div> <br /> 
    <div className="m-5 w-[400px] h-[100px] border-dashed  border-4 border-pink-500 rounded-tr-[40px] ">top right</div> <br /> 
    <div className="m-5 w-[400px] h-[100px] border-dashed  border-4 border-pink-500 rounded-bl-[40px] ">bottom left</div> <br /> 
    <div className="m-5 w-[400px] h-[100px] border-dashed  border-4 border-pink-500 rounded-br-[40px] ">bottom right</div> <br /> 

        {/* Outlet */}
            <div className="m-5 w-[400px] h-[100px] border-dashed  border-2 border-pink-500 outline-10 outline-red-200 outline-dotted outline-offset-4">ALL outline </div> <br /> 
            <div className="m-5 w-[400px] h-[100px] border-dashed  border-2 border-pink-500 outline-10 outline-red-200 outline-dashed outline-offset-4">outline </div> <br /> 
            <div className="m-5 w-[400px] h-[100px] border-dashed  border-2 border-pink-500 outline-10 outline-red-200 outline-double outline-offset-4">outline </div> <br /> 
            <div className="m-5 w-[400px] h-[100px] border-dashed  border-2 border-pink-500 outline-10 outline-red-200 outline-solid outline-offset-4">outline </div> <br /> 







    </>)
}

export default Border;