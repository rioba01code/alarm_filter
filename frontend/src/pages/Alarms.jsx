import AlarmTable from "../components/AlarmTable";

export default function Alarms() {

  return (

    <div className="space-y-6">

      {/* ====================================================== */}
      {/* Page Header */}
      {/* ====================================================== */}

      <div>

        <h1 className="text-3xl font-bold">

          Live Alarm Monitoring

        </h1>

        <p className="text-gray-500 mt-1">

          View, monitor and acknowledge alarms received from the SCADA Historian.

        </p>

      </div>

      {/* ====================================================== */}
      {/* Statistics */}
      {/* ====================================================== */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            Total Active

          </p>

          <h2 className="text-3xl font-bold text-red-600">

            124

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            Critical

          </p>

          <h2 className="text-3xl font-bold text-red-700">

            11

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            Major

          </p>

          <h2 className="text-3xl font-bold text-orange-600">

            36

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow-md p-5">

          <p className="text-gray-500 text-sm">

            Minor

          </p>

          <h2 className="text-3xl font-bold text-yellow-600">

            77

          </h2>

        </div>

      </div>

      {/* ====================================================== */}
      {/* Filters */}
      {/* ====================================================== */}

      <div className="bg-white rounded-xl shadow-md p-5">

        <div className="grid md:grid-cols-4 gap-4">

          <input

            type="text"

            placeholder="Search equipment..."

            className="border rounded-lg p-3"

          />

          <select className="border rounded-lg p-3">

            <option>All Priorities</option>
            <option>Critical</option>
            <option>Major</option>
            <option>Minor</option>

          </select>

          <select className="border rounded-lg p-3">

            <option>All Substations</option>
            <option>Embakasi</option>
            <option>Rabai</option>
            <option>Kisumu</option>
            <option>Lessos</option>

          </select>

          <button

            className="bg-green-700 text-white rounded-lg"

          >

            Apply Filter

          </button>

        </div>

      </div>

      {/* ====================================================== */}
      {/* Alarm Table */}
      {/* ====================================================== */}

      <AlarmTable />

    </div>

  );

}