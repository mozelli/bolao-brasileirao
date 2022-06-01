import { Route, Routes, BrowserRouter } from "react-router-dom";

import Splash from './pages/Splash';

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Bet from "./pages/Bet";
import Confirmation from './pages/Confirmation';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Splash /> } />
        <Route path="home" element={ <MainLayout /> }>
          <Route index element={ <Home /> } />
        </Route>
        <Route path="bet" element={ <MainLayout /> }>
          <Route path=":match" element={ <Bet /> } />
          <Route path="confirmation" element={ <Confirmation /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;