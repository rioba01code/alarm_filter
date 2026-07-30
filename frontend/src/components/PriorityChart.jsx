export default function PriorityChart() {

  const alarms = [

    {
      name: "Critical",
      value: 11,
      color: "bg-red-600"
    },

    {
      name: "Major",
      value: 36,
      color: "bg-orange-500"
    },

    {
      name: "Minor",
      value: 77,
      color: "bg-yellow-400"
    },

    {
      name: "Acknowledged",
      value: 45,
      color: "bg-green-600"
    }

  ];

  const total = alarms.reduce((sum, item) => sum + item.value, 0);

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

        {alarms.map((alarm) => (

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
                className={`${alarm.color} h-3 rounded-full transition-all duration-700`}
                style={{
                  width: `${(alarm.value / total) * 100}%`
                }}
              />

            </div>

          </div>

        ))}

      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="rounded-xl bg-red-50 p-4">

          <p className="text-sm text-gray-500">
            Critical
          </p>

          <h3 className="text-2xl font-bold text-red-600">
            11
          </h3>

        </div>

        <div className="rounded-xl bg-orange-50 p-4">

          <p className="text-sm text-gray-500">
            Major
          </p>

          <h3 className="text-2xl font-bold text-orange-600">
            36
          </h3>

        </div>

        <div className="rounded-xl bg-yellow-50 p-4">

          <p className="text-sm text-gray-500">
            Minor
          </p>

          <h3 className="text-2xl font-bold text-yellow-600">
            77
          </h3>

        </div>

        <div className="rounded-xl bg-green-50 p-4">

          <p className="text-sm text-gray-500">
            Acknowledged
          </p>

          <h3 className="text-2xl font-bold text-green-700">
            45
          </h3>

        </div>

      </div>

    </div>

  );

}