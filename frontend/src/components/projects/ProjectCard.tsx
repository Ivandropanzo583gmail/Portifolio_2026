import {
    Code2,
    Shield,
    Network,
    Palette,
} from "lucide-react";


import type { Project } from "./projectsData";


const icons = {
    development: Code2,
    security: Shield,
    infrastructure: Network,
    design: Palette,
};



interface ProjectCardProps {

    project: Project;

}



export function ProjectCard({
    project
}: ProjectCardProps) {


    const Icon =
        icons[project.type];


    return (

        <article
            className="
                group
                flex
                h-full
                flex-col
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/30
            "
        >


            <Icon
                size={38}
                className="
                    text-cyan-400
                    transition-transform
                    duration-500
                    group-hover:scale-110
                "
            />


            <span
                className="
                    mt-6
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-cyan-300
                "
            >
                {project.category}
            </span>



            <h3
                className="
                    mt-4
                    text-2xl
                    font-black
                "
            >
                {project.title}
            </h3>



            <p
                className="
                    mt-4
                    leading-7
                    text-slate-400
                "
            >
                {project.description}
            </p>



            <div className="mt-6">

                <h4
                    className="
                        text-sm
                        font-bold
                        text-white
                    "
                >
                    Stack
                </h4>


                <div
                    className="
                        mt-3
                        flex
                        flex-wrap
                        gap-2
                    "
                >

                    {project.stack.map(item => (

                        <span
                            key={item}
                            className="
                                rounded-full
                                border
                                border-white/10
                                bg-black/20
                                px-3
                                py-1
                                text-xs
                                text-slate-300
                            "
                        >
                            {item}
                        </span>

                    ))}

                </div>

            </div>




            <div className="mt-6">

                <h4
                    className="
                        text-sm
                        font-bold
                    "
                >
                    Focus
                </h4>


                <div
                    className="
                        mt-3
                        flex
                        flex-wrap
                        gap-2
                    "
                >

                    {project.topics.map(item => (

                        <span
                            key={item}
                            className="
                                text-xs
                                text-slate-400
                            "
                        >
                            #{item}
                        </span>

                    ))}

                </div>


            </div>


        </article>

    );

}