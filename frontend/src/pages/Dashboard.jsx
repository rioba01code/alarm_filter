import {
  Bell,
  AlertTriangle,
  ShieldAlert,
  Activity
} from "lucide-react";

import UploadAlarm from "../components/UploadAlarm";
import KPICard from "../components/KPICard";
import TrendChart from "../components/TrendChart";
import PriorityChart from "../components/PriorityChart";
import AlarmTable from "../components/AlarmTable";
import NotificationPanel from "../components/NotificationPanel";
import AIRecommendation from "../components/AIRecommendation";
import Footer from "../components/Footer";

import { useDashboard } from "../context/DashboardContext";

export default function Dashboard() {

  const {

    dashboard,

    loading,

    error

  } = useDashboard();

  const summary = dashboard?.summary || {};

  return (

    <div className="space-y-6">

      {/* ================================================= */}
      {/* Dashboard Header */}
      {/* ================================================= */}

      <div>

        <h1 className="text-3xl font-bold">

          SCADA Alarm Intelligence Platform

        </h1>

        <p className="text-gray-500 mt-1">

          Intelligent alarm filtering, correlation, incident management and operational decision support.

        </p>

      </div>

      {/* ================================================= */}
      {/* Upload */}
      {/* ================================================= */}

      <UploadAlarm />

      {/* ================================================= */}
      {/* Loading */}
      {/* ================================================= */}

      {

        loading && (

          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">

            Processing SCADA alarms...

          </div>

        )

      }

      {/* ================================================= */}
      {/* Error */}
      {/* ================================================= */}

      {

        error && (

          <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-red-700">

            {error}

          </div>

        )

      }

      {/* ================================================= */}
      {/* KPI Cards */}
      {/* ================================================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <KPICard

          title="Total Alarms"

          value={summary.totalAlarms ?? 0}

          subtitle="Processed alarms"

          color="text-blue-600"

          icon={<Bell className="text-blue-600" />}

        />

        <KPICard

          title="Critical"

          value={summary.critical ?? 0}

          subtitle="Immediate attention required"

          color="text-red-700"

          icon={<AlertTriangle className="text-red-700" />}

        />

        <KPICard

          title="Incidents"

          value={summary.incidents ?? 0}

          subtitle="Generated incidents"

          color="text-orange-600"

          icon={<ShieldAlert className="text-orange-600" />}

        />

        <KPICard

          title="Alarm Floods"

          value={summary.alarmFloods ?? 0}

          subtitle="Flood events detected"

          color="text-purple-600"

          icon={<Activity className="text-purple-600" />}

        />

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
      {/* System Health */}
      {/* ================================================= */}

      <div className="grid xl:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-xl font-bold mb-5">

            System Health

          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>SCADA Server</span>

              <span className="text-green-600 font-semibold">

                ● Online

              </span>

            </div>

            <div className="flex justify-between">

              <span>Historian</span>

              <span className="text-green-600 font-semibold">

                ● Connected

              </span>

            </div>

            <div className="flex justify-between">

              <span>Database</span>

              <span className="text-green-600 font-semibold">

                ● Connected

              </span>

            </div>

            <div className="flex justify-between">

              <span>Communication</span>

              <span className="text-green-600 font-semibold">

                ● Healthy

              </span>

            </div>

            <div className="flex justify-between">

              <span>AI Engine</span>

              <span className="text-green-600 font-semibold">

                ● Running

              </span>

            </div>

            <div className="flex justify-between">

              <span>API Status</span>

              <span className="text-green-600 font-semibold">

                ● Active

              </span>

            </div>

            <div className="flex justify-between">

              <span>Processing Time</span>

              <span>

                {summary.processingTime ?? "--"} s

              </span>

            </div>

          </div>

        </div>

        <div className="xl:col-span-2">

          <NotificationPanel />

        </div>

      </div>

      {/* ================================================= */}
      {/* Alarm Table */}
      {/* ================================================= */}

      <AlarmTable />

      {/* ================================================= */}
      {/* AI Recommendations */}
      {/* ================================================= */}

      <AIRecommendation />

      {/* ================================================= */}
      {/* Footer */}
      {/* ================================================= */}

      <Footer />

    </div>

  );

}