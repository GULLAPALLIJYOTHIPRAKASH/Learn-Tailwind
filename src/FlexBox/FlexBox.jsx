function FlexBox(){

    return(<>
    
    <h1 className="text-blue-400 font-medium text-4xl">1.FlexBox Tailwind</h1>

    {/* flex */}

    <div className="m-5 border-2 ">

    
        <ul className="flex">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>

    </div>


    {/* flex-direction */}
    <div className="m-5 border-2 ">

    <h1>colums</h1>
        <ul className="flex flex-col">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>

<br />
        <h1>columns reverse</h1>
        <ul className="flex flex-col-reverse">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>

        <br />

        <h1>row reverse</h1>
        <ul className="flex flex-row-reverse">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>

    </div>


    {/* flex-wrap */}

      <div className="m-5 border-2 ">


        <h1>flex wrap</h1>
        <ul className="flex flex-wrap">
            <li className="p-5 m-2 bg-sky-300">01</li>
            <li className="p-5 m-2 bg-sky-300">02</li>
            <li className="p-5 m-2 bg-sky-300">03</li>
            <li className="p-5 m-2 bg-sky-300">04</li>
            <li className="p-5 m-2 bg-sky-300">05</li>
            <li className="p-5 m-2 bg-sky-300">05</li>
            <li className="p-5 m-2 bg-sky-300">05</li>
            <li className="p-5 m-2 bg-sky-300">05</li>
            <li className="p-5 m-2 bg-sky-300">05</li>
            <li className="p-5 m-2 bg-sky-300">05</li>
        </ul>

        <br />

         <h1>flex nowrap</h1>
        <ul className="flex flex-nowrap">
            <li className="p-5 m-2 bg-red-300">01</li>
            <li className="p-5 m-2 bg-red-300">02</li>
            <li className="p-5 m-2 bg-red-300">03</li>
            <li className="p-5 m-2 bg-red-300">04</li>
            <li className="p-5 m-2 bg-red-300">05</li>
            <li className="p-5 m-2 bg-red-300">05</li>
            <li className="p-5 m-2 bg-red-300">05</li>
            <li className="p-5 m-2 bg-red-300">05</li>
            <li className="p-5 m-2 bg-red-300">05</li>
            
        </ul>

        <br />


          <h1>flex wrap reverse</h1>
        <ul className="flex flex-wrap-reverse">
            <li className="p-5 m-2 bg-red-300">01</li>
            <li className="p-5 m-2 bg-red-300">02</li>
            <li className="p-5 m-2 bg-red-300">03</li>
            <li className="p-5 m-2 bg-red-300">04</li>
            <li className="p-5 m-2 bg-red-300">05</li>
            <li className="p-5 m-2 bg-red-300">05</li>
            <li className="p-5 m-2 bg-red-300">05</li>
            <li className="p-5 m-2 bg-red-300">05</li>
            <li className="p-5 m-2 bg-red-300">05</li>
        
        </ul>

        <br />

    </div>


    {/* justify-content */}
     <div className="m-5 border-2 ">


        <h1>justify-content : start</h1>
        <ul className="flex justify-start">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>

        <br />

        
        <h1>justify-content : end</h1>
        <ul className="flex justify-end">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>

        <br />
        
        <h1>justify-content : center</h1>
        <ul className="flex justify-center">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>

        <br />

        
        <h1>justify-content : space-between</h1>
        <ul className="flex justify-between">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>

        <br />
        
        <h1>justify-content : space-around</h1>
        <ul className="flex justify-around">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>

        <br />

        
        <h1>justify-content : space-evenly</h1>
        <ul className="flex justify-evenly">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>





    </div>

    {/* align-items */}
    <div className="m-5 border-2 ">

            <h1>align-items : start</h1>
        <ul className="flex flex-col items-start">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>

        <br />

        <h1>align-items : end</h1>
        <ul className="flex flex-col items-end">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>

        <br />
                    <h1>align-items : center</h1>
        <ul className="flex flex-col items-center">
            <li className="p-5 m-2 bg-teal-300">01</li>
            <li className="p-5 m-2 bg-teal-300">02</li>
            <li className="p-5 m-2 bg-teal-300">03</li>
            <li className="p-5 m-2 bg-teal-300">04</li>
            <li className="p-5 m-2 bg-teal-300">05</li>
        </ul>
        <br />
      




    </div>

    


    </>)
}

export default FlexBox;