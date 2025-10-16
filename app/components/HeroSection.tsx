import { CONTACT } from "~/constants/contact";

export function HeroSection() {
    return (
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="text-center px-4">
                <h1 className="text-6xl md:text-7xl font-bold mb-4">
                    {CONTACT.name}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
                    {CONTACT.tagline}
                </p>
                <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
                    {CONTACT.bio}
                </p>
            </div>
        </section>
    );
}

