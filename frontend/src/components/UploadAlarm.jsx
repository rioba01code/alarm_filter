import { useState } from "react";

import { Upload } from "lucide-react";

import { uploadAlarmFile } from "../api/alarmApi";

import { useDashboard } from "../context/DashboardContext";

export default function UploadAlarm() {

    const [file, setFile] = useState(null);

    const {

        setDashboard,

        setLoading,

        setError

    } = useDashboard();

    async function handleUpload() {

        if (!file) {

            alert("Please select a SCADA alarm file.");

            return;

        }

        try {

            setLoading(true);

            setError(null);

            const dashboard = await uploadAlarmFile(file);

            setDashboard(dashboard);

            alert("Alarm file uploaded successfully.");

        }

        catch (err) {

            console.error(err);

            setError(err.message);

            alert("Upload failed.");

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">

                Upload SCADA Alarm File

            </h2>

            <div className="flex gap-4">

                <input

                    type="file"

                    accept=".csv,.xlsx,.xls"

                    onChange={(e) => setFile(e.target.files[0])}

                    className="border rounded-lg p-2 flex-1"

                />

                <button

                    onClick={handleUpload}

                    className="bg-green-700 text-white px-5 rounded-lg flex items-center gap-2"

                >

                    <Upload size={18} />

                    Upload

                </button>

            </div>

        </div>

    );

}