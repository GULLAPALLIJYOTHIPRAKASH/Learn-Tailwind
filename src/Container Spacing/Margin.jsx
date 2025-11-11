function Margin(){

    return(<>
    
    {/* Margin */}

    <h1>1.Margin</h1>
    <div className="m-3 bg-yellow-300">Margin All sides</div>
    <div className="mx-3 bg-red-400">Margin Left & right</div>
    <div className="my-3 bg-slate-400">Margin Top & Bottom</div>

    <div className="mt-5 bg-pink-400">Margin Top</div>
    <div className="mb-5 bg-blue-400">Margin Bottom</div>
    <div className="ml-3 bg-green-400">Margin Left</div>
    <div className="mr-6 bg-violet-400">Margin Right</div>

    {/* custom values */}
    <div className="m-[10px] bg-black text-white">Custom Margin</div>

        {/* -ve margin */}
        <div className="-mr-5 bg-red-500">-Ve Margin</div>

    {/* center element  */}
    <div className="m-auto bg-[#576840] w-[200px]">Margin all auto</div>
    </>)
}

export default Margin;