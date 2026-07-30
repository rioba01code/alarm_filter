import {
  AlertTriangle,
  Clock,
  CheckCircle,
  Wrench
} from "lucide-react";

/*
==========================================================

Incident Management Page

Future Backend API

GET /api/incidents

Source:
Incident Management Database

==========================================================
*/

const incidents = [

  {
    id: "INC-2026-001",
    title: "Transformer T2 High Oil Temperature",
    location: "Embakasi Substation",
    priority: "Critical",
    engineer: "Eng. Kamau",
    status: "Open",
    opened: "08:45"
  },

  {
    id: "INC-2026-002",
    title: "Breaker CB12 Failed to Close",
    location: "Rabai Substation",
    priority: "Major",
    engineer: "Eng. Amina",
    status: "In Progress",
    opened: "09:05"
  },

  {
    id: "INC-2026-003",
    title: "RTU Communication Failure",
    location: "Kisumu Substation",
    priority: "Minor",
    engineer: "Eng. Otieno",
    status: "Resolved",
    opened: "09:15"
  }

];

function priorityColor(priority) {

  switch (priority) {

    case "Critical":
      return "bg-red-100 text-red-700";

    case "Major":
      return "bg-orange-100 text-orange-700";

    default:
      return "bg-yellow-100 text-yellow-700";

  }

}

function statusIcon(status) {

  if (status === "Open")

    return <AlertTriangle size={18} className="text-red-600" />;

  if (status === "In Progress")

    return <Clock size={18} className="text-orange-600" />;

  return <CheckCircle size={18} className="text-green-600" />;

}

export default function Incidents() {

  return (

    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">

          Incident Management

        </h1>

        <p className="text-gray-500 mt-1">

          Track operational incidents raised from SCADA alarms.

        </p>

      </div>

      {/* Summary */}

      <div className="grid md:grid-cols-4 gap-5">

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            Open Incidents

          </p>

          <h2 className="text-3xl font-bold text-red-600">

            8

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            In Progress

          </p>

          <h2 className="text-3xl font-bold text-orange-600">

            5

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            Resolved Today

          </p>

          <h2 className="text-3xl font-bold text-green-600">

            17

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            Engineers On Duty

          </p>

          <h2 className="text-3xl font-bold text-blue-600">

            12

          </h2>

        </div>

      </div>

      {/* Incident List */}

      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <div className="border-b p-5">

          <h2 className="text-xl font-bold">

            Active Incidents

          </h2>

        </div>

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">Incident</th>

              <th className="p-4 text-left">Location</th>

              <th className="p-4 text-left">Priority</th>

              <th className="p-4 text-left">Engineer</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-left">Opened</th>

            </tr>

          </thead>

          <tbody>

            {

              incidents.map((incident) => (

                <tr

                  key={incident.id}

                  className="border-b hover:bg-green-50"

                >

                  <td className="p-4">

                    <div>

                      <p className="font-semibold">

                        {incident.id}

                      </p>

                      <p className="text-sm text-gray-500">

                        {incident.title}

                      </p>

                    </div>

                  </td>

                  <td className="p-4">

                    {incident.location}

                  </td>

                  <td className="p-4">

                    <span

                      className={`px-3 py-1 rounded-full text-sm ${priorityColor(incident.priority)}`}

                    >

                      {incident.priority}

                    </span>

                  </td>

                  <td className="p-4">

                    {incident.engineer}

                  </td>

                  <td className="p-4">

                    <div className="flex items-center gap-2">

                      {statusIcon(incident.status)}

                      {incident.status}

                    </div>

                  </td>

                  <td className="p-4">

                    {incident.opened}

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </div>

  );

}