import { motion } from "framer-motion";

const targets = [
    { top: "22%", left: "68%", delay: 0 },
    { top: "42%", left: "28%", delay: 1 },
    { top: "65%", left: "73%", delay: 2 },
    { top: "78%", left: "46%", delay: 3 },
];

export function HeroRadar() {
    return (
        <div className="relative flex items-center justify-center">

            {/* Glow */}
            <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />

            {/* Radar */}
            <div className="relative h-[520px] w-[520px]">

                {/* Círculos */}
                {[1, 2, 3, 4].map((circle) => (
                    <div
                        key={circle}
                        className="absolute rounded-full border border-cyan-400/20"
                        style={{
                            inset: `${circle * 12}%`,
                        }}
                    />
                ))}

                {/* Linha Vertical */}
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-400/10" />

                {/* Linha Horizontal */}
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-cyan-400/10" />

                {/* Sweep */}
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 6,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="absolute inset-0 origin-center"
                >
                    <div
                        className="absolute left-1/2 top-1/2 h-[2px] w-1/2 -translate-y-1/2 origin-left rounded-full"
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(0,229,255,.95), rgba(0,229,255,0))",
                        }}
                    />
                </motion.div>

                {/* Centro */}
                <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(0,229,255,.9)]" />

                {/* Targets */}
                {targets.map((target, index) => (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{
                            top: target.top,
                            left: target.left,
                        }}
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scale: [1, 1.8, 1],
                            opacity: [1, .25, 1],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: target.delay,
                        }}
                    >
                        <div className="relative">

                            <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(0,229,255,.8)]" />

                            <motion.div
                                animate={{
                                    scale: [1, 3],
                                    opacity: [0.6, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: target.delay,
                                }}
                                className="absolute inset-0 rounded-full border border-cyan-400"
                            />

                        </div>
                    </motion.div>
                ))}

                {/* Borda */}
                <div className="absolute inset-0 rounded-full border border-cyan-400/20" />

            </div>

            {/* Painel */}
            <div
                className="
                    absolute
                    bottom-2
                    right-0
                    rounded-2xl
                    border
                    border-cyan-400/20
                    bg-black/40
                    px-6
                    py-4
                    backdrop-blur-xl
                "
            >
                <div className="mb-2 flex items-center gap-2">

                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                    <span className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                        Radar Online
                    </span>

                </div>

                <div className="space-y-1 text-sm text-slate-400">

                    <p>Targets: 04</p>

                    <p>Status: Tracking</p>

                    <p>Integrity: 100%</p>

                </div>

            </div>

        </div>
    );
}