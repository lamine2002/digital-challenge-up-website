import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function PartenariatsOpportunites() {
    const partners = [
        {
            name: "ATOS",
            logo: "/assets/partenariat/atos.jpg",
            description: "Leading provider of innovative solutions.",
        },
        {
            name: "Expresso",
            logo: "/assets/partenariat/expresso.jpg",
            description: "Experts in cutting-edge technology.",
        },
        {
            name: "Free",
            logo: "/assets/partenariat/free.png",
            description: "Crafting exceptional digital experiences.",
        },
        {
            name: "Orange",
            logo: "/assets/partenariat/orange.png",
            description: "Empowering the next generation of entrepreneurs.",
        },
        {
            name: "Pro Mobile",
            logo: "/assets/partenariat/promobile.jpg",
            description: "Transforming businesses through strategic partnerships.",
        },
        {
            name: "RTS",
            logo: "/assets/partenariat/rts.png",
            description: "Driving growth and visibility for our partners.",
        },
    ];

    return (
        <div className="w-full">
            {/* Section Partenariats */}
            <Header />
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#00b8a9] text-white ">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Partenariats</h2>
                            <p className="max-w-[600px] text-[#f7f1e3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                                Découvrez les avantages de devenir partenaire de Digital Challenge Up et rejoignez notre réseau d'entreprises innovantes.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold">Avantages du partenariat</h3>
                                    <p className="text-[#f7f1e3] mt-2">
                                        En devenant partenaire de Digital Challenge Up, votre entreprise bénéficiera d'une visibilité accrue, d'opportunités de co-branding et d'un accès à notre réseau créatif.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Types de partenariats</h3>
                                    <p className="text-[#f7f1e3] mt-2">
                                        Nous proposons différents types de partenariats adaptés à vos besoins : partenariat de sponsoring, partenariat de co-création, partenariat de recrutement, etc.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Devenir partenaire</h3>
                                    <p className="text-[#f7f1e3] mt-2">
                                        Pour devenir partenaire de Digital Challenge Up, contactez-nous à l'adresse partenariats@digitalchallengeup.com. Nous serons ravis d'étudier votre demande.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Avantages</h2>
                            <p className="max-w-[600px] text-[#f7f1e3] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                                Découvrez tous les avantages à devenir partenaire de Digital Challenge Up.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold">Visibilité accrue</h3>
                                    <p className="text-[#f7f1e3] mt-2">
                                        Bénéficiez d'une visibilité accrue auprès de notre communauté d'entrepreneurs, d'innovateurs et de décideurs.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Opportunités de co-branding</h3>
                                    <p className="text-[#f7f1e3] mt-2">
                                        Collaborez avec nous sur des événements, des contenus et des campagnes de communication pour renforcer votre image de marque.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Accès à un réseau créatif</h3>
                                    <p className="text-[#f7f1e3] mt-2">
                                        Intégrez notre écosystème d'entreprises innovantes et bénéficiez de nouvelles opportunités de collaboration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Offres d'emploi et de stage */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Offres d'emploi et de stage</h2>
                            <p className="max-w-[600px] text-[#ff6b6b] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                                Découvrez les opportunités de carrière au sein de Digital Challenge Up et de nos entreprises partenaires.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold">Emplois</h3>
                                    <p className="text-[#ff6b6b] mt-2">
                                        Nous recherchons des talents passionnés pour rejoindre notre équipe et contribuer à notre mission d'accompagnement des entrepreneurs.
                                    </p>
                                    <Link
                                        to=""
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff6b6b]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff6b6b] disabled:pointer-events-none disabled:opacity-50 mt-4"
                                        prefetch={false}
                                    >
                                        Voir les offres
                                    </Link>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Stages</h3>
                                    <p className="text-[#ff6b6b] mt-2">
                                        Rejoignez notre équipe en stage et participez à l'accompagnement des entrepreneurs de Digital Challenge Up.
                                    </p>
                                    <Link
                                        to=""
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-[#ff6b6b] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff6b6b]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff6b6b] disabled:pointer-events-none disabled:opacity-50 mt-4"
                                        prefetch={false}
                                    >
                                        Voir les offres
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="/assets/partenariat/stage3.jpg"
                                width="550"
                                height="310"
                                alt="Offres d'emploi et de stage"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Nos Partenaires */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f1e3]">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Partenaires</h2>
                            <p className="max-w-[600px] text-[#00b8a9] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                                Découvrez les entreprises qui nous font confiance et rejoignez notre réseau.
                            </p>
                            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                                {partners.map((partner, index) => (
                                    <div key={index} className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg p-4 shadow-lg">
                                        <img
                                            src={partner.logo}
                                            width={100}
                                            height={100}
                                            alt={partner.name}
                                            className="h-12 w-12 object-contain"
                                        />
                                        <h3 className="text-lg font-semibold">{partner.name}</h3>
                                        <p className="text-[#00b8a9] text-sm">{partner.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img
                                src="/assets/partenariat/partenaires.jpg"
                                width="550"
                                height="310"
                                alt="Nos Partenaires"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
