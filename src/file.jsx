/**
 * v0 by Vercel.
 * @see https://v0.dev/t/h9YXHtACbCD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
    return (
        <div className="w-full">
            <section className="bg-[#00b894] dark:bg-[#2d3436] py-12 md:py-20">
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
                        <div className="bg-white dark:bg-[#2d3436] rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 md:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }} />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-[#00b894]">
                                    Atelier : Initiation à la conception d'interfaces
                                </h3>
                                <p className="text-[#636e72] dark:text-[#b2bec3] mb-4">
                                    Apprenez les bases de la conception d'interfaces utilisateur avec Figma.
                                </p>
                                <div className="flex items-center mb-4">
                                    <CalendarIcon className="w-5 h-5 mr-2 text-[#636e72] dark:text-[#b2bec3]" />
                                    <span className="text-[#636e72] dark:text-[#b2bec3]">10 mai 2023, 14h - 17h</span>
                                </div>
                                <div className="flex items-center">
                                    <UserIcon className="w-5 h-5 mr-2 text-[#636e72] dark:text-[#b2bec3]" />
                                    <span className="text-[#636e72] dark:text-[#b2bec3]">Animé par Jane Doe</span>
                                </div>
                                <Button className="mt-4 w-full bg-[#00b894] hover:bg-[#00a381] text-white">S'inscrire</Button>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#2d3436] rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 md:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }} />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-[#e67e22]">Formation : Développement web avec React</h3>
                                <p className="text-[#636e72] dark:text-[#b2bec3] mb-4">
                                    Apprenez les fondamentaux du développement web avec React.
                                </p>
                                <div className="flex items-center mb-4">
                                    <CalendarIcon className="w-5 h-5 mr-2 text-[#636e72] dark:text-[#b2bec3]" />
                                    <span className="text-[#636e72] dark:text-[#b2bec3]">17 mai 2023 - 21 juin 2023, 18h - 20h</span>
                                </div>
                                <div className="flex items-center">
                                    <UserIcon className="w-5 h-5 mr-2 text-[#636e72] dark:text-[#b2bec3]" />
                                    <span className="text-[#636e72] dark:text-[#b2bec3]">Animé par John Doe</span>
                                </div>
                                <Button className="mt-4 w-full bg-[#e67e22] hover:bg-[#d35400] text-white">S'inscrire</Button>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#2d3436] rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 md:h-64 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }} />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-[#8e44ad]">
                                    Atelier : Initiation à l'intelligence artificielle
                                </h3>
                                <p className="text-[#636e72] dark:text-[#b2bec3] mb-4">
                                    Découvrez les bases de l'intelligence artificielle et ses applications.
                                </p>
                                <div className="flex items-center mb-4">
                                    <CalendarIcon className="w-5 h-5 mr-2 text-[#636e72] dark:text-[#b2bec3]" />
                                    <span className="text-[#636e72] dark:text-[#b2bec3]">24 mai 2023, 14h - 17h</span>
                                </div>
                                <div className="flex items-center">
                                    <UserIcon className="w-5 h-5 mr-2 text-[#636e72] dark:text-[#b2bec3]" />
                                    <span className="text-[#636e72] dark:text-[#b2bec3]">Animé par Jane Doe</span>
                                </div>
                                <Button className="mt-4 w-full bg-[#8e44ad] hover:bg-[#7d3c9e] text-white">S'inscrire</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#00b894] dark:bg-[#2d3436] py-12 md:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Détails des ateliers et formations</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-[#00b894]">
                                    Atelier : Initiation à la conception d'interfaces
                                </h3>
                                <p className="text-[#dfe6e9] dark:text-[#b2bec3] mb-4">
                                    Cet atelier vous permettra d'apprendre les bases de la conception d'interfaces utilisateur avec
                                    l'outil Figma. Vous découvrirez les principes de l'UX/UI design, les techniques de wireframing et de
                                    prototypage, ainsi que les bonnes pratiques pour créer des interfaces intuitives et esthétiques.
                                </p>
                                <div className="flex items-center mb-4">
                                    <CalendarIcon className="w-5 h-5 mr-2 text-[#dfe6e9] dark:text-[#b2bec3]" />
                                    <span className="text-[#dfe6e9] dark:text-[#b2bec3]">10 mai 2023, 14h - 17h</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <UserIcon className="w-5 h-5 mr-2 text-[#dfe6e9] dark:text-[#b2bec3]" />
                                    <span className="text-[#dfe6e9] dark:text-[#b2bec3]">Animé par Jane Doe, Designer UX/UI</span>
                                </div>
                                <Button className="mt-4 bg-[#00b894] hover:bg-[#00a381] text-white">S'inscrire</Button>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-[#e67e22]">Formation : Développement web avec React</h3>
                                <p className="text-[#dfe6e9] dark:text-[#b2bec3] mb-4">
                                    Cette formation vous permettra d'apprendre les fondamentaux du développement web avec la bibliothèque
                                    JavaScript React. Vous découvrirez les concepts clés de React, tels que les composants, le state, les
                                    props et le lifecycle, ainsi que les meilleures pratiques pour construire des applications web
                                    modulaires et performantes.
                                </p>
                                <div className="flex items-center mb-4">
                                    <CalendarIcon className="w-5 h-5 mr-2 text-[#dfe6e9] dark:text-[#b2bec3]" />
                                    <span className="text-[#dfe6e9] dark:text-[#b2bec3]">17 mai 2023 - 21 juin 2023, 18h - 20h</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <UserIcon className="w-5 h-5 mr-2 text-[#dfe6e9] dark:text-[#b2bec3]" />
                                    <span className="text-[#dfe6e9] dark:text-[#b2bec3]">Animé par John Doe, Développeur web</span>
                                </div>
                                <Button className="mt-4 bg-[#e67e22] hover:bg-[#d35400] text-white">S'inscrire</Button>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-[#8e44ad]">
                                    Atelier : Initiation à l'intelligence artificielle
                                </h3>
                                <p className="text-[#dfe6e9] dark:text-[#b2bec3] mb-4">
                                    Cet atelier vous permettra de découvrir les bases de l'intelligence artificielle et ses principales
                                    applications. Vous apprendrez les concepts fondamentaux de l'IA, tels que le machine learning, le deep
                                    learning et le traitement naturel du langage, ainsi que les enjeux éthiques liés à cette technologie.
                                </p>
                                <div className="flex items-center mb-4">
                                    <CalendarIcon className="w-5 h-5 mr-2 text-[#dfe6e9] dark:text-[#b2bec3]" />
                                    <span className="text-[#dfe6e9] dark:text-[#b2bec3]">24 mai 2023, 14h - 17h</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <UserIcon className="w-5 h-5 mr-2 text-[#dfe6e9] dark:text-[#b2bec3]" />
                                    <span className="text-[#dfe6e9] dark:text-[#b2bec3]">Animé par Jane Doe, Experte en IA</span>
                                </div>
                                <Button className="mt-4 bg-[#8e44ad] hover:bg-[#7d3c9e] text-white">S'inscrire</Button>
                            </div>
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
                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="name" className="text-[#00b894]">
                                    Nom
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Entrez votre nom"
                                    className="border-[#00b894] focus:ring-[#00b894]"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className="text-[#e67e22]">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Entrez votre email"
                                    className="border-[#e67e22] focus:ring-[#e67e22]"
                                />
                            </div>
                            <div>
                                <Label htmlFor="event" className="text-[#8e44ad]">
                                    Atelier ou formation
                                </Label>
                                <Select id="event" className="border-[#8e44ad] focus:ring-[#8e44ad]">
                                    <option value="">Sélectionnez un atelier ou une formation</option>
                                    <option value="interface-design">Atelier : Initiation à la conception d'interfaces</option>
                                    <option value="react-development">Formation : Développement web avec React</option>
                                    <option value="ai-introduction">Atelier : Initiation à l'intelligence artificielle</option>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="message" className="text-[#f39c12]">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Entrez un message optionnel"
                                    className="border-[#f39c12] focus:ring-[#f39c12]"
                                />
                            </div>
                            <Button type="submit" className="bg-[#00b894] hover:bg-[#00a381] text-white">
                                S'inscrire
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
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
    )
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
    )
}