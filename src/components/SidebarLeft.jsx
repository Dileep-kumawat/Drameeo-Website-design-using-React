import { useState } from "react"

const SidebarLeft = () => {
  const [open, setOpen] = useState(true);

  function openHandler() {
    setOpen(prev => !prev);
  }

  // {open ?  : ""}

  return (
    <div className="bg-[#161323] h-screen hidden md:block p-8 rounded-2xl">
      <div className="flex w-full items-center gap-4">
        <div className="bg-[#9D7EC5] cursor-pointer py-2 px-3 font-bold rounded"><i className="ri-video-on-line"></i></div>
        {open ? <h1 className="text-2xl cursor-pointer font-bold">Drameeo</h1> : ""}
        {open ? <i onClick={openHandler} className="ri-menu-line cursor-pointer mt-1 text-2xl"></i> : ""}
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
        {!open ? <i onClick={openHandler} className="ri-menu-line cursor-pointer mt-1 text-2xl"></i> : ""}
      </div>
    </div>
  )
}

export default SidebarLeft
