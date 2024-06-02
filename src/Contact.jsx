import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Contact() {
    return (
        <div>
        <Header />
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-6 py-12 md:py-20 my-12">

            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Contactez-nous</h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Vous avez une question ou une idée de défi ? N'hésitez pas à nous contacter !
                        </p>
                    </div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom</label>
                                <input id="name" type="text" placeholder="Entrez votre nom" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <input id="email" type="email" placeholder="Entrez votre email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                            <textarea id="message" placeholder="Écrivez votre message" className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-[150px] focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Envoyer
                        </button>
                    </form>
                </div>
                <div className="bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Digital Challenge Up</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Une marque dynamique et innovante spécialisée dans l'organisation de défis numériques et de compétitions
                                créatives.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <MapPinIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                                <p className="text-gray-700 dark:text-gray-300">123 Rue des Innovateurs, 75000 Paris</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <PhoneIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                                <p className="text-gray-700 dark:text-gray-300">01 23 45 67 89</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MailIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                                <p className="text-gray-700 dark:text-gray-300">contact@digitalchallenge-up.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-50 animate-pulse" />
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500 rounded-full blur-3xl opacity-50 animate-pulse" />
                    </div>
                </div>
            </div>


        </div>
            <Footer />
        </div>
    )
}

function MailIcon(props) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}


function MapPinIcon(props) {
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
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}


function PhoneIcon(props) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}
