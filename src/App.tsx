import { Sidebar } from './components/Sidebar';
import { Outlet } from 'react-router';

/**
 * Корневой компонент App реализует общую обёртку приложения.
 *
 * Содержит:
 * - Боковое меню (Sidebar)
 * - Область динамического контента (Outlet)
 */
function App() {
  return (
    <div className="flex w-screen bg-slate-100">
      {/* Боковая панель навигации */}
      <div className="flex-none w-16 z-50">
        <Sidebar />
      </div>

      {/* Основная область контента (рендерится react-router) */}
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}

export default App;