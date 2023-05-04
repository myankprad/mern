import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/contat" Component={Contact} />
        <Route path="/login" element={Login} />
      </Routes>
    </>
  );
}

export default App;
