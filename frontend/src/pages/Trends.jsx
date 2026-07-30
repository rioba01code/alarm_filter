import TrendChart from "../components/TrendChart";
import PriorityChart from "../components/PriorityChart";

/*
==========================================================

Alarm Trends & Analytics

Future Backend APIs

GET /api/trends/hourly
GET /api/trends/daily
GET /api/trends/monthly
GET /api/trends/substations

Source:
SCADA Historian
Utility Data Warehouse

==========================================================
*/

export default function Trends() {

  return (

    <div className="space-y-6">

      {/* ================================================= */}
      {/* Header */}
      {/* ================================================= */}

      <div>

        <h1 className="text-3xl font-bold">

          Alarm Trends & Analytics

        </h1>

        <p className="text-gray-500 mt-1">

          Analyse historical alarm behaviour across the transmission network.

        </p>

      </div>

      {/* ================================================= */}
      {/* Summary Cards */}
      {/* ================================================= */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500">

            Today's Alarms

          </p>

          <h2 className="text-3xl font-bold text-red-600">

            124

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500">

            Weekly Total

          </p>

          <h2 className="text-3xl font-bold text-orange-600">

            642

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500">

            Monthly Total

          </p>

          <h2 className="text-3xl font-bold text-blue-600">

            2,184

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500">

            Most Active Station

          </p>

          <h2 className="text-2xl font-bold text-green-700">

            Embakasi

          </h2>

        </div>

      </div>

      {/* ================================================= */}
      {/* Charts */}
      {/* ================================================= */}

      <div className="grid xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">

          <TrendChart />

        </div>

        <PriorityChart />

      </div>

      {/* ================================================= */}
      {/* Analytics */}
      {/* ================================================= */}

      <div className="bg-white rounded-xl shadow-md">

        <div className="border-b p-5">

          <h2 className="text-xl font-bold">

            Alarm Analysis Summary

          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6 p-6">

          <div>

            <h3 className="font-semibold mb-2">

              Highest Alarm Source

            </h3>

            <p className="text-gray-600">

              Transformer protection systems contributed the highest number of alarms during the selected period.

            </p>

          </div>

          <div>

            <h3 className="font-semibold mb-2">

              Frequent Equipment

            </h3>

            <p className="text-gray-600">

              Transformer T2 and Circuit Breaker CB12 generated repeated alarms requiring investigation.

            </p>

          </div>

          <div>

            <h3 className="font-semibold mb-2">

              Network Observation

            </h3>

            <p className="text-gray-600">

              Communication alarms reduced compared to the previous reporting period.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}