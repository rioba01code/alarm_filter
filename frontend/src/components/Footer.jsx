/*
==========================================================

Application Footer

Future Version:
The version number and build information
will be supplied by the backend.

==========================================================
*/

export default function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer

      className="

      bg-white

      rounded-2xl

      shadow-md

      px-6

      py-5

      mt-6

      "

    >

      <div

        className="

        flex

        flex-col

        md:flex-row

        justify-between

        items-center

        gap-3

        "

      >

        {/* Left */}

        <div>

          <h3 className="font-semibold text-slate-800">

            KPLC SCADA Alarm Management Platform

          </h3>

          <p className="text-sm text-gray-500">

            Real-time monitoring and management of electrical network alarms.

          </p>

        </div>

        {/* Right */}

        <div className="text-sm text-gray-500 text-center md:text-right">

          <p>

            Version 1.0.0

          </p>

          <p>

            © {year} Kenya Power and Lighting Company

          </p>

        </div>

      </div>

    </footer>

  );

}