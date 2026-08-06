import { SkillCard } from "./SkillCard";
import { skills } from "./skillsData";


export function Skills(){

    return (

        <section
            id="skills"
            className="
                mx-auto
                max-w-7xl
                px-6
                py-32
            "
        >

            <span
                className="
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
                Technical Arsenal
            </span>



            <h2
                className="
                    mt-8
                    text-4xl
                    font-black
                    md:text-6xl
                "
            >
                Skills &
                <span className="text-cyan-400">
                    {" "}Expertise
                </span>
            </h2>



            <p
                className="
                    mt-6
                    max-w-3xl
                    text-lg
                    text-slate-400
                "
            >
                Tecnologias, ferramentas e conhecimentos
                utilizados no desenvolvimento de software,
                design de interfaces e segurança ofensiva.
            </p>



            <div
                className="
                    mt-16
                    grid
                    gap-8
                    md:grid-cols-2
                "
            >

                {skills.map(skill=>(

                    <SkillCard
                        key={skill.title}
                        {...skill}
                    />

                ))}

            </div>


        </section>

    );

}