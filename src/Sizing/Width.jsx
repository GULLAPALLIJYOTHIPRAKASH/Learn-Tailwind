function Width(){

    return(<>

    {/* width */}

        <div className="bg-teal-500 p-5">
            <h1 className="text-white text-3xl font-bold">1.Width</h1>
            <div className="bg-red-400 w-1">1</div>
            <div className="bg-red-400 w-2">2</div>
            <div className="bg-red-400 w-3">3</div>
            <div className="bg-red-400 w-4">4</div>
            <div className="bg-red-400 w-5">5</div>
            <div className="bg-red-400 w-6">6</div>
            <div className="bg-red-400 w-7">7</div>
            <div className="bg-red-400 w-8">8</div>
            <div className="bg-red-400 w-9">9</div>
            <div className="bg-red-400 w-10">10</div>

            <div className="bg-yellow-400 w-[300px]">width custom value 300px</div>
            <div className="bg-green-400 w-[50%]">width custom value 50%</div>

        </div>


            {/*width percentage %  */}
            <h1>increment with value</h1>
            <div className="bg-red-300 flex space-x-4 p-[10px] text-center">
                <div className="w-1/6 bg-violet-500">1/6</div>
                <div className="w-2/6 bg-violet-500">2/6</div>
              <div className="w-3/6 bg-violet-500">3/6</div>
                <div className="w-4/6 bg-violet-500">4/6</div>
                 <div className="w-5/6 bg-violet-500">5/6</div>
                 <div className="w-6/6 bg-violet-500">6/6</div>
            </div>

            {/*width percentage % */}


            {/* width with 100% */}
            <div className="w-full text-white bg-green-400 p-10 text-2xl">width full width: 100%</div>
            {/* width with 100% */}

            {/* wdith with 100vh */}
            <div className="w-screen text-white bg-pink-400 p-10 text-2xl">width viewport width: 100vw</div>
            {/* wdith with 100vh */}


            {/* min-width */}
            <div className="bg-sky-400 p-4">
                <h1>min-width increase as content grows</h1>
                <span className="text-white text-xl  bg-red-500 min-w-2">min width tailwind </span>
                 <br />
                <span className="text-white text-xl  bg-red-500 min-w-2">min width tailwind ........ </span>
                <br />
                <span className="text-white text-xl  bg-red-500 min-w-2">min width tailwind............ </span>
                <br />
                <div className="inline-block text-white text-xl  bg-red-500 min-w-[200px]" >min width custom value......... with inline-block </div>
            </div>
            {/* min-width */}


            {/* max-width */}
            <div className="bg-green-400 p-4 ">
                <h1>max-width increase as content grows</h1>
                <div className="text-white text-xl  bg-red-500 max-w-50">max width tailwind </div>
                 
                <div className="text-white text-xl  bg-red-500 max-w-30">max width tailwind ........ </div>
               
                <div className="text-white text-xl  bg-red-500 max-w-[300px] ">max width tailwind............ </div>

                <div className="inline-block text-white text-xl  bg-red-500 max-w-[250px]" >max width custom value as content breakdown newline</div>

            </div>
            {/* max-width */}

    {/* width */}
    </>)
}

export default Width;