import {
  AlertTriangle,
  Bell,
  CheckCircle,
  Wrench,
  Radio
} from "lucide-react";

/*
==========================================================

Notification Panel

Future Backend API

GET /api/dashboard/notifications

Source:
SCADA Historian
Utility Data Warehouse

Purpose:
Display the latest operational events
requiring operator awareness.

==========================================================
*/

const notifications = [

  {
    id: 1,
    icon: <AlertTriangle className="text-red-600" />,
    title: "Critical Alarm",
    message: "Transformer T2 oil temperature exceeded safe limit.",
    time: "2 min ago"
  },

  {
    id: 2,
    icon: <Bell className="text-orange-500" />,
    title: "Breaker Status",
    message: "Circuit Breaker CB12 changed to OPEN state.",
    time: "6 min ago"
  },

  {
    id: 3,
    icon: <CheckCircle className="text-green-600" />,
    title: "Alarm Acknowledged",
    message: "Operator acknowledged communication failure.",
    time: "12 min ago"
  },

  {
    id: 4,
    icon: <Radio className="text-blue-600" />,
    title: "Communication Restored",
    message: "RTU communication restored successfully.",
    time: "20 min ago"
  },

  {
    id: 5,
    icon: <Wrench className="text-purple-600" />,
    title: "Maintenance Reminder",
    message: "Scheduled maintenance due for Transformer T1.",
    time: "35 min ago"
  }

];

export default function NotificationPanel() {

  return (

    <div className="bg-white rounded-2xl shadow-md">

      {/* Header */}

      <div className="border-b px-6 py-4">

        <h2 className="text-xl font-bold">

          Notifications

        </h2>

        <p className="text-sm text-gray-500">

          Latest operational events.

        </p>

      </div>

      {/* Notification List */}

      <div className="divide-y">

        {

          notifications.map((item) => (

            <div

              key={item.id}

              className="flex gap-4 px-6 py-5 hover:bg-gray-50 transition"

            >

              <div>

                {item.icon}

              </div>

              <div className="flex-1">

                <h3 className="font-semibold">

                  {item.title}

                </h3>

                <p className="text-gray-500 text-sm mt-1">

                  {item.message}

                </p>

              </div>

              <div className="text-xs text-gray-400 whitespace-nowrap">

                {item.time}

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}