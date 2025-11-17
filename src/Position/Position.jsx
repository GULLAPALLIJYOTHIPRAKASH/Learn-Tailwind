function Position(){

    return(<>

    {/* Postion */}
    <h1 className="text-xl font-medium m-10">1.Position</h1>

    <div className="bg-yellow-300 p-[10px] w-[500px] h-[500px] m-10">

        <div className="bg-red-200 w-[100px] h-[100px] static">static</div>
        <div className="bg-green-200 w-[100px] h-[100px] relative top-4 left-5">relative top/left</div>
        <div className="bg-blue-200 w-[100px] h-[100px] relative bottom-10 right-5">relative bottom/right</div>
        <div className="bg-pink-300 w-[100px] h-[100px] absolute top-0 left-60">absolute without relative parent</div>
    </div>


    <div className="bg-yellow-300 p-[10px] w-[500px] h-[500px] m-10 relative">

        <div className="bg-pink-300 w-[100px] h-[100px] absolute top-0 left-0">absolute with relative parent</div>
        <div className="bg-pink-300 w-[100px] h-[100px] absolute top-0 right-0">absolute with relative parent</div>
        <div className="bg-pink-300 w-[100px] h-[100px] absolute top-30 left-60">absolute with relative parent</div>
        <div className="bg-pink-300 w-[100px] h-[100px] absolute bottom-0 right-0">absolute with relative parent</div>
        <div className="bg-pink-300 w-[100px] h-[100px] absolute bottom-0 left-0">absolute with relative parent</div>
        <div className="bg-pink-300 w-[100px] h-[100px] absolute bottom-40 right-60">absolute with relative parent</div>
    </div>


<div className="bg-teal-300 p-[10px] w-[200px] h-[200px]  fixed top-0 left-300 text-xl font-bold">fixed</div>

<div className="bg-orange-300 p-[10px] w-[200px] h-[200px]  relative top-0 left-200 text-xl font-bold">relative</div>
<div className="bg-orange-300 p-[10px] w-[200px] h-[200px]  relative top-0 left-200 text-xl font-bold">relative</div>
<div className="bg-orange-300 p-[10px] w-[200px] h-[200px]  relative top-0 left-200 text-xl font-bold">relative</div>
<div className="bg-orange-300 p-[10px] w-[200px] h-[200px]  relative top-0 left-200 text-xl font-bold">relative</div>
<div className="bg-red-500 p-[10px] w-[200px] h-[200px] text-white sticky top-0 left-200 text-2xl font-bold">sticky</div>
<div className="bg-orange-300 p-[10px] w-[200px] h-[200px]  relative top-0 left-200 text-xl font-bold">relative</div>
<div className="bg-orange-300 p-[10px] w-[200px] h-[200px]  relative top-0 left-200 text-xl font-bold">relative</div>
<div className="bg-orange-300 p-[10px] w-[200px] h-[200px]  relative top-0 left-200 text-xl font-bold">relative</div>
<div className="bg-orange-300 p-[10px] w-[200px] h-[200px]  relative top-0 left-200 text-xl font-bold">relative</div>



{/* z-index */}

    <h1 className="text-xl font-medium m-10">2. Z-index</h1>

 <div className="bg-yellow-300 p-[10px] w-[500px] h-[500px] m-10 relative">

        <div className="z-1 bg-pink-300 w-[100px] h-[100px] absolute top-[50px] left-[40px]  text-right">01</div>
        <div className="z-2 bg-red-300 w-[100px] h-[100px] absolute top-[50px] left-[-40px] text-left">02</div>
        <div className="z-3 bg-green-300 w-[100px] h-[100px] absolute top-[40px] ">03</div>
        <div className="z-4 bg-sky-300 w-[100px] h-[100px] absolute top-[50%] left-[200px]">04</div>
        <div className="z-5 bg-teal-300 w-[100px] h-[100px] absolute top-[50%] left-[100px]">05</div>
        <div className="z-6 bg-violet-300 w-[100px] h-[100px] absolute top-[50%]">06</div>
    
    </div>

    

    </>)
}

export default Position;