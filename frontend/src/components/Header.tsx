import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="bg-blue-500 p-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-2xl text-white font-bold tracking-tight font-serif">
                    <Link to="/">JOYHOLIDAY🌻☀️🏚️</Link>
                </span>
                <span className="flex space-x-2">
                    <Link to="/sign-up" className="flex items-center bg-white text-blue-500 px-3 cursor-pointer font-bold rounded-md hover:bg-white-300 hover:text-blue-300">Sign up</Link>
                </span>
            </div>
        </div>
    )
}

export default Header