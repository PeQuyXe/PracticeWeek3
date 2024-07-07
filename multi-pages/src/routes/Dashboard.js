import React from "react";
import { Routes, Route, Link, useMatch } from "react-router-dom";

const Overview = () => <div className="p-4">Overview</div>;
const Settings = () => <div className="p-4">Settings</div>;

const Dashboard = () => {
  const match = useMatch("/dashboard/*");

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <ul className="flex space-x-4 mb-4">
        <li>
          <Link className="text-blue-500" to={`${match.pathnameBase}/overview`}>
            Overview
          </Link>
        </li>
        <li>
          <Link className="text-blue-500" to={`${match.pathnameBase}/settings`}>
            Settings
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="overview" element={<Overview />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
