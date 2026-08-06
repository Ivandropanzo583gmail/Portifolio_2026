import { Code2, ShieldCheck, Network } from "lucide-react";

export function AboutContent() {
    return (
        <div>

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
                About Me
            </span>


            <h2
                className="
                    mt-8
                    text-4xl
                    font-black
                    leading-tight
                    md:text-6xl
                "
            >
                Desenvolvedor.

                <br />

                <span className="text-cyan-400">
                    Pentester.
                </span>

                <br />

                Apaixonado por tecnologia.
            </h2>


            <p
                className="
                    mt-8
                    max-w-2xl
                    text-lg
                    leading-8
                    text-slate-400
                "
            >
                Sou um desenvolvedor Full Stack focado na criação de
                aplicações modernas e escaláveis, utilizando tecnologias
                como React, TypeScript, Tailwind CSS e Fastify.

                <br />
                <br />

                Paralelamente, estudo e pratico segurança ofensiva,
                realizando testes em aplicações web, analisando
                vulnerabilidades e construindo ambientes de laboratório
                para compreender como sistemas podem ser explorados
                e protegidos.
            </p>


            <div
                className="
                    mt-10
                    grid
                    gap-5
                    sm:grid-cols-2 lg:grid-cols-3
                "
            >

                <div
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                        backdrop-blur-xl
                    "
                >

                    <Code2
                        className="text-cyan-400"
                        size={28}
                    />

                    <h3 className="mt-4 text-xl font-bold">
                        Full Stack Development
                    </h3>

                    <p className="mt-3 text-sm text-slate-400">
                        Construção de interfaces, APIs,
                        sistemas completos e arquiteturas web.
                    </p>

                </div>



                <div
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                        backdrop-blur-xl
                    "
                >

                    <ShieldCheck
                        className="text-violet-400"
                        size={28}
                    />

                    <h3 className="mt-4 text-xl font-bold">
                        Offensive Security
                    </h3>

                    <p className="mt-3 text-sm text-slate-400">
                        Testes de segurança web,
                        análise de vulnerabilidades
                        e pesquisa.
                    </p>

                </div>

                <div
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                        backdrop-blur-xl
                    "
                >

                    <Network
                        className="text-emerald-400"
                        size={28}
                    />

                    <h3 className="mt-4 text-xl font-bold">
                        Network Security
                    </h3>

                    <p className="mt-3 text-sm text-slate-400">
                        Avaliação de segurança em infraestruturas
                        de rede, análise de serviços expostos,
                        configurações e possíveis vetores de ataque.
                    </p>

                </div>

            </div>

        </div>
    );
}