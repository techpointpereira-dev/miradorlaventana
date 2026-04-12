import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Menu } from "@/sections/Menu";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-stone-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
