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
import {MainInformationPage} from "./pages/MainInformation.page.tsx";
import {LandingPage} from "./pages/Landing.page.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<LandingPage/>}/>
          <Route path="/main" element={<DashBoard/>}>
            <Route index element={<MainInformationPage/>}/>
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
