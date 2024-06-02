import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const events = [
    {
        id: "conference-ia",
        title: "Conférence sur l'IA",
        description: "Explorez les dernières avancées de l'intelligence artificielle.",
        date: "15 juin 2023",
        time: "14h00 - 17h00",
        details:
            "Cette conférence se concentrera sur les dernières avancées de l'intelligence artificielle et ses applications dans divers domaines. Les participants auront l'opportunité d'échanger avec des experts du secteur et de découvrir les tendances émergentes.",
        image: "/placeholder.svg",
    },
    {
        id: "atelier-web",
        title: "Atelier de développement web",
        description: "Apprenez les meilleures pratiques de développement web.",
        date: "20 juin 2023",
        time: "09h00 - 12h00",
        details:
            "Cet atelier pratique vous aidera à améliorer vos compétences en développement web. Vous apprendrez les meilleures pratiques, les outils les plus récents et les techniques de pointe pour créer des applications web performantes et évolutives.",
        image: "/placeholder.svg",
    },
    {
        id: "seminaire-entrepreneuriat",
        title: "Séminaire sur l'entrepreneuriat",
        description: "Découvrez les clés pour réussir votre projet d'entreprise.",
        date: "25 juin 2023",
        time: "10h00 - 16h00",
        details:
            "Ce séminaire abordera les différents aspects de l'entrepreneuriat, de la conception de votre idée d'entreprise à la gestion de votre startup. Vous aurez l'occasion d'échanger avec des entrepreneurs expérimentés et de découvrir les meilleures stratégies pour réussir votre projet.",
        image: "/placeholder.svg",
    },
];

export default function EvenementsConferences() {
    return (
        <div className="w-full">
            {/* Section des événements */}
        <Header />
            <section className="bg-[#F5F5F5] dark:bg-[#1A1A1A] py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#FF6B6B]">Programme</h2>
                            <p className="text-[#6B7280] dark:text-[#A0A0A0] text-lg">
                                Découvrez les événements et conférences à venir
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {events.map(event => (
                                <div key={event.id} className="bg-white dark:bg-[#262626] rounded-lg shadow-md overflow-hidden">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2 text-[#FF6B6B]">{event.title}</h3>
                                        <p className="text-[#6B7280] dark:text-[#A0A0A0] mb-4">{event.description}</p>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-2">
                                                <CalendarIcon className="w-5 h-5 text-[#6B7280] dark:text-[#A0A0A0]" />
                                                <span className="text-[#6B7280] dark:text-[#A0A0A0]">{event.date}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <ClockIcon className="w-5 h-5 text-[#6B7280] dark:text-[#A0A0A0]" />
                                                <span className="text-[#6B7280] dark:text-[#A0A0A0]">{event.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section des détails des événements */}
            <section className="bg-white dark:bg-[#262626] py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#FF6B6B]">Détails des Événements</h2>
                            <p className="text-[#6B7280] dark:text-[#A0A0A0] text-lg">
                                Découvrez les informations détaillées sur chaque événement
                            </p>
                        </div>
                        <div className="grid gap-8">
                            {events.map(event => (
                                <div key={event.id} className="bg-[#F5F5F5] dark:bg-[#1A1A1A] rounded-lg shadow-md overflow-hidden">
                                    <div className="grid md:grid-cols-2">
                                        <div className="p-6">
                                            <h3 className="text-2xl font-semibold mb-4 text-[#FF6B6B]">{event.title}</h3>
                                            <p className="text-[#6B7280] dark:text-[#A0A0A0] mb-6">{event.details}</p>
                                            <div className="flex items-center space-x-4">
                                                <div className="flex items-center space-x-2">
                                                    <CalendarIcon className="w-5 h-5 text-[#6B7280] dark:text-[#A0A0A0]" />
                                                    <span className="text-[#6B7280] dark:text-[#A0A0A0]">{event.date}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <ClockIcon className="w-5 h-5 text-[#6B7280] dark:text-[#A0A0A0]" />
                                                    <span className="text-[#6B7280] dark:text-[#A0A0A0]">{event.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Formulaire d'inscription */}
            <section className="bg-[#F5F5F5] dark:bg-[#1A1A1A] py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#FF6B6B]">
                                Inscrivez-vous aux événements
                            </h2>
                            <p className="text-[#6B7280] dark:text-[#A0A0A0] text-lg">
                                Remplissez le formulaire ci-dessous pour vous inscrire
                            </p>
                        </div>
                        <form className="bg-white dark:bg-[#262626] rounded-lg shadow-md p-6 md:p-8">
                            <div className="grid gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Nom
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Entrez votre nom"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Entrez votre email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="event" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Événement
                                    </label>
                                    <select
                                        id="event"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm"
                                    >
                                        <option value="">Sélectionnez un événement</option>
                                        {events.map(event => (
                                            <option key={event.id} value={event.id}>
                                                {event.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Entrez votre message"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white sm:text-sm"
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-[#FF6B6B] text-white font-semibold rounded-md shadow-md hover:bg-[#FF4C4C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B]"
                                    >
                                        S'inscrire
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function CalendarIcon(props) {
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
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    );
}

function ClockIcon(props) {
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
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}
