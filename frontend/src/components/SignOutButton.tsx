import { useMutation, useQueryClient } from "react-query";
import * as apiClient from '../api-client';
import { useAppContext } from "../context/AppContext";

const SignOutButton = () => {
    const queryClient = useQueryClient();
    const { showToast, setIsLoggedIn } = useAppContext();

    const mutation = useMutation(apiClient.SignOut, {
        onSuccess: async () => {
            await queryClient.invalidateQueries("validateToken");
            setIsLoggedIn(false);  
            localStorage.setItem("isLoggedIn", JSON.stringify(false));
            showToast({ message: "SignOut Success", type: "SUCCESS" });
        },
        onError: (error: Error) => {
            showToast({ message: error.message, type: "ERROR" });
        }
    });

    const handleClick = () => {
        mutation.mutate();
    };

    return (
        <button onClick={handleClick} className="text-[#FFD670] px-3 font-bold bg-white hover:bg-gray-100">
            Sign out
        </button>
    );
};

export default SignOutButton;
