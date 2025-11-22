function Transform(){

    return(<>
    <h1 className="text-2xl text-sky-400 font-medium m-5">1.Transform</h1>
    <div className="flex">
        
        <div className="bg-green-300 m-5 p-5 size-[200px] text-center text-xl content-center transition-transform ease-in duration-200  hover:translate-6">Translate</div>
        <div className="bg-green-300 m-5 p-5 size-[200px] text-center text-xl content-center transition-transform ease-in duration-200  hover:translate-x-50">Translate-X</div>
        <div className="bg-green-300 m-5 p-5 size-[200px] text-center text-xl content-center transition-transform ease-in duration-200  hover:translate-y-50">Translate-Y</div>
        <div className="bg-green-300 m-5 p-5 size-[200px] text-center text-xl content-center transition-transform ease-in duration-300 translate-x-90 hover:-translate-50">Translate -ve</div>
        <div className="bg-green-300 m-5 p-5 size-[200px] text-center text-xl content-center transition-transform ease-in duration-100  hover:-translate-z-10 hover:rotate-80 hover:bg-red-400">Translate -Z</div>

    </div>
    {/* rotate */}
<div className="flex">
        <div className="bg-red-200 m-4 p 4 size-[200px] text-center content-center transition-transform linear duration-300 hover:rotate-160">rotate 0-360</div>
    <div className="bg-red-200 m-4 p 4 size-[200px] text-center content-center transition-transform linear duration-300 hover:rotate-x-160">rotate x</div>
    <div className="bg-red-200 m-4 p 4 size-[200px] text-center content-center transition-transform linear duration-300 hover:rotate-y-160">rotate y</div>
    <div className="bg-red-200 m-4 p 4 size-[200px] text-center content-center transition-transform linear duration-300 hover:rotate-z-60 hover:-rotate-x-30">rotate z</div>
    <div className="bg-red-200 m-4 p 4 size-[200px] text-center content-center transition-transform linear duration-300 hover:rotate-z-60 hover:-rotate-y-30">rotate z</div>

</div>
    {/* scale */}
    <div className="flex">
            <div className="bg-blue-200 m-4 p-4 size-[200px] transition-transform duration-400 ease-out hover:scale-40 text-center content-center text-xl">scale</div>
            <div className="bg-blue-200 m-4 p-4 size-[200px] transition-transform duration-400 ease-out hover:scale-x-40 text-center content-center text-xl">scale x</div>
            <div className="bg-blue-200 m-4 p-4 size-[200px] transition-transform duration-400 ease-out hover:scale-y-40 text-center content-center text-xl">scale y</div>

    </div>

    {/* skew */}

    <div className="flex">

        <div className="bg-green-200 m-4 p-4 size-50 text-center content-center text-2xl transition-transform duration-200 linear hover:skew-10">skew</div>
        <div className="bg-green-200 m-4 p-4 size-50 text-center content-center text-2xl transition-transform duration-200 linear hover:skew-x-10">skew x</div>
        <div className="bg-green-200 m-4 p-4 size-50 text-center content-center text-2xl transition-transform duration-200 linear hover:skew-y-10">skew y</div>
        <div className="bg-green-200 m-4 p-4 size-50 text-center content-center text-2xl transition-transform duration-200 linear hover:-skew-x-50">skew x -ve</div>
        <div className="bg-green-200 m-4 p-4 size-50 text-center content-center text-2xl transition-transform duration-200 linear hover:-skew-y-32">skew y -ve</div>
    </div>
    </>)
}

export default Transform;