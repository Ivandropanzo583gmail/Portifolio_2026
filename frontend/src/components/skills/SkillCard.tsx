import {
    Code,
    Palette,
    Shield,
    Server,
} from "lucide-react";


const icons = {
    Code,
    Palette,
    Shield,
    Server,
};


interface SkillCardProps {

    title:string;
    description:string;
    icon:string;
    skills:string[];

}


export function SkillCard({
    title,
    description,
    icon,
    skills,
}:SkillCardProps){


    const Icon =
        icons[icon as keyof typeof icons];


    return (

        <div
            className="
                group
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
                size={34}
                className="
                    text-cyan-400
                    transition-transform
                    group-hover:scale-110
                "
            />


            <h3
                className="
                    mt-6
                    text-2xl
                    font-bold
                "
            >
                {title}
            </h3>


            <p
                className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-400
                "
            >
                {description}
            </p>



            <div
                className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                "
            >

                {skills.map(skill=>(

                    <span
                        key={skill}
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
                        {skill}
                    </span>

                ))}


            </div>


        </div>

    );
}