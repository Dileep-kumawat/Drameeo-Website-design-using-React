import Content from "./components/Content";
import SidebarLeft from "./components/SidebarLeft";

const App = () => {
  return (
    <div className='w-full h-screen overflow-hidden flex bg-[#0F0F1E] text-white'>
      <SidebarLeft />
      <Content />
    </div>
  )
}

export default App
