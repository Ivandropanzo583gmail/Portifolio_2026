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
                Operações de Segurança Ofensiva
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
                        "Segurança Ofensiva",
                        "Web Pentester",
                        "Segurança de API",
                        "Entusiasta de TI",
                        "Segurança de Redes",
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
                Desenvolvedor web e pentester apaixonado por Segurança Ofensiva e desenvolvimento,
                desenvolvend laboratórios
                vulneráveis, sistemas saas, e infraestrutura de rede.
            </p>

            <HeroButtons />

            <div className="mt-20">
                <HeroStatus />
            </div>

        </div>
    );
}