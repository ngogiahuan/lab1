import "./App.css";
import Contact from "./component/Contact/Contact";
import Main from "./component/Films/Main";
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import News from "./component/News/News";
import About from "./component/About/About";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
