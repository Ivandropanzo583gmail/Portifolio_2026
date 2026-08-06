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
                    flex
                    h-72
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    bg-gradient-to-br
                    from-cyan-500/20
                    to-violet-500/20
                "
            >

                <span
                    className="
                        text-sm
                        uppercase
                        tracking-[0.3em]
                        text-slate-400
                    "
                >
                    Your Photo
                </span>

            </div>


            <div className="mt-6 space-y-4">


                <div className="flex items-center gap-3">

                    <Terminal
                        size={18}
                        className="text-cyan-400"
                    />

                    <span>
                        Full Stack Developer
                    </span>

                </div>


                <div className="flex items-center gap-3">

                    <Shield
                        size={18}
                        className="text-violet-400"
                    />

                    <span>
                        Web Pentester
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