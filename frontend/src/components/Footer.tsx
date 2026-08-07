import {
    Heart,
   
    Mail,
    ArrowUpRight,
} from "lucide-react";

import { SiGithub } from "react-icons/si";
import {  FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
        <footer
            className="
                relative
                border-t
                border-white/10
                mt-32
            "
        >
            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                    py-16
                "
            >
                <div
                    className="
                        grid
                        gap-12
                        lg:grid-cols-2
                    "
                >
                    {/* Esquerda */}
                    <div>

                        <h2
                            className="
                                text-4xl
                                font-black
                            "
                        >
                            IVANDRO

                            <span className="text-cyan-400">
                                {" "}PANZO
                            </span>
                        </h2>

                        <p
                            className="
                                mt-6
                                max-w-lg
                                leading-8
                                text-slate-400
                            "
                        >
                            Desenvolvedor Full Stack e Pentester,
                            apaixonado por construir aplicações modernas,
                            explorar vulnerabilidades e desenvolver soluções
                            seguras para ambientes reais.
                        </p>

                    </div>

                    {/* Direita */}
                    <div
                        className="
                            flex
                            flex-col
                            gap-5
                            lg:items-end
                        "
                    >

                        <a
                            href="https://github.com/ivandropanzo583@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="
                                flex
                                items-center
                                gap-3
                                text-slate-300
                                transition-colors
                                hover:text-cyan-400
                            "
                        >
                           <SiGithub size={20} />
                        
                            

                            GitHub

                            <ArrowUpRight size={16} />
                        </a>

                        <a
                            href="https://linkedin.com/in/ivandro-panzo-82947a319"
                            target="_blank"
                            rel="noreferrer"
                            className="
                                flex
                                items-center
                                gap-3
                                text-slate-300
                                transition-colors
                                hover:text-cyan-400
                            "
                        >
                           <FaLinkedin size={20} />
                           

                            LinkedIn

                            <ArrowUpRight size={16} />
                        </a>

                        <a
                            href="mailto:ivandropanzo583@gmail.com"
                            className="
                                flex
                                items-center
                                gap-3
                                text-slate-300
                                transition-colors
                                hover:text-cyan-400
                            "
                        >
                            <Mail size={20} />

                            Email

                            <ArrowUpRight size={16} />
                        </a>

                    </div>
                </div>

                {/* Linha */}
                <div
                    className="
                        my-10
                        h-px
                        bg-white/10
                    "
                />

                {/* Bottom */}
                <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-5
                        text-sm
                        text-slate-500
                        md:flex-row
                    "
                >
                    <p>
                        © {new Date().getFullYear()} Ivandro Panzo.
                        Todos os direitos reservados.
                    </p>

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                        "
                    >
                        Desenvolvido com

                        <Heart
                            size={15}
                            className="text-red-400"
                        />

                        React • TypeScript • Tailwind CSS • Framer Motion
                    </div>

                </div>

            </div>
        </footer>
    );
}