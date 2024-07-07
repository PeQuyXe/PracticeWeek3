import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const Contact = lazy(() => import("./routes/Contact"));
const Profile = lazy(() => import("./routes/Profile"));
const Dashboard = lazy(() => import("./routes/Dashboard"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4">
            <li>
              <NavLink className="text-white" to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white" to="/profile/johndoe">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink className="text-white" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
        <ErrorBoundary>
          <Suspense
            fallback={<div className="text-center mt-10">Loading...</div>}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
