function TextDecoration(){

    // Text decoration
    // Text-decoration-line : underline | overline | line-through | no-underline;
    // Text-decoration-color: red | #47475
    // Text-decoration-style: solid | dotted | dashed | double | wavy
    // Text-decoration-thickness: 1,2,4,5,...[10px]....
    // Text-underline-offset : 1,2,4 , [10px]......

    return(<>

    {/* text-decoration */}

        {/* line */}
    <p className="text-red-500 underline">Text-decoration-line</p>
    <p className="text-blue-500 no-uderline">Text-decoration-line</p>
    <p className="text-pink-500 overline">Text-decoration-line</p>
    <p className="text-slate-500 line-through">Text-decoration-line</p>
        {/* line */}


        {/* color */}
    <p className="underline decoration-red-500">Text-decoration-color</p>
    <p className="line-through decoration-grey-500">Text-decoration-color</p>
    <p className="overline decoration-blue-500">Text-decoration-color</p>
    <p className="no-underline decoration-blue-500">Text-decoration-color</p>
        {/* color */}


        {/* Text-decoration-style */}
        <p className="text-pink-500 underline decoration-blue-600 decoration-solid">Text-decoration-style</p>
        <p className="text-pink-500 underline decoration-red-600 decoration-dotted">Text-decoration-style</p>
        <p className="text-pink-500 underline decoration-slate-600 decoration-wavy">Text-decoration-style</p>
        <p className="text-pink-500 underline decoration-orange-600 decoration-double">Text-decoration-style</p>
        <p className="text-pink-500 underline decoration-green-600 decoration-dashed">Text-decoration-style</p>

        {/* Text-decoration-style */}


        {/* Text-decoration-thickness */}
        <p className="underline text-orange-500  decoration-red-500 decoration-solid decoration-1">Text-decoration-thickness</p>
        <p className="line-through text-orange-500 decoration-red-500 decoration-double decoration-2">Text-decoration-thickness</p>
        <p className="overline text-orange-500 decoration-red-500 decoration-dotted decoration-3">Text-decoration-thickness</p>
        <p className="underline text-orange-500 decoration-red-500 decoration-dashed decoration-4">Text-decoration-thickness</p>
        <p className="underline text-orange-500 decoration-red-500 decoration-wavy decoration-5">Text-decoration-thickness</p>
        <p className="underline text-orange-500  decoration-blue-500 decoration-solid decoration-[10px]">Text-decoration-thickness custom value</p>
        <p>Lorem ipsum ? Explicabo eaque ut nesciunt in, laboriosam nam.</p>

        {/* Text-decoration-thickness */}


        {/* text underline offset */}
        <p className="underline text-blue-500 decoration-green-200 decoration-solid decoration-5 underline-offset-[5px]">Text underline offset</p>
        <p className="underline text-blue-500 decoration-slate-500 decoration-solid decoration-5 underline-offset-3">Text underline offset</p>
        {/* text underline offset */}





    {/* text-decoration */}
    
    </>)
}

export default TextDecoration;