import {
  User,
  Shield,
  Search,
  UserPlus
} from "lucide-react";

/*
==========================================================

Users Management Page

Future Backend API

GET    /api/users
POST   /api/users
PUT    /api/users/{id}
DELETE /api/users/{id}

Purpose:
Manage operators and system users.

==========================================================
*/

const users = [

  {
    id: 1,
    name: "John Mwangi",
    role: "System Administrator",
    station: "National Control Centre",
    status: "Active"
  },

  {
    id: 2,
    name: "Faith Wanjiru",
    role: "Control Room Operator",
    station: "Embakasi Substation",
    status: "Active"
  },

  {
    id: 3,
    name: "Peter Otieno",
    role: "Maintenance Engineer",
    station: "Kisumu Substation",
    status: "Offline"
  },

  {
    id: 4,
    name: "James Kimani",
    role: "Protection Engineer",
    station: "Rabai Substation",
    status: "Active"
  }

];

export default function Users() {

  return (

    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">

          User Management

        </h1>

        <p className="text-gray-500 mt-1">

          Manage operators, engineers and system administrators.

        </p>

      </div>

      {/* Top Controls */}

      <div className="bg-white rounded-xl shadow-md p-5 flex flex-col md:flex-row gap-4 justify-between">

        <div className="flex items-center border rounded-lg px-4 flex-1">

          <Search size={18} className="text-gray-400"/>

          <input

            className="w-full p-3 outline-none"

            placeholder="Search users..."

          />

        </div>

        <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-lg flex items-center gap-2">

          <UserPlus size={18}/>

          Add User

        </button>

      </div>

      {/* Users Table */}

      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">Name</th>

              <th className="p-4 text-left">Role</th>

              <th className="p-4 text-left">Station</th>

              <th className="p-4 text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {

              users.map((user)=>(

                <tr

                  key={user.id}

                  className="border-b hover:bg-green-50"

                >

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <User className="text-green-700"/>

                      {user.name}

                    </div>

                  </td>

                  <td className="p-4">

                    <div className="flex items-center gap-2">

                      <Shield size={16}/>

                      {user.role}

                    </div>

                  </td>

                  <td className="p-4">

                    {user.station}

                  </td>

                  <td className="p-4">

                    <span

                      className={`

                      px-3

                      py-1

                      rounded-full

                      text-sm

                      font-semibold

                      ${

                        user.status==="Active"

                        ?

                        "bg-green-100 text-green-700"

                        :

                        "bg-gray-200 text-gray-700"

                      }

                      `}

                    >

                      {user.status}

                    </span>

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </div>

  );

}