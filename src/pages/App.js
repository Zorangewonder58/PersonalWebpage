
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux'
import store from './components/store'

import {useInView } from 'react-intersection-observer'

import Home from './Home.js'
import Projects from './Projects.js'
import Aspirations from './AspirationsPage/Aspirations.js'
import Contact from './ContactPage/Contact.js'
import About from './AboutPage/About.js'
import MenuContext from "./components/MenuContext";
import {useState} from 'react'
import Projects2 from "./ProjectsPage/Projects2";
import Section from "./components/Section";
import ScrollButton from "./components/ScrollButton";
import {useMediaQuery} from "react-responsive";


const example = "JSX"
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show'); //Checks if entry is in viewport and makes it shown
        }else
        {
            entry.target.classList.remove('show');
        }
    })
});

/*<Router>
        <MenuContext.Provider value={{isOpen, setIsOpen}}>
      <Navbar />
      <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Projects" element={<Projects2 />} />
                <Route exact path="/Aspirations" element={<Aspirations />} />
                <Route exact path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
      </Routes>
        </MenuContext.Provider>


    </Router>*/

const hiddenElements = document.querySelectorAll('.hidden')


function App() {

    const isMobile = useMediaQuery({query: '(max-width: 768px'});
    const isDesktop = useMediaQuery({query: '(min-width: 992px'});


    const [activeSection, setActiveSection] = useState('home');

    const handleSectionClick = (sectionId) => {
        setActiveSection(sectionId);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [isProjectVisible, setIsProjectVisible] = useState(false);
    const [isAspirationsVisible, setIsAspirationsVisible] = useState(false);
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [isContactVisible, setIsContactVisible] = useState(false);



    const toggleProjectVisibility = () => setIsProjectVisible(true);
    const toggleAspirationsVisibility = () => setIsAspirationsVisible(true);
    const toggleAboutVisibility = () => setIsAboutVisible(true);
    const toggleContactVisibility = () => setIsContactVisible(true);
    const Reset = () => {
        setIsProjectVisible(false);
        setIsAspirationsVisible(false);
        setIsAboutVisible(false);
        //setIsContactVisible(false);
    }


    return (
    <>
        {isMobile && <Router>
        <MenuContext.Provider value={{isOpen, setIsOpen}}>
            <Section isVisibled={true} id="home" isActive={activeSection === 'home'}>
                <Home isVisible={isProjectVisible} onToggle={toggleProjectVisibility} />
        </Section>

            <Section isVisibled={isProjectVisible} id="Projects" isActive={activeSection === 'projects'}>
                {/*{isSectionProjectVisible && <Projects2 />}*/}
                <Projects2 isVisible={isAspirationsVisible} onToggle={toggleAspirationsVisibility}/>
            </Section>

            <Section isVisibled={isAspirationsVisible} id="Aspirations" isActive={activeSection === 'aspirations'}>
                {/*{isSectionAspirationVisible && <Aspirations/>}*/}
                <Aspirations isVisible={isAboutVisible} onToggle={toggleAboutVisibility} />
            </Section>

            <Section isVisibled={isAboutVisible} id="About" isActive={activeSection === 'about'}>
                {/*{isSectionAboutVisible && <About/>}*/}
                <About isVisible={isContactVisible} onToggle={toggleContactVisibility}/>
            </Section>

            <Section  isVisibled={isContactVisible} id="Contact" isActive={activeSection === 'contact'}>
                {/*{isSectionContactVisible && <Contact/>}*/}
                <Contact onToggle={Reset} />
            </Section>
        </MenuContext.Provider>


    </Router>}

        {isDesktop && <Router>
            <MenuContext.Provider value={{isOpen, setIsOpen}}>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Projects" element={<Projects2 />} />
                    <Route exact path="/Aspirations" element={<Aspirations />} />
                    <Route exact path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </MenuContext.Provider>


        </Router>}

    </>



  );
}

export default App;
