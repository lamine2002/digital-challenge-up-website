import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
                    <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-full p-2">
                            <MountainIcon className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-bold text-lg">Digital Challenge Up</span>
                    </div>
                    <nav className="flex space-x-4">
                        <Link to="" className="text-sm hover:underline">
                            Home
                        </Link>
                        <Link to="" className="text-sm hover:underline">
                            Challenges
                        </Link>
                        <Link to="" className="text-sm hover:underline">
                            About
                        </Link>
                        <Link to="" className="text-sm hover:underline">
                            Gallery
                        </Link>
                        <Link to="" className="text-sm hover:underline">
                            Testimonials
                        </Link>
                    </nav>
                </div>
                <div className="mt-8 text-center text-sm text-gray-400">
                    © 2024 Digital Challenge Up. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
export default Footer;
