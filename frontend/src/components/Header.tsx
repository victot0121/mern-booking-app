// import { Link } from "react-router-dom";
// import { useAppContext } from "../context/AppContext";
// import SignOutButton from "./SignOutButton";

// const Header = () => {
//     const { isLoggedIn } = useAppContext();

//     return (
//         <div className="bg-[#FFD670] p-6">
//             <div className="container mx-auto flex justify-between">
//                 <span className="text-2xl text-[#373F51] font-bold tracking-tight font-Danfo">
//                     <Link to="/">JOYHOLIDAY🌻☀️🏚️</Link>
//                 </span>
//                 <span className="flex space-x-2">
//                     {isLoggedIn ? (
//                         <>
//                             <Link to="/my-booking">My Booking</Link>
//                             <Link to="/my-hotels">My Hotels</Link>
//                             <SignOutButton />
//                         </>
//                     ) : (
//                             <Link to="/register" className="flex items-center bg-white text-[#FFD670] px-3 cursor-pointer font-Lora font-bold rounded-md hover:bg-white-300 hover:text-blue-300">
//                                 Sign up
//                             </Link>
//                     )}
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default Header;


import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
    const { isLoggedIn } = useAppContext();

    return (
        <div className="bg-[#FFD670] p-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-2xl text-[#373F51] font-bold tracking-tight font-Danfo">
                    <Link to="/">JOYHOLIDAY🌻☀️🏚️</Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn ? (
                        <>
                            <Link to="/my-booking">My Booking</Link>
                            <Link to="/my-hotels">My Hotels</Link>
                            <SignOutButton />
                        </>
                    ) : (
                        <Link to="/register" className="flex items-center bg-white text-[#FFD670] px-3 cursor-pointer font-Lora font-bold rounded-md hover:bg-white-300 hover:text-blue-300">
                            Sign up
                        </Link>
                    )}
                </span>
            </div>
        </div>
    );
};

export default Header;
