import {HeaderProjectCard} from "../components/HeaderProjectCard.tsx";
import {Tabs} from "../components/Tabs.tsx";
import {Outlet} from "react-router";

const exampleData = {
  address: "ул. Гжатская, вл. 9",
  type: "Жилой комплекс",
  projectId: "HH33098-10-0001-99",
};

export const DashBoard = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className='mx-8 mt-4 flex-shrink-0'>
        <HeaderProjectCard {...exampleData} />
      </div>
      <div className='flex-shrink-0'>
        <Tabs/>
      </div>
      <div className='w-full overflow-y-auto'>
        <Outlet/>
      </div>
    </div>
  )
}