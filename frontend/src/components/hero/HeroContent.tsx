import { Typewriter } from "react-simple-typewriter";

import { HeroButtons } from "./HeroButtons";
import { HeroStatus } from "./HeroStatus";

export function HeroContent() {
    return (
        <div>
            
            <span
                className="
                    mb-6
                    inline-flex
                    rounded-full
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    px-4
                    py-2
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    text-cyan-300
                "
            >
                Offensive Security Operations
            </span>

            <h1 className="mt-6 text-6xl font-black leading-none md:text-8xl">

                IVANDRO

                <br />

                <span className="text-cyan-400">

                    PANZO

                </span>

            </h1>

            <div className="mt-8 text-2xl font-semibold text-slate-300">

                <Typewriter
                    words={[
                        "Offensive Security",
                        "Web Pentester",
                        "API Security",
                        "Red Team Enthusiast",
                        "Security Researcher",
                    ]}
                    cursor
                    cursorStyle="_"
                    loop={0}
                    typeSpeed={70}
                    deleteSpeed={40}
                />

            </div>

            <p
                className="
                    mt-8
                    max-w-xl
                    text-lg
                    leading-8
                    text-slate-400
                "
            >
                Desenvolvedor apaixonado por Segurança Ofensiva,
                Pentest Web e desenvolvimento de laboratórios
                vulneráveis para pesquisa, aprendizagem e demonstração
                técnica.
            </p>

            <HeroButtons />

            <div className="mt-20">
                <HeroStatus />
            </div>

        </div>
    );
}