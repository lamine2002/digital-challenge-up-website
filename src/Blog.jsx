import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Blog() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Header />
            <main className="container mx-auto py-12 px-4 md:px-6">
                <section className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4">
                        Bienvenue sur le blog de Digital Challenge Up
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Découvrez nos derniers articles, les contributions de nos experts et explorez nos différentes catégories.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ArticleCard
                            title="Comment relever les défis du numérique ?"
                            description="Découvrez nos meilleurs conseils pour réussir votre transformation digitale."
                            imgSrc="/assets/photo/ia1.jpg"
                            link="#"
                        />
                        <ArticleCard
                            title="Les tendances du marketing digital en 2023"
                            description="Découvrez les dernières tendances du marketing digital et comment les exploiter."
                            imgSrc="/assets/photo/marketing.jpg"
                            link="#"
                        />
                        <ArticleCard
                            title="Pourquoi l'IA est-elle essentielle pour votre entreprise ?"
                            description="Découvrez comment l'intelligence artificielle peut transformer votre entreprise."
                            imgSrc="/assets/photo/ia2.jpg"
                            link="#"
                        />
                    </div>
                </section>
                <section className="mb-12">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Contributions d'experts</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Découvrez les dernières contributions de nos experts sur les tendances et les meilleures pratiques du numérique.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ExpertCard
                            name="John Doe"
                            title="Expert en transformation digitale"
                            avatar="/assets/photo/cloud.jpg"
                            contribution="Comment réussir votre transition vers le cloud"
                            description="Découvrez les meilleures pratiques pour migrer vos infrastructures vers le cloud."
                            link="#"
                        />
                        <ExpertCard
                            name="Sarah Miller"
                            title="Experte en marketing digital"
                            avatar="/assets/photo/person1.jpg"
                            contribution="Les tendances du marketing digital en 2023"
                            description="Découvrez les dernières tendances du marketing digital et comment les exploiter."
                            link="#"
                        />
                        <ExpertCard
                            name="Thomas Leclercq"
                            title="Expert en intelligence artificielle"
                            avatar="/assets/photo/person2.jpg"
                            contribution="L'IA, un outil incontournable pour votre entreprise"
                            description="Découvrez comment l'intelligence artificielle peut transformer votre entreprise."
                            link="#"
                        />
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Catégories</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Explorez nos différentes catégories pour trouver les articles qui vous intéressent.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <CategoryCard
                            icon={<svg className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>}
                            title="Transformation digitale"
                            description="Découvrez nos articles sur la transformation digitale de votre entreprise."
                            link="#"
                        />
                        <CategoryCard
                            icon={<svg className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>}
                            title="Marketing digital"
                            description="Explorez nos articles sur les dernières tendances du marketing digital."
                            link="#"
                        />
                        <CategoryCard
                            icon={<svg className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>}
                            title="Intelligence artificielle"
                            description="Découvrez comment l'IA peut transformer votre entreprise."
                            link="#"
                        />
                        <CategoryCard
                            icon={<svg className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>}
                            title="Cloud et infrastructure"
                            description="Explorez nos articles sur la migration vers le cloud et la gestion des infrastructures."
                            link="#"
                        />
                    </div>
                </section>
            </main>
            <footer className="bg-gray-900 text-gray" />
            <Footer />
        </div>
    );
}

// eslint-disable-next-line react/prop-types
function ArticleCard({ title, description, imgSrc, link }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
                src={imgSrc}
                width={400}
                height={225}
                alt="Article image"
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                    {                    title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {description}
                </p>
                <Link
                    to={link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    prefetch={false}
                >
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Lire l'article
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>

        </div>
    );
}

// eslint-disable-next-line react/prop-types
function ExpertCard({ name, title, avatar, contribution, description, link }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                        <img src={avatar} alt="Expert avatar" className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">{name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{title}</p>
                    </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                    {contribution}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {description}
                </p>
                <Link
                    to={link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    prefetch={false}
                >
                    Lire la contribution
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>

        </div>
    );
}

// eslint-disable-next-line react/prop-types
function CategoryCard({ icon, title, description, link }) {
    return (
        <Link
            to={link}
            className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            prefetch={false}
        >
            {icon}
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        </Link>
    );
}
