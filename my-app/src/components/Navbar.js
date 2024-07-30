import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Router>
      <div className="navbar">
        <div className="navbar--links">
          <nav>
            <ul>
              <li>
                <Link to="/my-app/public/index.html">Home</Link>
              </li>
              <li>
                <Link to="/my-app/src/pages/cv">CV</Link>
              </li>
              <li>
                <Link to="/my-app/src/pages/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
          <Route path="/my-app/public/index.html" element={<Home />} />
          <Route path="/my-app/src/pages/cv.js" element={<CV />} />
          <Route path="/my-app/src/pages/contact.js" element={<Contact />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}
