function Space_Between(){


    return(<>
    
    {/* Space-between X/Y */}
    <h1>1.Space Between X</h1>
    <div className="flex space-x-10">
        <div className="p-4 text-white bg-red-500">one</div>
        <div className="p-4 text-white bg-blue-500">two</div>
        <div className="p-4 text-white bg-green-500">three</div>
    </div>

    <h1>1.Space Between Y</h1>
    <div className="flex flex-col space-y-10">
        <div className="p-4 text-white bg-red-500">one</div>
        <div className="p-4 text-white bg-blue-500">two</div>
        <div className="p-4 text-white bg-green-500">three</div>
    </div>
    </>)


}

export default Space_Between;