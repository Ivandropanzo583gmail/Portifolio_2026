import { motion } from "framer-motion";

export function BackgroundGrid() {
    return (
        <div
            className="
                pointer-events-none
                fixed
                inset-0
                z-0
                overflow-hidden
                bg-[#050816]
            "
        >

            {/* Glow Azul Suave */}
            <motion.div
                animate={{
                    opacity: [0.08, 0.14, 0.08],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -top-40
                    left-1/2
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-500/10
                    blur-[180px]
                "
            />


            {/* Glow Roxo Suave */}
            <motion.div
                animate={{
                    opacity: [0.05, 0.12, 0.05],
                    scale: [1.05, 1, 1.05],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    -bottom-40
                    -right-20
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-violet-500/10
                    blur-[200px]
                "
            />


            {/* Grid */}
            <div
                className="
                    absolute
                    inset-0
                    opacity-[0.025]
                "
                style={{
                    backgroundImage: `
                        linear-gradient(
                            to right,
                            rgba(148,163,184,0.4) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(148,163,184,0.4) 1px,
                            transparent 1px
                        )
                    `,
                    backgroundSize: "70px 70px",
                }}
            />


            {/* Vinheta */}
            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_center,transparent_35%,rgba(5,8,22,0.95)_100%)]
                "
            />

        </div>
    );
}