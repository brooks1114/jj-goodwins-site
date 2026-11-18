import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
// Daily Specials, Happy Hour and Gallery are hidden for now (out of date).
// To restore one: uncomment its import and route below, remove its redirect,
// and uncomment its link in Navbar.js.
// import DailySpecials from "./pages/DailySpecials";
// import HappyHour from "./pages/HappyHour";
import About from "./pages/About";
// import Gallery from "./pages/Gallery"; // Hidden for now (see note above).
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import EmploymentApplication from "./pages/EmploymentApplication"; // <-- NEW

export default function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            {/* <Route path="/daily-specials" element={<DailySpecials />} /> */}
            {/* <Route path="/happy-hour" element={<HappyHour />} /> */}
            <Route path="/daily-specials" element={<Navigate to="/menu" replace />} />
            <Route path="/happy-hour" element={<Navigate to="/menu" replace />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/gallery" element={<Navigate to="/" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/employment-application"
              element={<EmploymentApplication />} // <-- NEW
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
