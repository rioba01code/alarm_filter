import {
  Database,
  Server,
  Bell,
  Moon,
  Shield,
  Save
} from "lucide-react";

/*
==========================================================

System Settings

Future Backend APIs

GET  /api/settings
PUT  /api/settings

Purpose:
Manage application configuration,
system preferences and integrations.

==========================================================
*/

export default function Settings() {

  return (

    <div className="space-y-6">

      {/* =============================================== */}
      {/* Header */}
      {/* =============================================== */}

      <div>

        <h1 className="text-3xl font-bold">

          System Settings

        </h1>

        <p className="text-gray-500 mt-1">

          Configure application preferences and platform settings.

        </p>

      </div>

      {/* =============================================== */}
      {/* Settings Grid */}
      {/* =============================================== */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* SCADA */}

        <div className="bg-white rounded-xl shadow-md p-6">

          <div className="flex items-center gap-3 mb-5">

            <Server className="text-green-700"/>

            <h2 className="text-xl font-bold">

              SCADA Connection

            </h2>

          </div>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Connection Status</span>

              <span className="text-green-600 font-semibold">

                Connected

              </span>

            </div>

            <div className="flex justify-between">

              <span>Refresh Interval</span>

              <span>

                5 Seconds

              </span>

            </div>

          </div>

        </div>

        {/* Database */}

        <div className="bg-white rounded-xl shadow-md p-6">

          <div className="flex items-center gap-3 mb-5">

            <Database className="text-blue-600"/>

            <h2 className="text-xl font-bold">

              Database

            </h2>

          </div>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Status</span>

              <span className="text-green-600 font-semibold">

                Connected

              </span>

            </div>

            <div className="flex justify-between">

              <span>Historian</span>

              <span>

                Available

              </span>

            </div>

          </div>

        </div>

        {/* Notifications */}

        <div className="bg-white rounded-xl shadow-md p-6">

          <div className="flex items-center gap-3 mb-5">

            <Bell className="text-orange-500"/>

            <h2 className="text-xl font-bold">

              Notifications

            </h2>

          </div>

          <div className="space-y-4">

            <label className="flex justify-between">

              <span>Email Alerts</span>

              <input type="checkbox" defaultChecked/>

            </label>

            <label className="flex justify-between">

              <span>Critical Alarm Alerts</span>

              <input type="checkbox" defaultChecked/>

            </label>

            <label className="flex justify-between">

              <span>SMS Alerts</span>

              <input type="checkbox"/>

            </label>

          </div>

        </div>

        {/* Appearance */}

        <div className="bg-white rounded-xl shadow-md p-6">

          <div className="flex items-center gap-3 mb-5">

            <Moon className="text-indigo-600"/>

            <h2 className="text-xl font-bold">

              Appearance

            </h2>

          </div>

          <div className="space-y-4">

            <label className="flex justify-between">

              <span>Dark Mode</span>

              <input type="checkbox"/>

            </label>

            <label className="flex justify-between">

              <span>Compact Layout</span>

              <input type="checkbox"/>

            </label>

          </div>

        </div>

      </div>

      {/* =============================================== */}
      {/* Security */}
      {/* =============================================== */}

      <div className="bg-white rounded-xl shadow-md p-6">

        <div className="flex items-center gap-3 mb-5">

          <Shield className="text-red-600"/>

          <h2 className="text-xl font-bold">

            Security

          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div>

            <p className="text-gray-500">

              User Authentication

            </p>

            <h3 className="font-semibold mt-2">

              Enabled

            </h3>

          </div>

          <div>

            <p className="text-gray-500">

              Audit Logging

            </p>

            <h3 className="font-semibold mt-2">

              Enabled

            </h3>

          </div>

          <div>

            <p className="text-gray-500">

              Role Management

            </p>

            <h3 className="font-semibold mt-2">

              Active

            </h3>

          </div>

        </div>

      </div>

      {/* =============================================== */}
      {/* Save */}
      {/* =============================================== */}

      <div className="flex justify-end">

        <button

          className="

          bg-green-700

          hover:bg-green-800

          text-white

          px-6

          py-3

          rounded-xl

          flex

          items-center

          gap-2

          "

        >

          <Save size={18}/>

          Save Settings

        </button>

      </div>

    </div>

  );

}