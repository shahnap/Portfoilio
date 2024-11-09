import { useRef, useEffect, useState } from 'react';
import { FaDiscord, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contacts from './pages/contact';
import About from './pages/About';

function App() {
  // Refs for each section
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  // State for active section
  const [activeSection, setActiveSection] = useState('About');

  // Scroll to a specific section
  const handleScrollToSection = (ref, section) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
  };

  // Intersection Observer to detect the active section
  useEffect(() => {
    const sections = [
      { ref: aboutRef, name: 'About' },
      { ref: resumeRef, name: 'Resume' },
      { ref: projectsRef, name: 'Projects' },
      { ref: contactsRef, name: 'Contacts' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(({ ref, name }) => {
      observer.observe(ref.current);
      ref.current.dataset.section = name;
    });

    return () => {
      sections.forEach(({ ref }) => observer.unobserve(ref.current));
    };
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row"
      style={{
        minHeight: '100vh',
        color: 'white',
        backgroundImage: 'radial-gradient(circle, #1e3a8a, #000000)',
        fontFamily: 'Lucida Console, Monaco, monospace',
      }}
    >
      {/* Left Section */}
      <div className="flex flex-1 ">
        <div className="flex flex-col w-full md:pl-[25%]">
          {/* Header */}
          <div className="one flex-1 flex flex-col justify-center items-center md:items-start space-y-4">
            <h1 className="text-4xl font-bold space-x-5">Shahna P</h1>
            <p className="text-lg">MERN Stack Developer</p>

            {/* Social Icons */}
            
          </div>

          {/* Navigation Links with Active Section Highlight */}
          <div className="two flex-1 flex flex-col md:items-start items-center space-y-4">
  {[
    { label: 'About', ref: aboutRef },
    { label: 'Resume', ref: resumeRef },
    { label: 'Projects', ref: projectsRef },
    { label: 'Contacts', ref: contactsRef },
  ].map(({ label, ref }) => (
    <button
      key={label}
      onClick={() => handleScrollToSection(ref, label)}
      className={`text-xl transition-all duration-300 ${
        activeSection === label
          ? 'text-blue-400'
          : 'hover:text-2xl hover:text-gray-300'
      }`}
    >
      {label}
    </button>
  ))}
</div>


          <div className="flex justify-center md:justify-normal space-x-6 text-3xl mb-5">
          <a
  href="mailto:shahnapshahna243@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-500"
>
  <FaEnvelope />
</a>
              <a
                href="https://www.linkedin.com/in/shahna-p-aba5a9288/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/shahnap"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <FaGithub />
              </a>
            </div>
        </div>
      </div>

      {/* Right Section with All Sections Displayed */}
      <div className="flex-1 p-8 space-y-8 overflow-y-auto" style={{ maxHeight: '100vh' }}>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={resumeRef}>
          <Resume />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactsRef}>
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
