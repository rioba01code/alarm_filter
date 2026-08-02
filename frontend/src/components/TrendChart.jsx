import { useDashboard } from "../context/DashboardContext";

export default function TrendChart() {

  const { dashboard } = useDashboard();

  const hourlyData = dashboard?.trendData || [];

  const maxValue =

    hourlyData.length > 0

      ? Math.max(...hourlyData.map(item => item.alarms))

      : 1;

  return (

    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="mb-6">

        <h2 className="text-xl font-bold">

          Alarm Trend

        </h2>

        <p className="text-sm text-gray-500">

          Hourly alarm activity from the SCADA network.

        </p>

      </div>

      {

        hourlyData.length === 0 && (

          <div className="text-center py-12 text-gray-400">

            Upload a SCADA alarm file to display alarm trends.

          </div>

        )

      }

      {

        hourlyData.length > 0 && (

          <div className="space-y-5">

            {

              hourlyData.map((item) => (

                <div key={item.time}>

                  <div className="flex justify-between mb-1 text-sm">

                    <span className="font-medium">

                      {new Date(item.time).toLocaleTimeString([], {

                        hour: "2-digit",

                        minute: "2-digit"

                      })}

                    </span>

                    <span className="font-semibold text-green-700">

                      {item.alarms} alarms

                    </span>

                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">

                    <div

                      className="bg-green-700 h-3 rounded-full transition-all duration-700"

                      style={{

                        width: `${(item.alarms / maxValue) * 100}%`

                      }}

                    />

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