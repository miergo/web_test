import { Button } from "./ui/Button";
import { CONTACT } from "~/constants/contact";

export function ContactSection() {
    return (
        <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                    Interested in collaborating? Let's create something amazing together.
                </p>
                <div className="flex justify-center gap-6">
                    <Button
                        as="a"
                        href={`mailto:${CONTACT.email}`}
                        variant="primary"
                    >
                        Email Me
                    </Button>
                    <Button
                        as="a"
                        href={CONTACT.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                    >
                        GitHub
                    </Button>
                </div>
            </div>
        </section>
    );
}

