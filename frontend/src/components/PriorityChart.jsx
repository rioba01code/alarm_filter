import { useDashboard } from "../context/DashboardContext";

export default function PriorityChart() {

  const { dashboard } = useDashboard();

  const alarms = dashboard?.priorityDistribution || [];

  const colors = {

    Critical: "bg-red-600",

    Major: "bg-orange-500",

    Minor: "bg-yellow-400",

    Warning: "bg-blue-500"

  };

  const total = alarms.reduce(

    (sum, item) => sum + item.value,

    0

  );

  return (

    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="mb-6">

        <h2 className="text-xl font-bold">

          Alarm Priority Distribution

        </h2>

        <p className="text-sm text-gray-500">

          Current operational alarm breakdown.

        </p>

      </div>

      <div className="space-y-5">

        {

          alarms.map((alarm) => (

            <div key={alarm.name}>

              <div className="flex justify-between mb-2">

                <span className="font-medium">

                  {alarm.name}

                </span>

                <span className="font-bold">

                  {alarm.value}

                </span>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">

                <div

                  className={`${colors[alarm.name] || "bg-gray-500"} h-3 rounded-full transition-all duration-700`}

                  style={{

                    width:

                      total === 0

                        ? "0%"

                        : `${(alarm.value / total) * 100}%`

                  }}

                />

              </div>

            </div>

          ))

        }

      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">

        {

          alarms.map((alarm) => (

            <div

              key={alarm.name}

              className="rounded-xl bg-gray-50 p-4"

            >

              <p className="text-sm text-gray-500">

                {alarm.name}

              </p>

              <h3 className="text-2xl font-bold">

                {alarm.value}

              </h3>

            </div>

          ))

        }

      </div>

    </div>

  );

}