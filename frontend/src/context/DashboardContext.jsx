import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    return (

        <DashboardContext.Provider

            value={{

                dashboard,

                setDashboard,

                loading,

                setLoading,

                error,

                setError

            }}

        >

            {children}

        </DashboardContext.Provider>

    );

}

export function useDashboard() {

    return useContext(DashboardContext);

}