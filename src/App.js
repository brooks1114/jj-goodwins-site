import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import DailySpecials from "./pages/DailySpecials";
import HappyHour from "./pages/HappyHour";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router basename="/"> {/* Changed from /jj-goodwins-site */}
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/daily-specials" element={<DailySpecials />} />
            <Route path="/happy-hour" element={<HappyHour />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="text-center p-8">404 - Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}