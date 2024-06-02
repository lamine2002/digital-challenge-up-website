import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Apropos() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto md:px-6">
                        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-green-600 px-3 py-1 text-sm text-white">Notre mission</div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-3.4rem 2xl:text-3.75rem text-blue-600">
                                    Stimuler l'innovation numérique
                                </h2>
                                <p className="max-w-3xl text-gray-600 md:text-xl lg:text-base xl:text-xl">
                                    Digital Challenge Up organise des défis et des compétitions créatives pour encourager l'innovation numérique et permettre aux talents de se révéler.
                                </p>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
                                <div className="inline-block rounded-lg bg-green-600 px-3 py-1 text-sm text-white">Nos valeurs</div>
                                <ul className="grid gap-2 py-4">
                                    <li className="flex items-center text-blue-600">
                                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-600" />
                                        Créativité et innovation
                                    </li>
                                    <li className="flex items-center text-blue-600">
                                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-600" />
                                        Esprit d'équipe et collaboration
                                    </li>
                                    <li className="flex items-center text-blue-600">
                                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-600" />
                                        Passion pour le numérique
                                    </li>
                                    <li className="flex items-center text-blue-600">
                                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-600" />
                                        Engagement et excellence
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-800">
                    <div className="container mx-auto md:px-6">
                        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-green-600 px-3 py-1 text-sm text-white">Notre équipe</div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-3.4rem 2xl:text-3.75rem text-blue-600">
                                    Des experts passionnés
                                </h2>
                                <p className="max-w-3xl text-gray-600 md:text-xl lg:text-base xl:text-xl">
                                    Notre équipe est composée d'experts du numérique, de créatifs et d'organisateurs expérimentés qui travaillent ensemble pour offrir des expériences uniques.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="bg-green-600 rounded-full w-20 h-20 flex items-center justify-center text-white text-4xl font-bold">
                                        LD
                                    </div>
                                    <div className="text-sm font-medium text-blue-600">Léa Dupont</div>
                                    <div className="text-sm text-gray-600">Directrice</div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="bg-green-600 rounded-full w-20 h-20 flex items-center justify-center text-white text-4xl font-bold">
                                        JM
                                    </div>
                                    <div className="text-sm font-medium text-blue-600">Julien Mercier</div>
                                    <div className="text-sm text-gray-600">Responsable des défis</div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="bg-green-600 rounded-full w-20 h-20 flex items-center justify-center text-white text-4xl font-bold">
                                        SL
                                    </div>
                                    <div className="text-sm font-medium text-blue-600">Sophie Lefebvre</div>
                                    <div className="text-sm text-gray-600">Chargée de communication</div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="bg-green-600 rounded-full w-20 h-20 flex items-center justify-center text-white text-4xl font-bold">
                                        MG
                                    </div>
                                    <div className="text-sm font-medium text-blue-600">Mathieu Girard</div>
                                    <div className="text-sm text-gray-600">Responsable des partenariats</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto md:px-6">
                        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-green-600 px-3 py-1 text-sm text-white">Notre histoire</div>
                                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-3.4rem 2xl:text-3.75rem text-blue-600">
                                    Des débuts ambitieux
                                </h2>
                                <p className="max-w-3xl text-gray-600 md:text-xl lg:text-base xl:text-xl">
                                    Digital Challenge Up a été fondée en 2018 par une équipe passionnée de l'innovation numérique. Depuis, nous avons organisé de nombreux défis et compétitions qui ont permis de révéler de nouveaux talents.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-green-600 rounded-lg overflow-hidden">
                                    <img
                                        src="/assets/photo/debut1.jpg"
                                        width="300"
                                        height="200"
                                        alt="Histoire"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="bg-green-600 rounded-lg overflow-hidden">
                                    <img
                                        src="/assets/photo/debut2.jpg"
                                        width="300"
                                        height="200"
                                        alt="Histoire"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="bg-green-600 rounded-lg overflow-hidden">
                                    <img
                                        src="/assets/photo/debut3.jpg"
                                        width="300"
                                        height="200"
                                        alt="Histoire"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="bg-green-600 rounded-lg overflow-hidden">
                                    <img
                                        src="/assets/photo/debut4.jpg"
                                        width="300"
                                        height="200"
                                        alt="Histoire"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function CheckIcon(props) {
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
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}
