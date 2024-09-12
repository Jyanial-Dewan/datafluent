import Topbar from "@/components/apps/Topbar"

const Layout = () => {
  return (
    <>
      <div className="bg-Dark-100 min-h-[100vh] min-w-[100vw] text-white">
        <div className="border-b border-gray-700 z-10">
         <Topbar/>
        </div>
      </div>
    </>
  ) 
}

export default Layout
