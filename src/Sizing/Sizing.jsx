import Height from "./Height";
import Width from "./Width";

function Sizing(){

    return(<>
    
    <h1 className="text-blue-500 text-2xl font-medium">1.Sizing</h1>

    <Width/>

    <Height/>

    {/* widht + height */}

    <div className="w-[500px] h-[500px] bg-red-500 ml-40 text-6xl text-white"> width + height 500px</div>
    <div className="size-[400px] bg-blue-500 ml-40 text-6xl text-white"> width + height with size 400px </div>
    {/* widht + height */}
    </>)
}

export default Sizing;