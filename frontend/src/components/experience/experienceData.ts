export interface Experience {
    period: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        period: "Professional Experience",
        role: "Web Developer",
        company: "Enterprise Environment",

        description:
            "Atuação no desenvolvimento de aplicações web em ambiente empresarial, participando da implementação de novas funcionalidades, manutenção de sistemas existentes, integração com APIs e evolução de soluções digitais voltadas para necessidades reais de negócio. Desenvolvedor com mais de 3 anos de experiência",

        technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "JavaScript",
            "REST API",
            "Git",
        ],
    },

    {
        period: "Independent Research",
        role: "Full Stack Developer & Pentester",
        company: "Security Research",

        description:
            "Desenvolvimento de projetos full stack e construção de laboratórios voltados para segurança ofensiva, explorando vulnerabilidades em aplicações web, APIs e infraestruturas de rede para aprofundamento técnico.",

        technologies: [
            "Fastify",
            "PostgreSQL",
            "OWASP",
            "Kali Linux",
            "Network Security",
            "Virtual Labs",
        ],
    },
];