export interface Project {
    title: string;
    category: string;
    description: string;
    stack: string[];
    topics: string[];
    type: "development" | "security" | "infrastructure" | "design";
}


export const projects: Project[] = [

    {
        title: "MediaVault",
        category: "Full Stack Application",

        description:
            "Plataforma completa de gerenciamento de ficheiros desenvolvida com arquitetura full stack, envolvendo frontend moderno, API backend e persistência de dados.",

        stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Fastify",
            "PostgreSQL",
            "React Query",
        ],

        topics: [
            "Frontend",
            "Backend",
            "REST API",
            "Database Design",
        ],

        type: "development",
    },


    {
        title: "Ticket Lab",

        category:
            "Web Security Research",

        description:
            "Aplicação web vulnerável criada para estudo de segurança ofensiva, análise de falhas e demonstração de vulnerabilidades comuns.",

        stack: [
            "React",
            "Fastify",
            "PostgreSQL",
        ],

        topics: [
            "XSS",
            "SQL Injection",
            "IDOR",
            "CSRF",
        ],

        type: "security",
    },


    {
        title: "Metasploitable 2 Lab",

        category:
            "Pentest Environment",

        description:
            "Ambiente controlado de testes utilizando máquinas vulneráveis para prática de enumeração, análise e exploração de serviços.",

        stack: [
            "Kali Linux",
            "Metasploitable 2",
            "Virtual Machines",
        ],

        topics: [
            "Enumeration",
            "Vulnerability Assessment",
            "Exploitation",
        ],

        type: "security",
    },


    {
        title: "Network Infrastructure Lab",

        category:
            "Infrastructure Security",

        description:
            "Construção de uma infraestrutura virtual com sistemas Linux e Windows, configuração de serviços e testes de segurança.",

        stack: [
            "Ubuntu Server",
            "Windows",
            "Kali Linux",
            "VirtualBox",
        ],

        topics: [
            "SSH",
            "SMB",
            "Network Services",
            "Infrastructure Testing",
        ],

        type: "infrastructure",
    },


    {
        title: "UI/UX Design Projects",

        category:
            "Product Design",

        description:
            "Criação de interfaces modernas e experiências digitais focadas em usabilidade, design e conversão.",

        stack: [
            "Figma",
            "Design Systems",
            "Prototyping",
        ],

        topics: [
            "Landing Pages",
            "SaaS Design",
            "Responsive UI",
        ],

        type: "design",
    },


];