import {
    Globe,
    Network,
    Terminal,
    Wrench,
} from "lucide-react";


import type { SecurityArea } from "./securityData";


const icons = {
    web: Globe,
    network: Network,
    methodology: Terminal,
    tools: Wrench,
};


interface SecurityCardProps {
    area: SecurityArea;
}



export function SecurityCard({
    area,
}: SecurityCardProps) {


    const Icon = icons[area.icon];


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
                hover:border-violet-400/40
            "
        >


            <Icon
                size={36}
                className="
                    text-violet-400
                    transition-transform
                    duration-500
                    group-hover:scale-110
                "
            />


            <h3
                className="
                    mt-6
                    text-2xl
                    font-black
                "
            >
                {area.title}
            </h3>



            <p
                className="
                    mt-4
                    leading-7
                    text-slate-400
                "
            >
                {area.description}
            </p>



            <div
                className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                "
            >

                {area.skills.map(skill => (

                    <span
                        key={skill}
                        className="
                            rounded-full
                            border
                            border-violet-400/20
                            bg-violet-400/5
                            px-3
                            py-1
                            text-xs
                            text-violet-200
                        "
                    >
                        {skill}
                    </span>

                ))}


            </div>


        </div>

    );
}