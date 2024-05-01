import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { Button, Container } from "@mui/material";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
