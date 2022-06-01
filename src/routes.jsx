import { Route, Routes, BrowserRouter } from "react-router-dom";

import Splash from './pages/Splash';

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Splash /> } />
        
        <Route path="home" element={ <MainLayout /> }>
          <Route index element={ <Home /> } />  
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default Router;