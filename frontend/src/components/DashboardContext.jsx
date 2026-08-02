import {
    createContext,
    useContext,
    useState
} from "react";


const DashboardContext = createContext();


export function DashboardProvider({children}) {


    const [dashboard,setDashboard] = useState(null);

    const [loading,setLoading] = useState(false);

    const [error,setError] = useState(null);



    const updateDashboard = (data)=>{

        setDashboard(data);

    };


    return (

        <DashboardContext.Provider

            value={{

                dashboard,

                loading,

                error,

                setLoading,

                setError,

                updateDashboard

            }}

        >

            {children}

        </DashboardContext.Provider>

    );

}



export function useDashboard(){

    return useContext(DashboardContext);

}