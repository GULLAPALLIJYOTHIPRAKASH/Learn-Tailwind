function Height(){


    return (<>
    
    {/* height */}
    <h1 className="text-black font-extrabold text-4xl ">2.Height</h1>

    <div className="bg-orange-300 p-5 space-y-3">

        <div className="bg-red-500 w-[100px] h-10">Height 10</div>
        <div className="bg-red-500 w-[100px] h-20">Height 20</div>
        <div className="bg-red-500 w-[100px] h-30">Height 30</div>
        <div className="bg-red-500 w-[100px] h-40">Height 40</div>
        <div className="bg-red-500 w-[100px] h-50">Height 50</div>

        <div className="bg-green-500 h-[100px] w-[100px]">Height custom value 100px</div>

        {/* heigth 100% */}

        <div className="bg-green-500 w-[100px] h-full">Height : 100%</div>

        {/* heigth 100% */}

        {/* height viehport */}
        <div className="bg-green-500 w-[100px] h-screen">Height : 100%</div>
        {/* height viehport */}
    </div>


     {/* min-height */}
            <div className="bg-sky-400 p-4">
                <h1>min-height increase as content grows</h1>
                <div className="text-white text-xl  bg-red-500 min-h-20">min height tailwind </div>
                 <br />
                <div className="text-white text-xl  bg-red-500 min-h-40">min height tailwind ........ </div>
                <br />
                <div className="text-white text-xl  bg-red-500 min-h-60">min height tailwind............ </div>
                <br />
                <div className="inline-block text-white text-xl  bg-red-500 min-h-[250px]" >min height custom value......... inline-block </div>
            </div>
            {/* min-height */}


            {/* max-height */}
            <div className="bg-green-400 p-4 ">
                <h1>max-height increase as content grow</h1>
                <div className="text-white text-xl  bg-red-500 max-h-50">max height tailwind Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi doloremque, omnis labore itaque quidem in, tenetur blanditiis eum asperiores delectus nihil! Labore obcaecati ad inventore hic eos harum rem reiciendis magnam, necessitatibus dolorum deleniti, maiores, asperiores quod nobis at. </div>
                 <br />
                <div className="text-white text-xl  bg-red-500 max-h-30">max height tailwind Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, temporibus. Quo facilis suscipit voluptatem voluptates eveniet minima libero? Temporibus excepturi error ipsam aliquid maiores cum culpa quae, quas dicta esse eaque libero! Molestias, quasi saepe eum, ullam adipisci laudantium pariatur soluta excepturi nam nulla dicta blanditiis neque suscipit iste quia! </div>
               <br />
                <div className="text-white text-xl  bg-red-500 max-h-[300px] ">max height tailwind Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facere quam cumque similique cupiditate ipsa voluptates optio rerum magni maiores unde, voluptatum quia exercitationem fugit quasi in veritatis! Blanditiis architecto quod quia tempora officiis maiores minima, provident ipsum. Aliquam iusto ipsa est voluptatem? Distinctio deleniti hic optio, quibusdam obcaecati officiis?</div>
<br />
                <div className="inline-block text-white text-xl  bg-red-500 max-h-[250px]" >max height custom value as content breakdohn newline Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ea eum animi delectus reprehenderit minima itaque culpa eius laboriosam tempore cum minus quisquam quasi voluptates fugit nisi, illo perferendis mollitia ex tenetur error? Aut dolores id, dicta nesciunt hic doloribus sint dolore iure voluptatum ut, totam, ad quas ex vero! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo natus rerum libero fuga ratione debitis nemo molestiae mollitia sapiente tenetur deleniti beatae cum dolor qui, esse, harum ipsam? Dolor, recusandae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel id blanditiis similique aperiam esse ex nulla itaque. Nam optio mollitia neque non, eaque illo, beatae similique tempore nostrum in ipsa corrupti? Quo nostrum suscipit facere neque veniam. Nobis, alias rerum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum assumenda rem natus quasi! Et voluptas, accusamus optio aut laudantium ipsam natus obcaecati aliquam vitae tenetur alias quis quas aliquid veritatis similique esse, nam deleniti! At, nesciunt odit harum dignissimos numquam a eligendi. Est fugit aperiam veritatis recusandae nihil itaque quos praesentium, nam quidem sed ratione reiciendis repudiandae, eaque reprehenderit?</div>

            </div>
            {/* max-height */}
    {/* height */}
    </>)
}
export default Height;