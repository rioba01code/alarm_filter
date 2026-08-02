export default function Historian() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Historian
        </h1>

        <p className="text-gray-500 mt-2">
          Historical SCADA alarm records, trends and archived events.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">

        <h2 className="text-xl font-semibold mb-4">
          Alarm History
        </h2>

        <div className="border-2 border-dashed rounded-xl p-12 text-center text-gray-500">

          Historical alarms from the SCADA Historian will appear here.

        </div>

      </div>

    </div>
  );
}