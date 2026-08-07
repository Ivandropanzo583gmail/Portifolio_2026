interface ContactCardProps {

    title: string;
    subtitle: string;
    value: string;
    href: string;
    icon: React.ElementType;

}

export function ContactCard({
    title,
    subtitle,
    value,
    href,
    icon: Icon,
}: ContactCardProps) {

    return (

        <a
            href={href}
            target="_blank"
            rel="noreferrer"
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
                hover:border-cyan-400/40
                hover:bg-white/10
            "
        >

            <Icon
                size={34}
                className="
                    text-cyan-400
                    transition-transform
                    duration-500
                    group-hover:scale-110
                "
            />

            <h3
                className="
                    mt-8
                    text-2xl
                    font-bold
                "
            >
                {title}
            </h3>

            <p
                className="
                    mt-2
                    text-sm
                    text-slate-500
                "
            >
                {subtitle}
            </p>

            <p
                className="
                    mt-8
                    break-all
                    text-slate-300
                "
            >
                {value}
            </p>

        </a>

    );

}