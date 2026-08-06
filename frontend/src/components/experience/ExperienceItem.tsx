import { BriefcaseBusiness } from "lucide-react";

import type { Experience } from "./experienceData";

interface ExperienceItemProps {
    experience: Experience;
}

export function ExperienceItem({
    experience,
}: ExperienceItemProps) {
    return (
        <div className="relative pl-16">

            {/* Linha */}
            <div className="absolute left-5 top-0 h-full w-px bg-white/10" />

            {/* Ponto */}
            <div
                className="
                    absolute
                    left-0
                    top-2
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-cyan-400/30
                    bg-cyan-400/10
                "
            >
                <BriefcaseBusiness
                    size={18}
                    className="text-cyan-400"
                />
            </div>

            <span
                className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-cyan-300
                "
            >
                {experience.period}
            </span>

            <h3 className="mt-3 text-3xl font-black">
                {experience.role}
            </h3>

            <p className="mt-2 font-medium text-slate-300">
                {experience.company}
            </p>

            <p
                className="
                    mt-6
                    max-w-3xl
                    leading-8
                    text-slate-400
                "
            >
                {experience.description}
            </p>

            <div
                className="
                    mt-6
                    flex
                    flex-wrap
                    gap-3
                "
            >
                {experience.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-4
                            py-2
                            text-sm
                            text-slate-300
                        "
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}