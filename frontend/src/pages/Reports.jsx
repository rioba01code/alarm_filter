import {
  FileText,
  Download,
  Calendar,
  BarChart3
} from "lucide-react";

/*
==========================================================

Reports Page

Future Backend API

GET /api/reports

Purpose:
Generate and export operational reports
from SCADA Historian and Utility Data Warehouse.

==========================================================
*/

const reports = [

  {
    title: "Daily Alarm Report",
    description: "Summary of alarms generated during the last 24 hours.",
    icon: <Calendar className="text-green-700" />
  },

  {
    title: "Weekly Alarm Analysis",
    description: "Alarm statistics and operational trends for the week.",
    icon: <BarChart3 className="text-blue-600" />
  },

  {
    title: "Monthly Equipment Report",
    description: "Equipment alarm frequency and reliability analysis.",
    icon: <FileText className="text-orange-600" />
  },

  {
    title: "Incident Resolution Report",
    description: "Summary of resolved and pending incidents.",
    icon: <FileText className="text-red-600" />
  }

];

export default function Reports() {

  return (

    <div className="space-y-6">

      {/* ================================================== */}
      {/* Header */}
      {/* ================================================== */}

      <div>

        <h1 className="text-3xl font-bold">

          Reports

        </h1>

        <p className="text-gray-500 mt-1">

          Generate operational reports and export historical data.

        </p>

      </div>

      {/* ================================================== */}
      {/* Statistics */}
      {/* ================================================== */}

      <div className="grid md:grid-cols-4 gap-5">

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            Reports Generated

          </p>

          <h2 className="text-3xl font-bold text-green-700">

            214

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            Today's Reports

          </p>

          <h2 className="text-3xl font-bold text-blue-600">

            18

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            Scheduled Reports

          </p>

          <h2 className="text-3xl font-bold text-orange-600">

            7

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            Export Queue

          </p>

          <h2 className="text-3xl font-bold text-purple-600">

            2

          </h2>

        </div>

      </div>

      {/* ================================================== */}
      {/* Report Cards */}
      {/* ================================================== */}

      <div className="grid lg:grid-cols-2 gap-6">

        {

          reports.map((report) => (

            <div

              key={report.title}

              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"

            >

              <div className="flex items-center gap-4">

                <div className="bg-gray-100 p-3 rounded-xl">

                  {report.icon}

                </div>

                <div>

                  <h2 className="text-lg font-semibold">

                    {report.title}

                  </h2>

                  <p className="text-gray-500 text-sm mt-1">

                    {report.description}

                  </p>

                </div>

              </div>

              <div className="flex gap-3 mt-6">

                <button

                  className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg"

                >

                  <Download size={18} />

                  Export PDF

                </button>

                <button

                  className="flex items-center gap-2 border border-green-700 text-green-700 hover:bg-green-50 px-4 py-2 rounded-lg"

                >

                  <Download size={18} />

                  Export Excel

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}