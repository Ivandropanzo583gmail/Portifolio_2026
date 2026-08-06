const events = [
    {
        year: "2020",
        title: "Programming Journey",
        description:
            "Início da exploração do desenvolvimento de software.",
    },
    {
        year: "2023",
        title: "Full Stack Development",
        description:
            "Construção de aplicações web modernas.",
    },
    {
        year: "2025",
        title: "Cybersecurity",
        description:
            "Estudo de segurança ofensiva e pentesting.",
    },
];


export function Timeline() {

    return (

        <div className="mt-24">

            <h3
                className="
                    text-3xl
                    font-black
                "
            >
                Journey
            </h3>


            <div className="mt-10 space-y-8">

                {events.map((event)=>(
                    <div
                        key={event.year}
                        className="
                            flex
                            gap-6
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            p-6
                        "
                    >

                        <span
                            className="
                                text-cyan-400
                                font-bold
                            "
                        >
                            {event.year}
                        </span>


                        <div>

                            <h4 className="font-bold">
                                {event.title}
                            </h4>


                            <p className="mt-2 text-slate-400">
                                {event.description}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </div>

    );
}