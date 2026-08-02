import {
  AlertTriangle,
  ShieldAlert,
  CheckCircle,
  Bell
} from "lucide-react";

import { useDashboard } from "../context/DashboardContext";

function icon(priority) {

  switch (priority) {

    case "Critical":
      return <AlertTriangle className="text-red-600" />;

    case "Major":
      return <ShieldAlert className="text-orange-600" />;

    case "Minor":
      return <Bell className="text-yellow-600" />;

    default:
      return <CheckCircle className="text-green-600" />;

  }

}

export default function NotificationPanel() {

  const { dashboard } = useDashboard();

  const incidents = dashboard?.incidents || [];

  return (

    <div className="bg-white rounded-2xl shadow-md">

      {/* ======================================= */}
      {/* Header */}
      {/* ======================================= */}

      <div className="border-b px-6 py-4">

        <h2 className="text-xl font-bold">

          Active Incidents

        </h2>

        <p className="text-sm text-gray-500">

          Generated automatically by the Alarm Intelligence Engine.

        </p>

      </div>

      {/* ======================================= */}
      {/* Empty State */}
      {/* ======================================= */}

      {

        incidents.length === 0 && (

          <div className="text-center py-16 text-gray-400">

            No incidents detected.

          </div>

        )

      }

      {/* ======================================= */}
      {/* Incident List */}
      {/* ======================================= */}

      {

        incidents.length > 0 && (

          <div className="divide-y">

            {

              incidents.map((incident, index) => (

                <div

                  key={index}

                  className="flex gap-4 px-6 py-5 hover:bg-gray-50 transition"

                >

                  <div>

                    {icon(incident.Priority)}

                  </div>

                  <div className="flex-1">

                    <h3 className="font-semibold">

                      {incident.Alarm}

                    </h3>

                    <p className="text-gray-500 text-sm mt-1">

                      Assigned to <b>{incident.Team}</b>

                    </p>

                  </div>

                  <div>

                    <span

                      className={`px-3 py-1 rounded-full text-xs font-semibold ${

                        incident.Status === "Open"

                          ? "bg-red-100 text-red-700"

                          : "bg-green-100 text-green-700"

                      }`}

                    >

                      {incident.Status}

                    </span>

                  </div>

                </div>

              ))

            }

          </div>

        )

      }

    </div>

  );

}