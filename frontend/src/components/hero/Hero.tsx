import { motion } from "framer-motion";

import { HeroContent } from "./HeroContent";
import { HeroRadar } from "./HeroRadar";

export function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-6"
        >
            <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <HeroContent />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: .8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        delay: .3,
                    }}
                >
                    <HeroRadar />
                </motion.div>

            </div>
        </section>
    );
}