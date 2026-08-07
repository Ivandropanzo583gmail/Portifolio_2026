import { ExperienceItem } from "./ExperienceItem";
import { experiences } from "./experienceData";

export function Experience() {
    return (
        <section
            id="experience"
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
                    Experiência Profissional
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
                Construções de Soluções.
                <br />
                <span className="text-cyan-400">
                    Entrega de Valor.
                </span>
            </h2>

            <p
                className="
                    mt-8
                    max-w-3xl
                    text-lg
                    leading-8
                    text-slate-400
                "
            >
                Experiência adquirida através do desenvolvimento de
                aplicações reais, colaboração em ambientes profissionais
                e evolução contínua em engenharia de software e segurança
                ofensiva.
            </p>

            <div className="mt-20 space-y-20">
                {experiences.map((experience) => (
                    <ExperienceItem
                        key={experience.role}
                        experience={experience}
                    />
                ))}
            </div>
        </section>
    );
}