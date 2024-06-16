// import React, { useContext, useState } from "react";
// import Toast from "../components/Toast";
// import { useQuery } from "react-query";
// import * as apiClient from "../api-client";

// type ToastMessage = {
//     message: string;
//     type: "SUCCESS" | "ERROR";
// };

// type AppContext = {
//     showToast: (toastMessage: ToastMessage) => void;
//     isLoggedIn: boolean;
// };

// const AppContext = React.createContext<AppContext | undefined>(undefined);

// export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
//     const [toast, setToast] = useState<ToastMessage | undefined>(undefined);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useQuery("validateToken", apiClient.validateToken, {
//         retry: false,
//         onSuccess: () => {
//             setIsLoggedIn(true);
//         },
//         onError: () => {
//             setIsLoggedIn(false);
//         },
//     });

//     return (
//         <AppContext.Provider value={{
//             showToast: (toastMessage) => setToast(toastMessage),
//             isLoggedIn,
//         }}>
//             {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(undefined)} />}
//             {children}
//         </AppContext.Provider>
//     );
// };

// export const useAppContext = () => {
//     const context = useContext(AppContext);
//     if (!context) {
//         throw new Error("useAppContext must be used within an AppContextProvider");
//     }
//     return context;
// };


import React, { useContext, useState, useEffect } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

type ToastMessage = {
    message: string;
    type: "SUCCESS" | "ERROR";
};

type AppContext = {
    showToast: (toastMessage: ToastMessage) => void;
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [toast, setToast] = useState<ToastMessage | undefined>(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { isLoading } = useQuery("validateToken", apiClient.validateToken, {
        retry: false,
        onSuccess: () => {
            console.log("Token is valid, user is logged in");
            setIsLoggedIn(true);
        },
        onError: (error) => {
            console.error("Token validation error:", error);
            setIsLoggedIn(false);
        },
    });

    useEffect(() => {
        console.log("isLoading:", isLoading);
        console.log("isLoggedIn:", isLoggedIn);
    }, [isLoading, isLoggedIn]);

    return (
        <AppContext.Provider value={{
            showToast: (toastMessage) => setToast(toastMessage),
            isLoggedIn,
            setIsLoggedIn,
        }}>
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(undefined)} />}
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};



