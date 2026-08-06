import { ArrowRight, Download } from "lucide-react";

export function HeroButtons() {
    return (
        <div className="mt-10 flex flex-wrap gap-5">

            <button
                className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-cyan-500
                    px-7
                    py-4
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-[0_0_40px_rgba(0,229,255,.35)]
                "
            >
                Explore Operations

                <ArrowRight size={20} />
            </button>

            <button
                className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-7
                    py-4
                    font-semibold
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/10
                "
            >
                Download CV

                <Download size={20} />
            </button>

        </div>
    );
}