import Soon from "../components/common/Soon";
import Game from "../pages/Game";
import GameMenu from "../pages/GameMenu";
import Games from "../pages/Games";
import Home from "../pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";

const Router = () => {
 return (
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/games" element={<Games />} />
   <Route path="/game/:name/:id" element={<GameMenu />} />
   <Route path="/game/:name/:id/play" element={<Game />} />
   <Route path="/ranking" element={<Soon />} />
   <Route path="/community" element={<Soon />} />
   <Route path="*" element={<Navigate to="/" replace={true} />} />
  </Routes>
 );
}

export default Router;