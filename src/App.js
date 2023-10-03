import "./App.css";
import Contact from "./component/Contact/Contact";
import Details from "./component/Films/Details/Details";
import Main from "./component/Films/Main";
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<h1>News</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/details/:title" element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;
