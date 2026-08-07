import { securityAreas } from "./securityData";
import { SecurityCard } from "./SecurityCard";


export function SecurityResearch() {

    return (

        <section
            id="security"
            className="
                mx-auto
                max-w-7xl
                px-6
                py-32
            "
        >


            <span
                className="
                    inline-flex
                    rounded-full
                    border
                    border-violet-400/20
                    bg-violet-400/5
                    px-4
                    py-2
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-violet-300
                "
            >
                Security Research
            </span>




            <h2
                className="
                    mt-8
                    max-w-4xl
                    text-4xl
                    font-black
                    leading-tight
                    md:text-6xl
                "
            >

                Segurança Ofensiva.

                <br />

                <span className="text-violet-400">
                    Pesquisa.
                </span>

                Teste.

            </h2>




            <p
                className="
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-8
                    text-slate-400
                "
            >
                Estudo segurança ofensiva através de laboratórios
                controlados, análise de vulnerabilidades e simulação
                de cenários reais de ataque para compreender como
                sistemas podem ser explorados e protegidos.
            </p>




            <div
                className="
                    mt-16
                    grid
                    gap-8
                    md:grid-cols-2
                "
            >

                {securityAreas.map(area => (

                    <SecurityCard
                        key={area.title}
                        area={area}
                    />

                ))}


            </div>



        </section>

    );

}