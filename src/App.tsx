import {Sidebar} from "./components/Sidebar.tsx";
import {Outlet} from "react-router";

function App() {

  return (
    <div className="flex w-screen">
      <div className="flex-none w-24">
      <Sidebar/>
      </div>
      <div className="grow">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
