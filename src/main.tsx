import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import {DashBoard} from "./pages/Dashboard.page.tsx";
import {GalleryPage} from "./pages/Gallery.page.tsx";
import {OrganizationsPage} from "./pages/Organizations.page.tsx";
import {DocumentsPage} from "./pages/Documents.page.tsx";
import {StagesOfImplementationPage} from "./pages/StagesOfImplementation.page.tsx";
import {ProjectCardPage} from "./pages/ProjectCard.page.tsx";
import {LandingPage} from "./pages/Landing.page.tsx";


const projectData = {
  'Строительный адрес': 'ул. Гжатская, вл. 9',
  'Вид работ': 'Новое строительство',
  'Источник финансирования': 'Внебюджетные источники',
  'Срок начала строительства': {
    'Плановый': '13.11.2017',
    'Фактический': '13.11.2017',
  },
  'Срок завершения строительства': {
    'Плановый': '14.09.2020',
    'Фактический': '14.09.2020',
  },
  'Срок ввода': {
    'Плановый': 'Декабрь 2021',
    'Фактический': '28.10.2020',
  },
  'Основное функциональное назначение': '010 - Многоквартирный дом\n010 001 - Многоквартирный многоквартирный дом\n010 001 001 - Многоквартирный многоквартирный дом',
  'Дополнительное функциональное назначение': '004 - Торгово-бытовые объекты\n008 001 001 - Дошкольная образовательная организация\n014 001 005 - Подземная стоянка',
  'Реновация': 'Да',
  'Объект ввода': 'Да',
  'Программа': 'Нет данных',
  'Подпрограмма': 'Нет данных',
  'Экономическое направление': 'Нет данных',
  'Состояние площадки': 'Нет данных',
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="/project-card" element={<DashBoard/>}>
            <Route index element={<ProjectCardPage data={projectData}/>}/>
            <Route path="gallery" element={<GalleryPage/>}/>
            <Route path="organizations" element={<OrganizationsPage/>}/>
            <Route path="documents" element={<DocumentsPage/>}/>
            <Route path="stages-of-implementation" element={<StagesOfImplementationPage/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
