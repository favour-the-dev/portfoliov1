import Navbar from "./components/Navbar";
import HeroSect from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
function App() {
  return ( 
    <>
      <div className="w-screen min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSect/>
        <About />
        <Portfolio />
        <Contact/>
      </div>
    </>
  );
}

export default App;