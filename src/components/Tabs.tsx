import { NavLink } from "react-router";
import {useState} from "react";
import {Menu, X} from "lucide-react";

interface Tab {
  url: string;
  label: string;
}

export const Tabs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Массив объектов вкладок
  const tabs: Tab[] = [
    {url: '', label: 'Основные сведения'},
    {url: 'gallery', label: 'Галерея'},
    {url: 'documents', label: 'Документы'},
    {url: 'organizations', label: 'Организации'},
    {url: 'stages-of-implementation', label: 'Этапы реализации'},
  ];

  return (
    <nav className="sticky top-0 shadow-md bg-white">
      <div className="container mx-auto px-4">
        {/* Десктопное меню */}
        <div className="hidden md:flex justify-between items-center py-3 text-gray-500">
          {tabs.map((tab) => (
            <NavLink
              key={tab.url}
              to={tab.url}
              className={({isActive}) =>
                isActive ? "text-blue-500 font-medium flex-1 text-center" : "hover:text-blue-500 transition flex-1 text-center"
              }
              end
            >
              {tab.label}
            </NavLink>
          ))}
        </div>

        {/* Мобильная панель с кнопкой меню */}
        <div className="md:hidden flex justify-between items-center py-3">
          <span className="flex-1 text-center text-sm font-medium text-gray-700">
            {isMenuOpen ? 'Навигация' : 'Меню'}
          </span>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 text-gray-700">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.url}
                  to={tab.url}
                  className={({isActive}) =>
                    isActive
                      ? "text-blue-500 font-medium"
                      : "hover:text-blue-500 transition"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {tab.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
