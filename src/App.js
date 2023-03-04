import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./pages/Menu.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Routers>
        <Navbar/>
          <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Menu/>} path="/menu"/>
            <Route element={<About/>} path="/about"/>
            <Route element={<Contact/>} path="/contact"/>
          </Routes>
          <Footer/>
      </Routers>
    </div>
  );
}

export default App;
