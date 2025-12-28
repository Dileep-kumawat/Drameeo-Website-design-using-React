
const Navbar = ({ openHandler }) => {
    return (
        <div className="w-full flex justify-between items-center py-4 px-3 md:px-8 border-b border-b-[#4a4255]">
            <div className="flex gap-4 items-center">
                <div onClick={openHandler} className="md:hidden cursor-pointer text-2xl"><i className="ri-menu-line"></i></div>
                <div className="bg-[#191526] flex gap-4 items-center py-3 px-4 rounded-2xl w-[45vw] border border-[#4a4255] hover:outline outline-[#AC8DD4]">
                    <i className="ri-search-line"></i>
                    <input className="border-none outline-none w-full" type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <i className="text-2xl ri-notification-line"></i>
                    <div className="bg-red-600 size-2 rounded-full absolute top-0 right-0"></div>
                </div>
                <div className="size-11 p-0.5 bg-[#191526] rounded-full overflow-hidden">
                    <img className="w-full rounded-full object-cover" src="avatar.jpg" alt="avatar" loading="lazy" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
