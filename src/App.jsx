import {Link} from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
function App() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Header />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container md:px-6 mx-auto">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] ">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
                                        Inspirer la Créativité, Challengez l'Innovation
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Digital Challenge Up est une marque dynamique et innovante spécialisée dans l'organisation de défis
                                        numériques et de compétitions créatives.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        to=""
                                        className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-orange-500 px-8 text-sm font-medium text-white shadow transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Découvrir les défis
                                    </Link>
                                    <Link
                                        to=""
                                        className="inline-flex h-10 items-center justify-center rounded-full border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        prefetch={false}
                                    >
                                        Rejoindre la communauté
                                    </Link>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 opacity-30 blur-xl" />
                                <img
                                    src="/assets/photo/télécharger%20(6).jpg"
                                    width="600"
                                    height="600"
                                    alt="Hero"
                                    className="mx-auto aspect-video overflow-hidden rounded-full object-cover sm:w-full lg:order-last lg:aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-orange-500">
                    <div className="container mx-auto md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm text-white">Notre mission</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                                    Promouvoir l'excellence et l'innovation
                                </h2>
                                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Digital Challenge Up s'engage à offrir des expériences uniques et stimulantes dans les domaines du
                                    marketing, de la communication digitale et du design. Nos défis récompensent l'excellence et
                                    encouragent l'innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-orange-500 px-3 py-1 text-sm text-white">
                                    Défis en cours
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
                                    Relevez nos challenges créatifs
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Découvrez nos défis les plus récents et rejoignez notre communauté d'innovateurs. Laissez libre cours
                                    à votre créativité et remportez de prestigieuses récompenses.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="relative overflow-hidden rounded-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 opacity-30 blur-xl" />
                                <img
                                    src="/assets/photo/télécharger%20(7).jpg"
                                    width="550"
                                    height="310"
                                    alt="Challenge 1"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                />
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
                                        Défi de Branding
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Créez l'identité visuelle d'une nouvelle marque innovante.
                                    </p>
                                    <Link
                                        to=""
                                        className="inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-orange-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        S'inscrire
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="relative overflow-hidden rounded-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-fuchsia-500 opacity-30 blur-xl" />
                                <img
                                    src="/assets/photo/télécharger%20(6).jpg"
                                    width="550"
                                    height="310"
                                    alt="Challenge 2"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-fuchsia-500">
                                        Défi de Design UX
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Concevez une expérience utilisateur innovante pour une application mobile.
                                    </p>
                                    <Link
                                        to=""
                                        className="inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        S'inscrire
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-500 to-fuchsia-500">
                    <div className="container mx-auto md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm text-white">Galerie</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                                    Découvrez les créations de nos participants
                                </h2>
                                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Explorez une sélection de travaux exceptionnels réalisés lors de nos précédentes compétitions.
                                    Laissez-vous inspirer par le talent et la créativité de notre communauté.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                            <div className="relative overflow-hidden rounded-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-fuchsia-500 opacity-30 blur-xl" />
                                <img
                                    src="/assets/photo/images%20(1).jpg"
                                    width="350"
                                    height="350"
                                    alt="Gallery 1"
                                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                            </div>
                            <div className="relative overflow-hidden rounded-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 opacity-30 blur-xl" />
                                <img
                                    src="/assets/photo/images%20(1).jpg"
                                    width="350"
                                    height="350"
                                    alt="Gallery 2"
                                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                            </div>
                            <div className="relative overflow-hidden rounded-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-fuchsia-500 opacity-30 blur-xl" />
                                <img
                                    src="/assets/photo/images%20(1).jpg"
                                    width="350"
                                    height="350"
                                    alt="Gallery 3"
                                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-orange-500 px-3 py-1 text-sm text-white">
                                    Témoignages
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
                                    Ce que disent nos participants
                                </h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Découvrez les retours d'expérience de ceux qui ont relevé nos défis créatifs. Leurs témoignages
                                    reflètent l'esprit d'innovation et de passion qui anime notre communauté.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
                                    &ldquo;Participer au défi de branding de Digital Challenge Up a été une expérience incroyable. J'ai pu
                                    développer mes compétences en design et découvrir de nouvelles perspectives.&rdquo;
                                </blockquote>
                                <div className="flex items-center space-x-4">
                                    <img src="/assets/photo/télécharger%20(9).jpg" alt="Temoin 1" className="h-12 w-12 rounded-full" />
                                    <div>
                                        <p className="text-lg font-medium text-gray-900 dark:text-gray-100">Marie Dupont</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Défi de Branding</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center space-y-4">
                                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
                                    &ldquo;Le concours de marketing digital m'a permis de repousser mes limites et d'apprendre des stratégies
                                    innovantes. Une expérience inoubliable!&rdquo;
                                </blockquote>
                                <div className="flex items-center space-x-4">
                                    <img src="/assets/photo/télécharger%20(10).jpg" alt="Temoin 2" className="h-12 w-12 rounded-full" />
                                    <div>
                                        <p className="text-lg font-medium text-gray-900 dark:text-gray-100">Jean Martin</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Concours de Marketing Digital</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

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

export default App
