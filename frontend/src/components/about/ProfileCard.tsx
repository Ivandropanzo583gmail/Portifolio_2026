import {
    MapPin,
    Terminal,
    Shield,
} from "lucide-react";



export function ProfileCard() {

    return (

        <div
            className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
            "
        >

            {/* Foto Placeholder */}

            <div
                className="
                    relative
                    h-96
                    w-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-cyan-400/20
                "
            >
                <img
                    src="/Image.png"
                    alt="Ivandro Panzo"
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-950/70
                        via-transparent
                        to-transparent
                    "
                />
            </div>


            <div className="mt-6 space-y-4">


                <div className="flex items-center gap-3">

                    <Terminal
                        size={18}
                        className="text-cyan-400"
                    />

                    <span>
                        Full Stack Developer e UI/UX Designer
                    </span>

                </div>


                <div className="flex items-center gap-3">

                    <Shield
                        size={18}
                        className="text-violet-400"
                    />

                    <span>
                        Pentester
                    </span>

                </div>


                <div className="flex items-center gap-3">

                    <MapPin
                        size={18}
                        className="text-cyan-400"
                    />

                    <span>
                        Angola
                    </span>

                </div>


            </div>


        </div>

    );
}