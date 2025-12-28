
const ContinueWatching = () => {
    const moviesList = [
        {
            name: "Midnight Mischief Squad",
            ep: "Ep.3",
            time: "30min 50sec",
            completed: 20,
            image: "videoImg1.jpg"
        },
        {
            name: "Legends of the Emerald Mist",
            ep: "S1 Ep.3",
            time: "12min 20sec",
            completed: 50,
            image: "videoImg2.jpg"
        },
        {
            name: "Rise of the Last Guardian",
            ep: "S3 Ep.10",
            time: "35min 55sec",
            completed: 60,
            image: "videoImg3.jpg"
        },
        {
            name: "The Broken Crown",
            ep: "S1 Ep.5",
            time: "50min 30sec",
            completed: 30,
            image: "videoImg4.jpg"
        },
    ]
    return (
        <div className="w-full p-8">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-2xl font-semibold">Continue Watching</h1>
                <button className="bg-[#2C2638] font-bold py-2 px-4 rounded cursor-pointer">See All</button>
            </div>
            <div className="flex flex-col md:flex-row w-full mt-8 gap-4 items-stretch">
                {moviesList.map((elem, idx) => {
                    return <div className="md:w-1/4 w-full movie-card transition cursor-pointer overflow-hidden rounded-2xl hover:scale-105 relative" key={idx}>
                        <img src={elem.image} className="hover:brightness-50 object-cover h-full w-full transition" alt="Image" loading="lazy" />
                        <div className="absolute flex p-4 justify-end flex-col gap-2 inset-0 top-0 pointer-events-none">
                            <h1 className="text-xl font-bold ">{elem.name}</h1>
                            <div className="flex w-full justify-between">
                                <button className="bg-[#00000051] text-sm py-1 px-2 rounded">{elem.ep}</button>
                                <h4>{elem.time}</h4>
                            </div>
                            <div className="bg-[#00000047] w-full h-1 rounded-full">
                                <div style={{ width: `${elem.completed}%` }} className="bg-[#AC8DD4] h-full"></div>
                            </div>
                        </div>
                        <div className="transition absolute top-1/2 bg-[#AC8DD4] size-17 flex justify-center items-center rounded-full left-1/2 shadow-[0_2px_5px_#AC8DD4] pointer-events-none -translate-1/2 play-button scale-0">
                            <i className="ml-2 ri-play-fill text-5xl"></i>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ContinueWatching
