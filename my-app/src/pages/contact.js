import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Contact() {
  return (
    <Router>
    <div>
      <main>
        <h1>Contact Me</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /><br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /><br />
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows="4" required></textarea><br />
          <input type="submit" value="Submit" />
        </form>
      </main>
      <footer>
        <nav className="bottom-nav">
          <ul>
          <li>
                <Link to="/my-app/public/index.html">Home</Link>
              </li>
              <li>
                <Link to="/my-app/src/pages/cv">CV</Link>
              </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/my-app/public/index.html" element={<Home />} />
          <Route path="/my-app/src/pages/cv.js" element={<CV />} />
        </Routes>
      </footer>
    </div>
    </Router>
  );
}


