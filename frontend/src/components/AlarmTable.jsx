import { useDashboard } from "../context/DashboardContext";

function priorityColor(priority) {

  switch (priority) {

    case "Critical":
      return "bg-red-100 text-red-700";

    case "Major":
      return "bg-orange-100 text-orange-700";

    case "Minor":
      return "bg-yellow-100 text-yellow-700";

    case "Warning":
      return "bg-blue-100 text-blue-700";

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

  const { dashboard } = useDashboard();

  const alarms = dashboard?.alarmTable || [];

  return (

    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      {/* ============================================ */}
      {/* Header */}
      {/* ============================================ */}

      <div className="flex justify-between items-center p-5 border-b">

        <div>

          <h2 className="text-xl font-bold">

            Live Alarm List

          </h2>

          <p className="text-sm text-gray-500">

            Latest processed alarms from the SCADA platform.

          </p>

        </div>

        <div className="text-sm text-gray-500">

          {alarms.length} alarms

        </div>

      </div>

      {/* ============================================ */}
      {/* Empty State */}
      {/* ============================================ */}

      {

        alarms.length === 0 && (

          <div className="text-center py-16 text-gray-400">

            Upload a SCADA alarm file to display alarms.

          </div>

        )

      }

      {/* ============================================ */}
      {/* Alarm Table */}
      {/* ============================================ */}

      {

        alarms.length > 0 && (

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-4">Time</th>

                  <th className="text-left p-4">Station</th>

                  <th className="text-left p-4">Device</th>

                  <th className="text-left p-4">Alarm</th>

                  <th className="text-left p-4">Priority</th>

                  <th className="text-left p-4">Category</th>

                  <th className="text-left p-4">Assigned Team</th>

                  <th className="text-left p-4">Status</th>

                  <th className="text-left p-4">Suppressed</th>

                </tr>

              </thead>

              <tbody>

                {

                  alarms.map((alarm, index) => (

                    <tr

                      key={index}

                      className="border-b hover:bg-green-50 transition"

                    >

                      <td className="p-4">

                        {alarm.Timestamp}

                      </td>

                      <td className="p-4">

                        {alarm.Station}

                      </td>

                      <td className="p-4">

                        {alarm.Device}

                      </td>

                      <td className="p-4">

                        {alarm.Alarm}

                      </td>

                      <td className="p-4">

                        <span

                          className={`px-3 py-1 rounded-full text-sm font-semibold ${priorityColor(alarm.Priority)}`}

                        >

                          {alarm.Priority}

                        </span>

                      </td>

                      <td className="p-4">

                        {alarm.Category}

                      </td>

                      <td className="p-4">

                        {alarm["Assigned Team"]}

                      </td>

                      <td

                        className={`p-4 font-semibold ${statusColor(alarm.Status)}`}

                      >

                        {alarm.Status}

                      </td>

                      <td className="p-4">

                        {

                          alarm.Suppressed

                            ? "✅"

                            : "—"

                        }

                      </td>

                    </tr>

                  ))

                }

              </tbody>

            </table>

          </div>

        )

      }

    </div>

  );

}