
import { Link } from "react-router-dom"
import { useAppContext } from "../context/AppContext"

const Header = () => {
    const { isLoggedIn } = useAppContext()

    return (
        <div className="bg-blue-500 p-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-2xl text-white font-bold tracking-tight font-Danfo">
                    <Link to="/">JOYHOLIDAY🌻☀️🏚️</Link>
                </span>
                <span className="flex space-x-2">
                    {!isLoggedIn ? <>

                        <Link to="/register" className="flex items-center bg-white text-blue-500 px-3 cursor-pointer font-Lora font-bold rounded-md hover:bg-white-300 hover:text-blue-300">
                            Sign up
                        </Link>
                    </> : <>

                        <Link to="/my-booking">My Booking</Link>
                        <Link to="my-hotels">My Hotels</Link>
                        <button>Sign out</button>

                    </>}

                </span>
            </div>
        </div>
    )
}

export default Header