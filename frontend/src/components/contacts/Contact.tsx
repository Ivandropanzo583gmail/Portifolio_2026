import { ArrowRight } from "lucide-react";

import { ContactCard } from "./ContactCard";
import { contacts } from "./contactData";

export function Contact() {

    return (

        <section
            id="contact"
            className="
                mx-auto
                max-w-7xl
                px-6
                py-36
            "
        >

            <div
                className="
                    text-center
                "
            >

                <span
                    className="
                        inline-flex
                        rounded-full
                        border
                        border-cyan-400/20
                        bg-cyan-400/5
                        px-4
                        py-2
                        text-xs
                        uppercase
                        tracking-[0.3em]
                        text-cyan-300
                    "
                >
                    Contact
                </span>


                <h2
                    className="
                        mt-8
                        text-5xl
                        font-black
                        leading-tight
                        md:text-7xl
                    "
                >
                    Let's Build

                    <br />

                    <span className="text-cyan-400">
                        Something Great.
                    </span>

                </h2>


                <p
                    className="
                        mx-auto
                        mt-8
                        max-w-3xl
                        text-lg
                        leading-8
                        text-slate-400
                    "
                >
                    Estou disponível para oportunidades como
                    Desenvolvedor Full Stack, Pentester e
                    Security Researcher.

                    Se acredita que posso agregar valor
                    ao seu projeto ou equipa,
                    será um prazer conversar.
                </p>

            </div>



            <div
                className="
                    mt-20
                    grid
                    gap-8
                    md:grid-cols-2
                "
            >

                {contacts.map(contact => (

                    <ContactCard
                        key={contact.title}
                        {...contact}
                    />

                ))}

            </div>



            <div
                className="
                    mt-20
                    flex
                    justify-center
                "
            >

                <a
                    href="mailto:ivandro@email.com"
                    className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        bg-cyan-400
                        px-8
                        py-4
                        font-semibold
                        text-black
                        transition-all
                        duration-300
                        hover:scale-105
                    "
                >
                    Let's Talk

                    <ArrowRight size={20} />

                </a>

            </div>

        </section>

    );

}