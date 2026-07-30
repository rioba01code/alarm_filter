/*
==========================================================
KPI Card Component

Reusable dashboard card.

Future Data Source:

GET /api/dashboard/summary

This component only displays data passed through props.
==========================================================
*/

export default function KPICard({

  title,

  value,

  subtitle,

  icon,

  color

}) {

  return (

    <div

      className="

      bg-white

      rounded-2xl

      shadow-md

      p-6

      transition-all

      duration-300

      hover:shadow-xl

      hover:-translate-y-1

      "

    >

      {/* Top Row */}

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">

            {title}

          </p>

          <h2

            className={`

            text-4xl

            font-bold

            mt-2

            ${color}

            `}

          >

            {value}

          </h2>

        </div>

        <div

          className="

          h-14

          w-14

          rounded-xl

          bg-green-100

          flex

          items-center

          justify-center

          "

        >

          {icon}

        </div>

      </div>

      {/* Bottom */}

      <p

        className="

        mt-5

        text-sm

        text-gray-500

        "

      >

        {subtitle}

      </p>

    </div>

  );

}