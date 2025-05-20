import {Sidebar} from "./components/Sidebar.tsx";
import {Outlet} from "react-router";


function App() {

  return (
    <div className="flex h-screen w-screen bg-slate-200 flex-row">
      <div className="flex-none w-24">
      <Sidebar/>
      </div>
      <div className="grow bg-slate-100 m-4 rounded-md shadow-lg">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
