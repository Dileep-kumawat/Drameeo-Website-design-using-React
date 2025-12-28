
const HeroSection = () => {
    return (
        <div className="w-full p-3 md:p-8">
            <div className="w-full rounded-2xl overflow-hidden relative bg-[url(heroSection.jpg)] bg-cover bg-right">
                <div className="w-full relative z-10 p-2 md:p-8 space-y-4 md:space-y-6 pt-20">
                    <button className="bg-[#48251E] text-[#FF6900] border border-[#6E3418] rounded-full py-2 px-4"><i className="ri-fire-line"></i> <span>Now Trending</span></button>
                    <div className="flex gap-2 items-center">
                        <button className="py-1 px-4 rounded-full bg-[#1C1829] border border-[#ffffff63]">Drama</button>
                        <button className="py-1 px-4 rounded-full bg-[#1C1829] border border-[#ffffff63]">Fantasy</button>
                    </div>
                    <div>
                        <h1 className="text-xl md:text-6xl font-bold">Dimensional Kids on an</h1>
                        <h1 className="text-xl md:text-6xl font-bold">Adventure</h1>
                    </div>
                    <div>
                        <p className="text-sm md:text-xl">When two curious kids stumble into a hidden portal, they travel</p>
                        <p className="text-sm md:text-xl">across magical dimensions while trying to find their way home...</p>
                    </div>
                    <div className="flex items-stretch gap-4 *:text-sm *:flex *:gap-2 *:whitespace-nowrap">
                        <button className="bg-[#AC8DD4] hover:scale-105 active:scale-95 transition cursor-pointer py-2 px-4 rounded-xl font-bold shadow-[0_2px_5px_#AC8DD4]"><i className="ri-play-fill"></i> <span className="hidden md:block">Watch Now</span> <span className="block md:hidden">Watch</span></button>
                        <button className="bg-[#1B1627] cursor-pointer transition active:scale-95 hover:scale-105 py-2 px-4 rounded-xl font-bold border border-[#fbfbfb70]"><i className="ri-download-2-line"></i><span className="hidden md:block">Download</span> </button>
                        <button className="bg-[#1B1627] cursor-pointer transition active:scale-95 hover:scale-105 py-2 px-4 rounded-xl font-bold border border-[#fbfbfb70] flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis w-4 h-4 md:w-5 md:h-5" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
                    </div>
                    <div className="flex gap-3 py-4 items-center *:cursor-pointer">
                        <div className="size-2 rounded-full bg-white"></div>
                        <div className="size-2 rounded-full bg-gray-500"></div>
                        <div className="size-2 rounded-full bg-gray-500"></div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-[#0f0f1e] via-[#0f0f1e]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0f1e] via-transparent to-transparent"></div>
            </div>
        </div>
    )
}

export default HeroSection
