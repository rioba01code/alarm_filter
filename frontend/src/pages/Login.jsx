import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User, ShieldCheck } from "lucide-react";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      setError("");

      navigate("/dashboard");

    } else {

      setError("Invalid username or password");

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center">

      <div className="bg-white rounded-2xl shadow-2xl w-[430px] p-10">

        <div className="flex justify-center mb-5">
          <ShieldCheck size={55} className="text-green-700" />
        </div>

        <h1 className="text-3xl font-bold text-center text-green-700">

          SCADA Alarm Platform

        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">

          Control Centre Login

        </p>

        <form onSubmit={handleLogin}>

          <div className="mb-5">

            <label className="font-semibold">

              Username

            </label>

            <div className="flex items-center border rounded-lg mt-2">

              <User className="ml-3 text-gray-500" size={18} />

              <input

                value={username}

                onChange={(e) => setUsername(e.target.value)}

                className="w-full p-3 outline-none"

                placeholder="Enter username"

              />

            </div>

          </div>

          <div className="mb-5">

            <label className="font-semibold">

              Password

            </label>

            <div className="flex items-center border rounded-lg mt-2">

              <Lock className="ml-3 text-gray-500" size={18} />

              <input

                type="password"

                value={password}

                onChange={(e) => setPassword(e.target.value)}

                className="w-full p-3 outline-none"

                placeholder="Enter password"

              />

            </div>

          </div>

          {error && (

            <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg p-3 mb-5 text-sm">

              {error}

            </div>

          )}

          <button

            type="submit"

            className="w-full bg-green-700 hover:bg-green-800 text-white p-3 rounded-lg font-semibold transition"

          >

            Login

          </button>

        </form>

        <div className="mt-8 border-t pt-5 text-sm text-gray-500">

          <p className="font-semibold">

            Demo Credentials

          </p>

          <p>

            Username: <b>admin</b>

          </p>

          <p>

            Password: <b>admin123</b>

          </p>

        </div>

      </div>

    </div>

  );

}