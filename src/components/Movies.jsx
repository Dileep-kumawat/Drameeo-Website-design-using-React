
const Movies = () => {
    const movieList = [
        {
            name: "Shadow Realm Chronicles",
            rating: "4.8",
            image: "img1.jpg",
        },
        {
            name: "Echoes of the Void",
            rating: "4.6",
            image: "img2.jpg",
        },
        {
            name: "Neon Skies",
            rating: "4.5",
            image: "img3.jpg",
        },
        {
            name: "Crimson Horizon",
            rating: "4.7",
            image: "img4.jpg",
        },
        {
            name: "Frostfall Legacy",
            rating: "4.4",
            image: "img5.jpg",
        },
        {
            name: "Ashes of Tomorrow",
            rating: "4.3",
            image: "img6.jpg",
        },
        {
            name: "Midnight Paradox",
            rating: "4.6",
            image: "img7.jpg",
        },
        {
            name: "Starlight Dominion",
            rating: "4.9",
            image: "img8.jpg",
        },
        {
            name: "Shadow Realm Chronicles",
            rating: "4.8",
            image: "img1.jpg",
        },
        {
            name: "Echoes of the Void",
            rating: "4.6",
            image: "img2.jpg",
        },
        {
            name: "Neon Skies",
            rating: "4.5",
            image: "img3.jpg",
        },
        {
            name: "Crimson Horizon",
            rating: "4.7",
            image: "img4.jpg",
        },
        {
            name: "Frostfall Legacy",
            rating: "4.4",
            image: "img5.jpg",
        },
        {
            name: "Ashes of Tomorrow",
            rating: "4.3",
            image: "img6.jpg",
        },
        {
            name: "Midnight Paradox",
            rating: "4.6",
            image: "img7.jpg",
        },
        {
            name: "Starlight Dominion",
            rating: "4.9",
            image: "img8.jpg",
        }
    ];

    return (
        <div className="w-full p-8">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-2xl font-semibold">You Might Like</h1>
                <button className="bg-[#2C2638] font-bold py-2 px-4 rounded cursor-pointer">See All</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                {movieList.map((elem, idx) => {
                    return <div key={idx} className="w-full cursor-pointer relative movie-card h-[40vh] md:h-[50vh] rounded-2xl overflow-hidden bg-[#191526] flex flex-col">
                        <div className="h-full w-full">
                            <img className="h-full transition w-full object-cover" src={elem.image} alt="movie Image" loading="lazy" />
                        </div>
                        <h1 className="p-3">{elem.name}</h1>
                        <div className="transition absolute top-1/2 bg-[#AC8DD4] size-17 flex justify-center items-center rounded-full left-1/2 shadow-[0_2px_5px_#AC8DD4] pointer-events-none -translate-1/2 play-button scale-0">
                            <i className="ml-2 ri-play-fill text-5xl"></i>
                        </div>
                    </div>
                })}
            </div>
            <h2 className="text-center py-6">Load more...</h2>
        </div>
    )
}

export default Movies
