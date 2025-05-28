import { HeaderProjectCard } from '../components/HeaderProjectCard';
import { Tabs } from '../components/Tabs';
import { Outlet } from 'react-router';

// Пример данных для заголовка карточки проекта
const exampleData = {
  address: 'ул. Гжатская, вл. 9',
  type: 'Жилой комплекс',
  projectId: 'HH33098-10-0001-99',
};

/**
 * Компонент DashBoard реализует основной макет страницы проекта.
 *
 * Состоит из трёх частей:
 * - Заголовок для проекта (HeaderProjectCard)
 * - Навигационное меню (Tabs)
 * - Контентная область(дети DashBoard) (рендерится через <Outlet />)
 */
export const DashBoard = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Заголовок проекта */}
      <div className="px-8 pt-4 flex-shrink-0 bg-white">
        <HeaderProjectCard {...exampleData} />
      </div>

      {/* Навигационные вкладки */}
      <div className="flex-shrink-0">
        <Tabs />
      </div>

      {/* Область контента (рендерится динамически через react-router) */}
      <div className="w-full overflow-y-auto p-4 bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
};