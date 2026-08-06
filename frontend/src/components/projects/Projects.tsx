import { projects } from "./projectsData";
import { ProjectCard } from "./ProjectCard";


export function Projects(){

    return (

        <section
            id="projects"
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
                Projects & Research
            </span>



            <h2
                className="
                    mt-8
                    text-4xl
                    font-black
                    md:text-6xl
                "
            >
                Building.

                <span
                    className="
                        text-cyan-400
                    "
                >
                    Testing.
                </span>

                Securing.
            </h2>



            <p
                className="
                    mt-6
                    max-w-3xl
                    text-lg
                    text-slate-400
                "
            >
                Projetos de desenvolvimento,
                pesquisa em segurança ofensiva
                e ambientes laboratoriais.
            </p>



            <div
                className="
                    mt-16
                    grid
                    gap-8
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >

                {projects.map(project => (

                    <ProjectCard
                        key={project.title}
                        project={project}
                    />

                ))}


            </div>


        </section>

    );

}