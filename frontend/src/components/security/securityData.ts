export interface SecurityArea {
    title: string;
    description: string;
    skills: string[];
    icon: "web" | "network" | "methodology" | "tools";
}


export const securityAreas: SecurityArea[] = [

    {
        title: "Web Application Security",

        description:
            "Análise de aplicações web modernas, identificação de vulnerabilidades e avaliação de mecanismos de segurança.",

        skills: [
            "OWASP Top 10",
            "XSS",
            "SQL Injection",
            "CSRF",
            "IDOR",
            "API Security",
            "Authentication Testing",
        ],

        icon: "web",
    },


    {
        title: "Infrastructure Security",

        description:
            "Testes em ambientes de rede, análise de serviços expostos e avaliação de sistemas Linux e Windows.",

        skills: [
            "Network Enumeration",
            "Service Discovery",
            "SSH",
            "SMB",
            "Linux Security",
            "Windows Security",
        ],

        icon: "network",
    },


    {
        title: "Pentest Methodology",

        description:
            "Processo estruturado de avaliação de segurança desde reconhecimento até documentação técnica.",

        skills: [
            "Reconnaissance",
            "Scanning",
            "Enumeration",
            "Exploitation",
            "Reporting",
            "Risk Analysis",
        ],

        icon: "methodology",
    },


    {
        title: "Security Environment",

        description:
            "Construção de laboratórios controlados para prática, pesquisa e simulação de ataques.",

        skills: [
            "Kali Linux",
            "Metasploitable 2",
            "Virtual Machines",
            "Burp Suite",
            "Nmap",
            "Metasploit",
            "Wireshark",
        ],

        icon: "tools",
    },

];