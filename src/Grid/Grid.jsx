function Grid(){

    return(<>
    
    {/* grid */}
    <h1 className="text-2xl font-normal text-blue-400 m-4">Grid layout</h1>

    <div className="border-3 m-3">
        
        <h1 className="text-xl text-red-600 font-normal p-2">grid & grid-template-columns/rows & gap X/Y</h1>
        <ul className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-6">
            <li className="bg-teal-200 p-4">01</li>
            <li className="bg-teal-200 p-4">02</li>
            <li className="bg-teal-200 p-4">03</li>
            <li className="bg-teal-200 p-4">04</li>
            <li className="bg-teal-200 p-4">05</li>
            <li className="bg-teal-200 p-4">06</li>
        </ul>
    </div>

    <div className="border-3 m-3">
        
        <h1 className="text-xl text-red-600 font-normal p-2">grid-colums-span</h1>
        <ul className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-6">
            <li className="col-span-2 bg-teal-200 p-4">01</li>
            <li className="bg-teal-200 p-4">02</li>
            <li className="col-span-2 bg-teal-200 p-4">03</li>
            <li className="bg-teal-200 p-4">04</li>
            <li className="bg-teal-200 p-4">05</li>
            <li className="col-span-2 bg-teal-200 p-4">06</li>
        </ul>
    </div>

    <div className="border-3 m-3">
        
        <h1 className="text-xl text-red-600 font-normal p-2">grid-rows-span</h1>
        <ul className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-6">
            <li className="row-span-2 bg-teal-200 p-4">01</li>
            <li className="bg-teal-200 p-4">02</li>
            <li className="bg-teal-200 p-4">03</li>
            <li className="row-span-3 bg-teal-200 p-4">04</li>
            <li className="row-span-2 bg-teal-200 p-4">05</li>
            <li className="bg-teal-200 p-4">06</li>
        </ul>
    </div>


    
    <div className="border-3 m-3">
        
        <h1 className="text-xl text-red-600 font-normal p-2">layout with span</h1>
        <ul className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-6">
            <li className="row-span-2 col-span-2 bg-teal-200 p-4">01</li>
            <li className="row-span-3 bg-sky-200 p-4">02</li>
            <li className="col-span-2 bg-teal-200 p-4">03</li>
            <li className=" bg-teal-200 p-4">04</li>
            <li className="bg-teal-200 p-4">05</li>
            <li className="bg-teal-200 p-4">06</li>
        </ul>
    </div>
    </>)
}

export default Grid;