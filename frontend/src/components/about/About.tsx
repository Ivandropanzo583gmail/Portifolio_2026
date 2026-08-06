import { AboutContent } from "./AboutContent";
import { ProfileCard } from "./ProfileCard";
import { Timeline } from "./Timeline";

export function About() {
    return (
        <section
            id="about"
            className="
                relative
                mx-auto
                min-h-screen
                w-full
                max-w-7xl
                px-6
                py-32
            "
        >

            <div
                className="
                    grid
                    gap-12
                    lg:grid-cols-[1fr_420px]
                    lg:items-start
                "
            >

                <AboutContent />

                <ProfileCard />

            </div>


            <Timeline />

        </section>
    );
}