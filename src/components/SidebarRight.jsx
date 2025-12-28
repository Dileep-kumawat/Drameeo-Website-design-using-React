
const SidebarRight = ({ openHandler }) => {
  return (
    <div className="bg-[#20192bf2] p-8 fixed top-0 right-0 text-xl font-bold h-screen z-30">
      <div className="w-full flex justify-between items-center">
        <h1>Menu</h1>
        <i onClick={openHandler} className="ri-close-large-line"></i>
      </div>
      <div className={`flex flex-col text-gray-500 justify-around *:flex *:hover:text-white *:items-center *:gap-3 *:cursor-pointer py-8 *:px-3 font-semibold w-full h-full`}>
        <div>
          <i className="text-[#AC8DD4] text-2xl ri-home-fill"></i>
          {open ? <span className="text-white">Home</span> : ""}
        </div>
        <div>
          <i className="text-2xl ri-compass-3-line"></i>
          {open ? <span>Explore</span> : ""}
        </div>
        <div>
          <i className="text-2xl ri-stack-line"></i>
          {open ? <span>Genres</span> : ""}
        </div>
        <div>
          <i className="text-2xl ri-heart-line"></i>
          {open ? <span>Favourites</span> : ""}
        </div>
        <div className="h-0.5 w-full bg-[#4949497c]"></div>
        <div>
          <i className="text-2xl ri-play-fill"></i>
          {open ? <span>Continue Watching</span> : ""}
        </div>
        <div>
          <i className="text-2xl ri-time-line"></i>
          {open ? <span>Recently Added</span> : ""}
        </div>
        <div>
          <i className="text-2xl ri-folder-open-line"></i>
          {open ? <span>My Collections</span> : ""}
        </div>
        <div>
          <i className="text-2xl ri-download-2-line"></i>
          {open ? <span>Downloads</span> : ""}
        </div>
        <div className="h-0.5 w-full bg-[#4949497c]"></div>
        <div>
          <i className="text-2xl ri-settings-3-line"></i>
          {open ? <span>Settings</span> : ""}
        </div>
        <div>
          <i className="text-2xl ri-logout-box-r-line"></i>
          {open ? <span>Logout</span> : ""}
        </div>
      </div>
    </div>
  )
}

export default SidebarRight
