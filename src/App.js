import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <body className='bg-primary text-quaternary selection:bg-teal-300 selection:text-teal-900'>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header onNavigate={scrollToSection} />
          <main className="lg:w-1/2 lg:py-24">
            <About id="about" />
            <Experience id="experience" />
            <Projects id="projects" />
          </main>
        </div>
      </div>
    </body>
  );
}

export default App;