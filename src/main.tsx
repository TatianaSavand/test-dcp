import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import {DashBoard} from "./pages/Dashboard.page.tsx";
import {DocumentsPage} from "./pages/Documents.page.tsx";
import {LandingPage} from "./pages/Landing.page.tsx";
import GalleryPage from "./pages/Gallery.page.tsx";
import ProjectCardPage from "./pages/ProjectCard.page.tsx";
import {OrganizationsPage} from "./pages/Organizations.page.tsx";


/**
 * Точка входа в приложение
 *
 * Используется react-router для организации маршрутов,
 * включая вложенную структуру страниц внутри Dashboard.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Основной маршрут с обёрткой App */}
        <Route path="/" element={<App />}>
          {/* Главная страница */}
          <Route index element={<LandingPage />} />

          {/* Проектная карточка */}
          <Route path="project-card" element={<DashBoard />}>
            {/* Главная страница проекта */}
            <Route index element={<ProjectCardPage />} />

            {/* Галерея изображений */}
            <Route path="gallery" element={<GalleryPage columns={4} />} />

            {/* Управление организациями */}
            <Route path="organizations" element={<OrganizationsPage />} />

            {/* Работа с документами */}
            <Route path="documents" element={<DocumentsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);