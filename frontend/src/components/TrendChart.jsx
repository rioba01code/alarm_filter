export default function TrendChart() {
  const hourlyData = [
    { hour: "08:00", alarms: 18 },
    { hour: "09:00", alarms: 32 },
    { hour: "10:00", alarms: 27 },
    { hour: "11:00", alarms: 40 },
    { hour: "12:00", alarms: 24 },
    { hour: "13:00", alarms: 35 },
    { hour: "14:00", alarms: 21 },
    { hour: "15:00", alarms: 30 }
  ];

  const maxValue = Math.max(...hourlyData.map(item => item.alarms));

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

      <div className="space-y-5">

        {hourlyData.map((item) => (

          <div key={item.hour}>

            <div className="flex justify-between mb-1 text-sm">

              <span className="font-medium">
                {item.hour}
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

        ))}

      </div>

    </div>
  );
}