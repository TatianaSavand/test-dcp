import { Home, ChevronRight, ChevronLeft } from 'lucide-react';
import logo from '/src/assets/letter-e-svgrepo-com.svg';
import React, { useState } from 'react';
import { NavLink, type To } from 'react-router';

/**
 * Тип для элементов навигационного меню (вкладок)
 *
 * @property {To} url - путь маршрута (поддерживает строку или объект)
 * @property {string} label - текст метки вкладки
 * @property {React.ComponentType} icon - иконка вкладки с поддержкой size и className
 */
interface Tab {
  url: To;
  label: string;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
}

/**
 * Компонент Sidebar реализует боковое навигационное меню.
 *
 * Позволяет пользователю переключаться между разделами приложения,
 * а также сворачивать/разворачивать меню для экономии пространства.
 */
export const Sidebar = () => {
  // Состояние для управления свёрнутым/развёрнутым состоянием меню
  const [isExpanded, setIsExpanded] = useState(false);

  // Набор навигационных вкладок
  const tabs: Tab[] = [
    {
      icon: Home,
      url: 'project-card',
      label: 'Проекты строительства',
    },
  ];

  return (
    <div
      className={`h-screen bg-gradient-to-t from-blue-950 to-fuchsia-900 text-white transition-all duration-300 ${
        isExpanded ? 'w-32' : 'w-16'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Кнопка сворачивания/разворачивания меню */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`absolute p-1 rounded-r-md bg-fuchsia-900 hover:bg-slate-600 ${
            isExpanded ? 'left-32' : 'left-16'
          }`}
          aria-label={isExpanded ? 'Свернуть меню' : 'Развернуть меню'}
        >
          {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        {/* Логотип и название системы */}
        <NavLink key="/" to="/" className="flex items-center pt-4 flex-col">
          <img
            src={logo}
            alt="Логотип"
            className="h-8 w-8 object-contain mx-auto"
          />

          {/* Название системы (отображается только если меню развёрнуто) */}
          {isExpanded && (
            <div className="py-2 px-4 text-center">
              <h1 className="text-xs">Цифровой строительный паспорт</h1>
            </div>
          )}
        </NavLink>

        {/* Основная навигация */}
        <nav className="flex-grow mt-4 space-y-2 px-2">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;

            return (
              <NavLink
                key={tab.url.toString()}
                to={tab.url}
                className={({ isActive }) =>
                  `block p-3 hover:bg-slate-100/40 transition-colors rounded-md text-center ${
                    isActive ? 'bg-slate-100/20 font-medium' : ''
                  }`
                }
              >
                <div className="flex flex-col items-center">
                  <IconComponent size={20} />
                  {isExpanded && <span className="mt-2 text-xs">{tab.label}</span>}
                </div>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};