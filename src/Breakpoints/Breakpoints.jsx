function Breakpoints(){

    return(<>
    
    <h1 className="text-red-400 text-2xl font-medium">1.Breakpoints</h1>
    <ul className="list-disc">
        <li className="text-teal-400 sm:text-blue-400 text-lg font-extrabold">sm: 640px</li>
        <li className="text-teal-400 md:text-green-400 text-lg font-extrabold">md: 768px</li>
        <li className="text-teal-400 lg:text-violet-400 text-lg font-extrabold">lg: 1024px</li>
        <li className="text-teal-400 xl:text-yellow-400 text-lg font-extrabold">xl: 1280px</li>
        <li className="text-teal-400 2xl:text-black text-lg font-extrabold">2xl: 1536px</li>
    </ul>

    <div className="bg-red-400 sm:bg-blue-400 md:bg-green-400 lg:bg-violet-400 xl:bg-yellow-400 2xl:bg-black w-full h-screen"></div>
    </>)
}

export default Breakpoints;