function Font_Weight(){

    return(<>

    {/* font-weigth: 100-1000 */}
    <div className="container bg-orange-200 p-5">
    <h1 className="text-black text-lg">1.Font-weight</h1>
    <h2 className="text-xl font-thin">font weight 100</h2>
    <h2 className="text-xl font-extralight">font weight 200</h2>
    <h2 className="text-xl font-light">font weight 300</h2>
    <h2 className="text-xl font-normal">font weight 400</h2>
    <h2 className="text-xl font-meduim">font weight 500</h2>
    <h2 className="text-xl font-semibold">font weight 600</h2>
    <h2 className="text-xl font-bold">font weight 700</h2>
    <h2 className="text-xl font-extrabold">font weight 800</h2>
    <h2 className="text-xl font-black">font weight 900</h2>


            {/* custom font-weight */}
            <h1 className="text-xl font-[1000]">font weight custom</h1>
            <h1 className="text-xl font-[900]">font weight custom</h1>
            <h1 className="text-xl font-[500]">font weight custom</h1>
    </div>
    </>)
}

export default Font_Weight;