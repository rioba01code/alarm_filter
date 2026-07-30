import api from "./axios";

export const getDashboard = () => api.get("/dashboard");

export const getAlarms = () => api.get("/alarms");

export const getReports = () => api.get("/reports");

export const getIncidents = () => api.get("/incidents");

export const getAlarmTrends = () => api.get("/alarm-trends");