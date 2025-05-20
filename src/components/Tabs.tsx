import { NavLink } from "react-router";

interface Tab {
  url: string;
  label: string;
}

export const Tabs = () => {

  // Массив объектов вкладок
  const tabs: Tab[] = [
    {url: '', label: 'Основные сведения'},
    {url: 'gallery', label: 'Галерея'},
    {url: 'documents', label: 'Документы'},
    {url: 'organizations', label: 'Организации'},
    {url: 'stages-of-implementation', label: 'Этапы реализации'},
  ];

  return (
    <nav className='sticky top-0 shadow-md bg-white'>
      <div className="container mx-auto py-3">
        <div className="flex justify-between items-center text-gray-500">
          {tabs.map((tab: Tab) => (<NavLink
            key={tab.url}
            to={tab.url}
            className={({isActive}) => (isActive ? 'text-blue-500' : 'text-gray-500')}
            end
          >
            {tab.label}
          </NavLink>))}
        </div>
      </div>
    </nav>
  )
}
