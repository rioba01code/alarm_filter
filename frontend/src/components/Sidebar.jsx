import {
  LayoutDashboard,
  Bell,
  BarChart3,
  ShieldAlert,
  FileText,
  Database,
  Users,
  Settings,
  ChevronLeft,
  Menu,
  Zap
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar({
  collapsed,
  setCollapsed,
  darkMode
}) {

  // ===========================================
  // Navigation Menu
  // ===========================================

  const menuItems = [

    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard"
    },

    {
      title: "Live Alarms",
      icon: <Bell size={20} />,
      path: "/alarms"
    },

    {
      title: "Alarm Analysis",
      icon: <BarChart3 size={20} />,
      path: "/trends"
    },

    {
      title: "Incident Management",
      icon: <ShieldAlert size={20} />,
      path: "/incidents"
    },

    {
      title: "Historian",
      icon: <Database size={20} />,
      path: "/historian"
    },

    {
      title: "Reports",
      icon: <FileText size={20} />,
      path: "/reports"
    },

    {
      title: "Users",
      icon: <Users size={20} />,
      path: "/users"
    },

    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/settings"
    }

  ];

  return (

    <aside

      className={`
        ${collapsed ? "w-20" : "w-72"}
        transition-all
        duration-300
        min-h-screen
        shadow-xl
        flex
        flex-col
        ${darkMode
          ? "bg-slate-950 text-white"
          : "bg-green-900 text-white"}
      `}

    >

      {/* ===================================== */}
      {/* Logo Section */}
      {/* ===================================== */}

      <div className="border-b border-green-700 p-5">

        <div className="flex justify-between items-center">

          {!collapsed && (

            <div>

              <div className="flex items-center gap-3">

                <Zap className="text-yellow-400" />

                <div>

                  <h2 className="font-bold text-xl">

                    KPLC

                  </h2>

                  <p className="text-xs opacity-80">

                    SCADA Alarm Platform

                  </p>

                </div>

              </div>

            </div>

          )}

          <button

            onClick={() => setCollapsed(!collapsed)}

            className="hover:bg-green-700 p-2 rounded-lg"

          >

            {collapsed ? <Menu /> : <ChevronLeft />}

          </button>

        </div>

      </div>

      {/* ===================================== */}
      {/* Navigation */}
      {/* ===================================== */}

      <div className="flex-1 py-4">

        {

          menuItems.map((item) => (

            <NavLink

              key={item.title}

              to={item.path}

              className={({ isActive }) =>

                `
                flex
                items-center
                gap-4
                mx-3
                my-2
                p-3
                rounded-xl
                transition

                ${isActive
                  ? "bg-yellow-400 text-black font-semibold"
                  : "hover:bg-green-700"}

                `
              }

            >

              {item.icon}

              {!collapsed &&

                <span>

                  {item.title}

                </span>

              }

            </NavLink>

          ))

        }

      </div>

      {/* ===================================== */}
      {/* Footer */}
      {/* ===================================== */}

      <div className="border-t border-green-700 p-5">

        {!collapsed && (

          <>

            <p className="text-xs opacity-70">

              Kenya Power

            </p>

            <p className="text-xs opacity-70">

              SCADA Alarm Platform

            </p>

            <p className="text-xs mt-2">

              Version 1.0

            </p>

          </>

        )}

      </div>

    </aside>

  );

}