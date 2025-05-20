import {MainInformationOfObject} from "../components/MainInformationOfObject.tsx";
import {Tabs} from "../components/Tabs.tsx";
import {Outlet} from "react-router";

export const MainPage = () => {
  return (
    <div>
      <div className='p-4'>
        <MainInformationOfObject/>
      </div>
      <div>
        <Tabs/>
      </div>
      <Outlet/>
    </div>
  )
}