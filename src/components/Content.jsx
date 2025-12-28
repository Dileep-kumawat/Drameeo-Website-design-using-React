import { useState } from "react"
import HeroSection from "./HeroSection"
import Navbar from "./Navbar"
import SidebarRight from "./SidebarRight";
import ContinueWatching from "./ContinueWatching";
import Movies from "./Movies";
import Footer from "./Footer";

const Content = () => {
  const [open, setOpen] = useState(false);
  function openHandler() {
    setOpen(prev => !prev);
  }
  return (
    <div className="w-full h-full overflow-auto">
      <Navbar openHandler={openHandler} />
      <HeroSection />
      {open && (<div className="fixed top-0 z-20 bg-[#00000036] backdrop-blur-md h-screen w-full" onClick={openHandler}>
      </div>)}
      {open ? <SidebarRight openHandler={openHandler} /> : ""}
      <ContinueWatching />
      <Movies />
      <Footer />
    </div>
  )
}

export default Content