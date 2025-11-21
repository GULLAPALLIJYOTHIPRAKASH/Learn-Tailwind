function Transition(){

    return(<>
    
    <h1  className="text-2xl text-blue-300 font-mono font-bold m-4">Transition</h1>

    <div className="m-4 p-4 bg-red-300 inline-block hover:bg-blue-400 hover:text-white">withOut Transition</div>
    
    <div className="m-4 p-4 bg-red-300 inline-block cursor-pointer transition duration-300 ease-in delay-400 hover:bg-blue-400 hover:text-white">With Transition ease-in duration delay</div>
    <div className="m-4 p-4 bg-red-300 inline-block cursor-pointer transition-all duration-500 ease-out delay-150 hover:bg-green-400 hover:text-white">With Transition-all ease-out duration delay</div>
    <div className="m-4 p-4 bg-red-300 inline-block cursor-pointer transition-color duration-600 ease-in-out delay-100 hover:bg-teal-400 hover:text-white">With Transition-color ease-in-out duration delay</div>
    <div className="m-4 p-4 bg-red-300 inline-block cursor-pointer transition-shadow  duration-700 ease-linear delay-50 hover:shadow-xl/20 hover:shadow-black hover:bg-pink-400 hover:text-white">With Transition-shadow linear duration delay</div>
    </>)
}

export default  Transition;