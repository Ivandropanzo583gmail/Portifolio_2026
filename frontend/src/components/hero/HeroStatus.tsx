import { ShieldCheck, Activity, Globe, Lock } from "lucide-react";

const items = [
    {
        icon: ShieldCheck,
        label: "ACCESS LEVEL",
        value: "PUBLIC",
    },
    {
        icon: Activity,
        label: "STATUS",
        value: "ONLINE",
    },
    {
        icon: Globe,
        label: "LOCATION",
        value: "ANGOLA",
    },
    {
        icon: Lock,
        label: "SECURITY",
        value: "ENCRYPTED",
    },
];

export function HeroStatus() {
    return (
        <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">

            {items.map(({ icon: Icon, label, value }) => (

                <div
                    key={label}
                    className="
                        rounded-2xl
                        border
                        border-cyan-400/10
                        bg-white/5
                        p-4
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-cyan-400/30
                        hover:bg-cyan-400/5
                    "
                >

                    <Icon
                        size={20}
                        className="mb-4 text-cyan-400"
                    />

                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                        {label}
                    </p>

                    <h4 className="mt-2 text-lg font-bold text-white">
                        {value}
                    </h4>

                </div>

            ))}

        </div>
    );
}