 function Display(){

    return(<>
    
    <h1 className="text-3xl text-red-400">1.Display</h1>

    <div className="bg-blue-400 p-10 ">

        <div className="inline bg-orange-200  w-[100px] h-[200px]">inline element ----------- Lorem ipsum dolor sit amet.</div>
        <br />
        <div className="inline-block bg-orange-200 w-[100px] h-[200px]">inline-block element ----------- Lorem ipsum dolor sit amet.</div>

        <span className="bg-orange-300 block">block element --------------- Lorem ipsum dolor sit.  </span>

            <h1>display : none  below  </h1>
        <span className="hidden">display : none </span>
    </div>
    </>)
 }

 export default Display;