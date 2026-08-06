import type {ReactNode}  from "react";
import { BackgroundGrid } from "./effects/BackgroundGrid";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <main
            className="
                relative
                min-h-screen
                overflow-hidden
                text-white
            "
        >

            <BackgroundGrid />

            <div className="relative z-10">
                {children}
            </div>

        </main>
    );
}