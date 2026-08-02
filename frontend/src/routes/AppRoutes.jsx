import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Alarms from "../pages/Alarms";
import Trends from "../pages/Trends";
import Incidents from "../pages/Incidents";
import Reports from "../pages/Reports";
import Users from "../pages/Users";
import Settings from "../pages/Settings";
import Historian from "../pages/Historian";

import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route element={<MainLayout />}>

                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/alarms" element={<Alarms />} />

                    <Route path="/trends" element={<Trends />} />

                    <Route path="/incidents" element={<Incidents />} />

                    <Route path="/historian" element={<Historian />} />

                    <Route path="/reports" element={<Reports />} />

                    <Route path="/users" element={<Users />} />

                    <Route path="/settings" element={<Settings />} />

                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>

        </BrowserRouter>

    );

}