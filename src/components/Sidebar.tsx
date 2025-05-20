import { Home } from 'lucide-react';
import logo from '/src/assets/letter-e-svgrepo-com.svg';
import type {ReactNode} from 'react';
import {NavLink, type To} from "react-router";

// Тип для навигационных вкладок
interface Tab {
  url: To;
  label: string;
  icon: ReactNode;
}

export const Sidebar = () => {

  const tabs: Tab[] = [
    {
      icon: <Home size={20} className="mx-auto" />,
      url: 'main',
      label: "Проекты строительства"
    },
  ];

  return (
    <div className='h-screen bg-gradient-to-t from-blue-950 to-fuchsia-900 text-white'
    >
      {/* Логотип компании */}
      <NavLink
        key={'/'}
        to={'/'}
        className='flex items-center pt-4 flex-col'
      >
        <img
          src={logo}
          alt="Логотип"
          className='h-8 w-8 object-contain p-0'
        />

        {/* Название системы */}
        <div className="flex py-2">
          <h1 className="text-center text-xs">Цифровой строительный паспорт</h1>
        </div>
      </NavLink>

      {/* Навигация */}
      <nav className="space-y-4">
        {tabs.map((tab: Tab) => (
          <NavLink
            key={tab.url.toString()}
            to={tab.url}
            className={({ isActive }: { isActive: boolean }) =>
              `block p-3 hover:bg-slate-100/40 transition-colors text-center ${
                isActive ? 'bg-slate-100/20 font-medium' : ''
              }`
            }
          >
            <div className="flex flex-col items-center">
              {tab.icon}
              <span className="mt-2 text-xs">{tab.label}</span>
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};