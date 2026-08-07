import {
  
    Mail,
    FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const contacts = [

    {
        title: "GitHub",
        subtitle: "Explore my projects",
        value: "github.com/ivandropanzo583gmail",
        href: "https://github.com/ivandropanzo583gmail",
        icon:FaGithub
       
    },

    {
        title: "LinkedIn",
        subtitle: "Professional profile",
        value: "linkedin.com/in/ivandropanzo-82947a13319",
        href: "http://linkedin.com/in/ivandro-panzo-82947a319",
        icon:FaLinkedin
   
    },

    {
        title: "Email",
        subtitle: "Let's talk",
        value: "ivandropanzo583@gmail.com",
        href: "mailto:ivandropanzo583@gmail.com",
        icon: Mail,
    },

    {
        title: "Curriculum",
        subtitle: "Download CV",
        value: "Available as PDF",
        href: "/cv.pdf",
        icon: FileText,
    },

];