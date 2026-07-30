import {
  Bell,
  AlertTriangle,
  ShieldAlert,
  Activity
} from "lucide-react";

import KPICard from "../components/KPICard";
import TrendChart from "../components/TrendChart";
import PriorityChart from "../components/PriorityChart";
import AlarmTable from "../components/AlarmTable";
import NotificationPanel from "../components/NotificationPanel";
import Footer from "../components/Footer";

export default function Dashboard() {

  return (

    <div className="space-y-6">

      {/* ===================================================== */}
      {/* Dashboard Header */}
      {/* ===================================================== */}

      <div>

        <h1 className="text-3xl font-bold">

          Control Centre Dashboard

        </h1>

        <p className="text-gray-500 mt-1">

          Live monitoring of alarms, network events and operational status.

        </p>

      </div>

      {/* ===================================================== */}
      {/* KPI Cards */}
      {/* ===================================================== */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <KPICard

          title="Active Alarms"

          value="124"

          subtitle="Currently active alarms"

          color="text-red-600"

          icon={<Bell className="text-red-600" />}

        />

        <KPICard

          title="Critical"

          value="11"

          subtitle="Immediate attention required"

          color="text-red-700"

          icon={<AlertTriangle className="text-red-700" />}

        />

        <KPICard

          title="Major"

          value="36"

          subtitle="High priority events"

          color="text-orange-600"

          icon={<ShieldAlert className="text-orange-600" />}

        />

        <KPICard

          title="Minor"

          value="77"

          subtitle="Low operational impact"

          color="text-yellow-600"

          icon={<Activity className="text-yellow-600" />}

        />

      </div>

      {/* ===================================================== */}
      {/* Charts */}
      {/* ===================================================== */}

      <div className="grid xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">

          <TrendChart />

        </div>

        <PriorityChart />

      </div>

      {/* ===================================================== */}
      {/* System Health + Notifications */}
      {/* ===================================================== */}

      <div className="grid xl:grid-cols-3 gap-6">

        {/* System Health */}

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

              <span>Last Update</span>

              <span>

                Just Now

              </span>

            </div>

          </div>

        </div>

        {/* Notifications */}

        <div className="xl:col-span-2">

          <NotificationPanel />

        </div>

      </div>

      {/* ===================================================== */}
      {/* Live Alarm Table */}
      {/* ===================================================== */}

      <AlarmTable />

      {/* ===================================================== */}
      {/* Footer */}
      {/* ===================================================== */}

      <Footer />

    </div>

  );

}