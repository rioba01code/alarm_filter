import {
  Search,
  Bell,
  Sun,
  Moon,
  Database,
  Server,
  UserCircle,
  Wifi
} from "lucide-react";

export default function Topbar({

  darkMode,

  setDarkMode

}) {

  const now = new Date();

  return (

    <header

      className={`

      h-20

      px-8

      flex

      items-center

      justify-between

      border-b

      shadow-sm

      transition-all

      duration-300

      ${

        darkMode

        ? "bg-slate-900 border-slate-700 text-white"

        : "bg-white border-gray-200 text-slate-900"

      }

      `}

    >

      {/* Left */}

      <div>

        <h1 className="text-2xl font-bold">

          KPLC SCADA Alarm Platform

        </h1>

        <p className="text-sm text-gray-500">

          National Control Centre

        </p>

      </div>

      {/* Middle */}

      <div

        className={`

        hidden

        lg:flex

        items-center

        rounded-xl

        px-4

        py-2

        w-80

        ${

          darkMode

          ? "bg-slate-800"

          : "bg-slate-100"

        }

        `}

      >

        <Search size={18}/>

        <input

          className="bg-transparent outline-none ml-3 w-full"

          placeholder="Search alarms..."

        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Historian */}

        <div className="hidden xl:flex items-center gap-2">

          <Database

            size={18}

            className="text-green-600"

          />

          <span className="text-sm">

            Historian Online

          </span>

        </div>

        {/* Database */}

        <div className="hidden xl:flex items-center gap-2">

          <Server

            size={18}

            className="text-green-600"

          />

          <span className="text-sm">

            Database Connected

          </span>

        </div>

        {/* Communication */}

        <Wifi

          className="text-green-600"

          size={20}

        />

        {/* Notification */}

        <div className="relative">

          <Bell size={22}/>

          <span

            className="absolute

            -top-2

            -right-2

            bg-red-600

            text-white

            text-xs

            rounded-full

            h-5

            w-5

            flex

            items-center

            justify-center"

          >

            8

          </span>

        </div>

        {/* Theme */}

        <button

          onClick={() =>

            setDarkMode(!darkMode)

          }

        >

          {

            darkMode

            ?

            <Sun/>

            :

            <Moon/>

          }

        </button>

        {/* Operator */}

        <div className="flex items-center gap-3">

          <UserCircle

            size={38}

            className="text-green-700"

          />

          <div className="hidden lg:block">

            <p className="font-semibold">

              System Operator

            </p>

            <p className="text-xs text-gray-500">

              {now.toLocaleString()}

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}