import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home"
import Template from "./components/pages/Template";
import Tabulio from "./components/pages/Tabulio";
import About from "./components/pages/About";
import Login from "../src/components/auth/Login";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools"
import { Suspense } from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  // const queryClient = new QueryClient()


  return (
    <BrowserRouter>
    <Suspense fallback={<div> Loading...</div>}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="template" element={<Template />} />
        <Route path="join" element={<Tabulio />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        </Routes>

    </Suspense>
       <ToastContainer /> 
    </BrowserRouter>

     
  );
};

export default App;
