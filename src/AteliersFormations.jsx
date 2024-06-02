import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function AteliersFormations() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        event: "",
        message: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="w-full">
            <Header />
            <section className="bg-[#00b894] dark:bg-[#2d3436] py-12 md:py-20 mt-8">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Ateliers et Formations</h1>
                        <p className="text-[#dfe6e9] dark:text-[#b2bec3] text-lg">
                            Découvrez notre calendrier d'ateliers et de formations pour développer vos compétences numériques.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {workshops.map((workshop, index) => (
                            <div key={index} className="bg-white dark:bg-[#2d3436] rounded-lg shadow-lg overflow-hidden">
                                <div

                                    className="h-48 md:h-64 bg-cover bg-center"
                                >
                                    <img
                                        src={workshop.image}
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className={`text-xl font-bold mb-2 text-${workshop.color}`}>
                                        {workshop.title}
                                    </h3>
                                    <p className="text-[#636e72] dark:text-[#b2bec3] mb-4">
                                        {workshop.description}
                                    </p>
                                    <div className="flex items-center mb-4">
                                        <CalendarIcon className="w-5 h-5 mr-2 text-[#636e72] dark:text-[#b2bec3]" />
                                        <span className="text-[#636e72] dark:text-[#b2bec3]">{workshop.date}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <UserIcon className="w-5 h-5 mr-2 text-[#636e72] dark:text-[#b2bec3]" />
                                        <span className="text-[#636e72] dark:text-[#b2bec3]">{workshop.host}</span>
                                    </div>
                                    <button className={`mt-4 w-full bg-${workshop.color} hover:bg-${workshop.hoverColor} text-white`}>
                                        S'inscrire
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-[#00b894] dark:bg-[#2d3436] py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Détails des ateliers et formations</h2>
                        <div className="space-y-8">
                            {workshops.map((workshop, index) => (
                                <div key={index}>
                                    <h3 className={`text-xl font-bold mb-2 text-${workshop.color}`}>{workshop.title}</h3>
                                    <p className="text-[#dfe6e9] dark:text-[#b2bec3] mb-4">{workshop.details}</p>
                                    <div className="flex items-center mb-4">
                                        <CalendarIcon className="w-5 h-5 mr-2 text-[#dfe6e9] dark:text-[#b2bec3]" />
                                        <span className="text-[#dfe6e9] dark:text-[#b2bec3]">{workshop.date}</span>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <UserIcon className="w-5 h-5 mr-2 text-[#dfe6e9] dark:text-[#b2bec3]" />
                                        <span className="text-[#dfe6e9] dark:text-[#b2bec3]">{workshop.host}</span>
                                    </div>
                                    <button className={`mt-4 bg-${workshop.color} hover:bg-${workshop.hoverColor} text-white`}>
                                        S'inscrire
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#00b894]">
                            Inscrivez-vous à nos ateliers et formations
                        </h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="text-[#00b894]">
                                    Nom
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Entrez votre nom"
                                    className="border-[#00b894] focus:ring-[#00b894] w-full p-2"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-[#e67e22]">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Entrez votre email"
                                    className="border-[#e67e22] focus:ring-[#e67e22] w-full p-2"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="event" className="text-[#8e44ad]">
                                    Atelier ou formation
                                </label>
                                <select
                                    id="event"
                                    className="border-[#8e44ad] focus:ring-[#8e44ad] w-full p-2"
                                    value={formData.event}
                                    onChange={handleChange}
                                >
                                    <option value="">Sélectionnez un atelier ou une formation</option>
                                    {workshops.map((workshop, index) => (
                                        <option key={index} value={workshop.id}>
                                            {workshop.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="text-[#f39c12]">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Entrez un message optionnel"
                                    className="border-[#f39c12] focus:ring-[#f39c12] w-full p-2"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="bg-[#00b894] hover:bg-[#00a381] text-white p-2">
                                S'inscrire
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            < Footer />
        </div>
    );
}

const workshops = [
    {
        id: "interface-design",
        title: "Atelier : Initiation à la conception d'interfaces",
        description: "Apprenez les bases de la conception d'interfaces utilisateur avec Figma.",
        details:
            "Cet atelier vous permettra d'apprendre les bases de la conception d'interfaces utilisateur avec l'outil Figma. Vous découvrirez les principes de l'UX/UI design, les techniques de wireframing et de prototypage, ainsi que les bonnes pratiques pour créer des interfaces intuitives et esthétiques.",
        date: "10 mai 2023, 14h - 17h",
        host: "Animé par Jane Doe, Designer UX/UI",
        image: "/assets/partenariat/im1.jpg",
        color: "text-[#00b894]",
        hoverColor: "bg-[#00a381]"
    },
    {
        id: "react-development",
        title: "Formation : Développement web avec React",
        description: "Apprenez les fondamentaux du développement web avec React.",
        details:
            "Cette formation vous permettra d'apprendre les fondamentaux du développement web avec la bibliothèque JavaScript React. Vous découvrirez les concepts clés de React, tels que les composants, le state, les props et le lifecycle, ainsi que les meilleures pratiques pour construire des applications web modulaires et performantes.",
        date: "17 mai 2023 - 21 juin 2023, 18h - 20h",
        host: "Animé par John Doe, Développeur web",
        image: "/assets/partenariat/im2.jpg",
        color: "text-[#e67e22]",
        hoverColor: "bg-[#d35400]"
    },
    {
        id: "ai-introduction",
        title: "Atelier : Initiation à l'intelligence artificielle",
        description: "Découvrez les bases de l'intelligence artificielle et ses applications.",
        details:
            "Cet atelier vous permettra de découvrir les bases de l'intelligence artificielle et ses principales applications. Vous apprendrez les concepts fondamentaux de l'IA, tels que le machine learning, le deep learning et le traitement naturel du langage, ainsi que les enjeux éthiques liés à cette technologie.",
        date: "24 mai 2023, 14h - 17h",
        host: "Animé par Jane Doe, Experte en IA",
        image: "/assets/partenariat/im3.jpg",
        color: "text-[#8e44ad]",
        hoverColor: "bg-[#7d3c9e]"
    }
];

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

function UserIcon(props) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}

