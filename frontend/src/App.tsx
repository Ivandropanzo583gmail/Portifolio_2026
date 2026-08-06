import { Footer } from "./components/Footer";
import { Layout } from "./components/Layout";
import { About } from "./components/about/About";
import { Contact } from "./components/contacts/Contact";
import { Experience } from "./components/experience/Experience";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { SecurityResearch } from "./components/security/SecurityResearch";
import { Skills } from "./components/skills/Skills";

export default function App() {
    return (
     /* <>
        <Hero />
        <About />
      </>*/
      <Layout>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <SecurityResearch />
          <Experience />
          <Contact />
          <Footer />
           
      </Layout>
    );
}



