import {Link} from "react-router-dom";

export default function Header () {
    return (
        <div>
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link to="" className="flex items-center justify-center" prefetch={false}>
                    <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-full p-2">
                        <MountainIcon className="h-6 w-6 text-white" />
                    </div>
                    <span className="sr-only">Digital Challenge Up</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        to="/"
                        className="text-sm font-medium hover:underline underline-offset-4 text-black-500"
                        prefetch={false}
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/ateliersformations"
                        className="text-sm font-medium hover:underline underline-offset-4 text-black-500"
                        prefetch={false}
                    >
                        Ateliers Et Formations
                    </Link>
                    <Link
                        to="/evenementsconferences"
                        className="text-sm font-medium hover:underline underline-offset-4 text-black-500"
                        prefetch={false}
                    >
                        Événements
                    </Link>
                    <Link
                        to="/partenariatsopportunites"
                        className="text-sm font-medium hover:underline underline-offset-4 text-black-500"
                        prefetch={false}
                    >
                        Opportunités
                    </Link>
                    <Link
                        to="/blog"
                        className="text-sm font-medium hover:underline underline-offset-4 text-black-500"
                        prefetch={false}
                    >
                        Blog
                    </Link>
                    <Link
                        to="/apropos"
                        className="text-sm font-medium hover:underline underline-offset-4 text-black-500"
                        prefetch={false}
                    >
                        A Propos
                    </Link>
                    <Link
                        to="/contact"
                        className="text-sm font-medium hover:underline underline-offset-4 text-black-500"
                        prefetch={false}
                    >
                        Contactez-Nous
                    </Link>

                </nav>
            </header>
        </div>
    )
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