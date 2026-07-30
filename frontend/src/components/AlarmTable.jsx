/*
==========================================================
Alarm Table Component

Future Backend API

GET /api/alarms/live

Source:
SCADA Historian / Utility Data Warehouse

This component displays the latest alarms
received from the SCADA system.
==========================================================
*/

const alarms = [

  {
    id: 1,
    time: "09:31:22",
    substation: "Embakasi",
    equipment: "Transformer T2",
    alarm: "Oil Temperature High",
    priority: "Critical",
    status: "Unacknowledged"
  },

  {
    id: 2,
    time: "09:27:11",
    substation: "Rabai",
    equipment: "Circuit Breaker CB12",
    alarm: "Breaker Open",
    priority: "Major",
    status: "Acknowledged"
  },

  {
    id: 3,
    time: "09:21:47",
    substation: "Kisumu",
    equipment: "Protection Relay",
    alarm: "Communication Failure",
    priority: "Minor",
    status: "Acknowledged"
  },

  {
    id: 4,
    time: "09:18:08",
    substation: "Lessos",
    equipment: "Busbar",
    alarm: "Voltage Low",
    priority: "Major",
    status: "Unacknowledged"
  },

  {
    id: 5,
    time: "09:11:42",
    substation: "Olkaria",
    equipment: "Battery Charger",
    alarm: "DC Supply Failure",
    priority: "Critical",
    status: "Unacknowledged"
  }

];

function priorityColor(priority) {

  switch (priority) {

    case "Critical":
      return "bg-red-100 text-red-700";

    case "Major":
      return "bg-orange-100 text-orange-700";

    case "Minor":
      return "bg-yellow-100 text-yellow-700";

    default:
      return "bg-gray-100 text-gray-700";

  }

}

function statusColor(status) {

  return status === "Acknowledged"

    ? "text-green-600"

    : "text-red-600";

}

export default function AlarmTable() {

  return (

    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center p-5 border-b">

        <div>

          <h2 className="text-xl font-bold">

            Live Alarm List

          </h2>

          <p className="text-sm text-gray-500">

            Latest alarms received from the SCADA system.

          </p>

        </div>

        <button

          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg"

        >

          View All

        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">Time</th>

              <th className="text-left p-4">Substation</th>

              <th className="text-left p-4">Equipment</th>

              <th className="text-left p-4">Alarm</th>

              <th className="text-left p-4">Priority</th>

              <th className="text-left p-4">Status</th>

            </tr>

          </thead>

          <tbody>

            {

              alarms.map((alarm) => (

                <tr

                  key={alarm.id}

                  className="border-b hover:bg-green-50 transition"

                >

                  <td className="p-4">

                    {alarm.time}

                  </td>

                  <td className="p-4">

                    {alarm.substation}

                  </td>

                  <td className="p-4">

                    {alarm.equipment}

                  </td>

                  <td className="p-4">

                    {alarm.alarm}

                  </td>

                  <td className="p-4">

                    <span

                      className={`px-3 py-1 rounded-full text-sm font-semibold ${priorityColor(alarm.priority)}`}

                    >

                      {alarm.priority}

                    </span>

                  </td>

                  <td className={`p-4 font-semibold ${statusColor(alarm.status)}`}>

                    {alarm.status}

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