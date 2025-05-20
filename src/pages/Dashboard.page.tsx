import {MainInformationOfObject} from "../components/MainInformationOfObject.tsx";
import {Tabs} from "../components/Tabs.tsx";
import {Outlet} from "react-router";

export const DashBoard = () => {
  return (
    <div>
      <div className='m-8'>
        <MainInformationOfObject/>
      </div>
      <div>
        <Tabs/>
      </div>
      <Outlet/>
    </div>
  )
}