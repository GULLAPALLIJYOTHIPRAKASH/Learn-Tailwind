import AccentColor from "./AccentColor";
import TextDecoration from "./TextDecoration";

function Color(){


    // color: red, #485863
    // background-color: red , #34563A

    return(<>
    
    {/* text color */}
    <div>
    <h1>1. text color with different shades</h1>
    <h1 className="text-black">Tailwind Text Black</h1>
    <h1 className="text-white bg-black">Tailwind Text white</h1>
    <h1 className="bg-black text-red-50">Tailwind</h1>
    <h1 className="bg-black text-red-100">Tailwind</h1>
    <h1 className="bg-black text-red-200" >Tailwind</h1>
    <h1 className="bg-black text-red-300" >Tailwind</h1>
    <h1 className="bg-black text-red-400" >Tailwind</h1>
    <h1 className="bg-black text-red-500" >Tailwind</h1>
    <h1 className="bg-black text-red-600" >Tailwind</h1>
    <h1 className="bg-black text-red-700" >Tailwind</h1>
    <h1 className="bg-black text-red-800" >Tailwind</h1>
    <h1 className="bg-black text-red-900" >Tailwind</h1>
    <h1 className="bg-black text-red-950" >Tailwind</h1>
    <h1 className="bg-black text-blue-100" >Tailwind</h1>
    <h1 className="bg-black text-blue-200" >Tailwind</h1>
    <h1 className="bg-black text-blue-300" >Tailwind</h1>
    <h1 className="bg-black text-blue-400" >Tailwind</h1>
    </div>

<br />
    {/* text color custom variable */}
    <h2 className="text-mycolor">Tailwind custom variable</h2>
    {/* text color custom variable */}

<br />
    {/* text color custom  */}
    <h3 className="text-[#99d98c]">Tailwind custom  textcolor</h3>
    <h3 className="text-[#1a759f]">Tailwind custom  textcolor</h3>
    {/* text color custom  */}


<br />

    {/* Text color with opacity */}
    <h4 className="text-red-500/25">Text color with opacity</h4>
    <h4 className="text-red-500/50">Text color with opacity</h4>
    <h4 className="text-red-500/75">Text color with opacity</h4>
    <h4 className="text-red-500/100">Text color with opacity</h4>
    <h4 className="text-mycolor/50">Text color with opacity</h4>
    <h4 className="text-[#890977]/70">Text color with opacity</h4>

    {/* Text color with opacity */}

<br />

    {/* text color */}


    {/* Background color */}
    <div>
        
    <h4 className="bg-red-50">Background color</h4>
    <h4 className="bg-red-100">Background color</h4>
    <h4 className="bg-red-200">Background color</h4>
    <h4 className="bg-red-300">Background color</h4>
    <h4 className="bg-red-400">Background color</h4>
    <h4 className="bg-red-500">Background color</h4>
    <h4 className="bg-red-600">Background color</h4>
    <h4 className="bg-red-700">Background color</h4>
    <h4 className="bg-red-800">Background color</h4>
    <h4 className="bg-red-900">Background color</h4>
    <h4 className="bg-red-950">Background color</h4>

    </div>
    <br />

    {/* background color with custom variable */}
    <h4 className="bg-mycolor">background color with custom variable</h4>
    {/* background color with custom variable */}

<br />

    {/* Background color with custom */}
    <h4 className="bg-[#597837]">Background color with custom</h4>
    <h4 className="bg-[#566A37]">Background color with custom</h4>
    {/* Background color with custom */}


<br />

    {/* Background color */}

    {/* TextDecoration */}
    <TextDecoration/>
    {/* TextDecoration */}


            {/* AccentColor */}
            <AccentColor/>
            {/* AccentColor */}


    </>)
}

export default Color;