import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function MainLayout() {

  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (

    <div
      className={`

      flex

      min-h-screen

      transition-all

      duration-300

      ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-slate-900"
      }

      `}
    >

      <Sidebar

        collapsed={collapsed}
        setCollapsed={setCollapsed}
        darkMode={darkMode}

      />

      <div className="flex flex-col flex-1">

        <Topbar

          darkMode={darkMode}
          setDarkMode={setDarkMode}

        />

        <main className="flex-1 p-6 overflow-auto">

          <Outlet />

        </main>

      </div>

    </div>

  );

}