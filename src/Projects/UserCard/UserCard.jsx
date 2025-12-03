function UserCard(){

    return (<>
    <div className="container w-full min-h-screen flex justify-center items-center bg-white/40">
        <div className="center w-[300px] sm:w-[350px] md:w-[400px] min-h-[150px] bg-white shadow-xl shadow-black/6 rounded-lg hover:shadow-lg hover:shadow-black/8 ">
        <div className="profile-banner relative w-full ">
        <div className="bg-img-container  w-full h-[180px] rounded-t-lg bg-[url(https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)] bg-no-repeat bg-cover bg-top-left"></div>

        <div className="img-container size-35 rounded-[100%] overflow-hidden border-5 border-white absolute top-[50%] left-[50%] translate-x-[-50%] ">
            <img className="w-[100%] h-[100%] object-cover object-center " src="https://media.licdn.com/dms/image/v2/D5603AQExFwGfh74uug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702417888492?e=1766620800&v=beta&t=BG6VwGs8LZ6NY_-8uVSfvN2jAYb8dDZBf8llg4Vd990" alt="user profile img" />
        </div>
        </div>
        <div className="profile-info px-6 pt-6 pb-0  mt-9    text-center">

            <h2 className="text-lg font-medium">G Jyothi Prakash</h2>
            <p className="text-base text-gray-500 font-normal">Freelance Web Developer</p>

            <div className="icons flex w-full justify-around items-center mt-6  pb-7 border-b-1 border-gray-100">

                <div className="icon">
                    <div className=""><i className="fa-solid fa-star text-blue-900"></i></div>
                    <p className="text-gray-400 font-normal">2k</p>
                </div>
                <div className="icon">
                    <div className=""><i className="fa-solid fa-user text-blue-900"></i></div>
                    <p className="text-gray-400 font-normal">10k</p>
                </div>

                <div className="icon">
                <div className=""><i className="fa-solid fa-box text-blue-900"></i></div>
                <p className="text-gray-400 font-normal">15</p>
                </div>
            </div>

            <button className=" bg-black py-2 px-6 text-white rounded-full font-medium hover:shadow-lg cursor-pointer my-7"><a href="https://www.linkedin.com/in/gullapalli-jyothiprakash/" target="_blank">Follow</a></button>

        </div>

        </div>

    </div>
    </>)
}

export default UserCard;