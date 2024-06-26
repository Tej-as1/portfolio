import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";
import About from "./components/About";
import Tech from "./components/Tech";
import Skill from "./components/Skill";
import ProjectPage from "./components/ProjectPage";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_133%_at_50%_10%,#010_40%,#63e_110%)]"></div>{" "}
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Skill/>
        <ProjectPage/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
