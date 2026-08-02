import api from "./axios";

export const uploadAlarmFile = async (file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(

        "/alarms/upload",

        formData,

        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

    );

    // Return ONLY the processed dashboard
    return response.data.dashboard;

};