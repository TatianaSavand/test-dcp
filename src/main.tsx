import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import {MainPage} from "./pages/Main.page.tsx";
import {GalleryPage} from "./pages/Gallery.page.tsx";
import {OrganizationsPage} from "./pages/Organizations.page.tsx";
import {DocumentsPage} from "./pages/Documents.page.tsx";
import {StagesOfImplementationPage} from "./pages/StagesOfImplementation.page.tsx";
import {MainInformationPage} from "./pages/MainInformation.page.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/main" element={<MainPage/>}>
            <Route path="/main/main-information" element={<MainInformationPage/>}/>
            <Route path="/main/gallery" element={<GalleryPage/>}/>
            <Route path="/main/organizations" element={<OrganizationsPage/>}/>
            <Route path="/main/documents" element={<DocumentsPage/>}/>
            <Route path="/main/stages-of-implementation" element={<StagesOfImplementationPage/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
