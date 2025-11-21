function Animation(){

    return(<>
    
    <h1 className="text-3xl font-normal text-teal-400">Animation</h1>

    <div className="m-4 p-4 bg-green-300 inline-block w-[300px] h-[300px] animate-bounce "></div><br />
    <div className="m-4 p-4  inline-block w-[300px] h-[300px] animate-spin bg-gray-300 border-[50px] border-t-blue-400 border-red-400 rounded-[50%] "></div> <br />
    <div className="m-4 p-4 bg-blue-300 inline-block w-[300px] h-[300px] animate-ping "></div><br />
    <div className="m-4 p-4 bg-green-300 inline-block w-[300px] h-[300px] animate-pulse "></div> <br />
    <div className="m-4 p-4 bg-red-300 inline-block w-[300px] h-[300px] animate-mymove "></div> <br />
    <div className="m-4 p-4 bg-red-300 inline-block w-[300px] h-[300px] motion-reduce:animate-mymove "></div> <br />
    <div className="m-4 p-4 bg-red-300 inline-block w-[300px] h-[300px] motion-safe:animate-mymove "></div> <br />

    </>)
}

export default Animation;