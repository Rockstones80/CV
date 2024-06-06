import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import Template from "./components/pages/Template";
import Tabulio from "./components/pages/Tabulio";
import About from "./components/pages/About";
import Login from "../src/components/auth/Login";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="template" element={<Template />} />
        <Route path="join" element={<Tabulio />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
