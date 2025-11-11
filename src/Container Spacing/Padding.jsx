function Padding(){

    return(<>
    
    {/* Padding */}
    <h1>1.Padding</h1>
    <div className="p-5 bg-indigo-200">Padding All Sides</div>
    <div className="px-5 bg-blue-300">Padding Left & Right</div>
    <div className="py-5 bg-red-300">Padding Top & Bottom</div>
    <div className="pt-5 bg-green-300">Padding Top</div>
    <div className="pl-5 bg-yellow-300">Padding Left</div>
    <div className="pr-5 bg-slate-300">Padding Right</div>
    <div className="pb-5 bg-violet-300">Padding Bottom</div>


    {/* Custom Padding */}
    <div className="p-[10px] bg-pink-400">Padding custom</div>


    </>)
}

export default Padding;