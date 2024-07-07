import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import AffirmAuth from './images/Affirmio Home page.png';
import AffirmMotiv from './images/Affirmio Motivation.png';
import PythonCreatives from './images/Pythoncreatives .png';
import Github from './images/Githubimage.png';
import ZOW from './images/ZOW.png';
import ConnectzPic from './images/ConnectzAppPicture.png'

import Affirmio from './assets/Affirm.io(Complete App).zip'
import ZOWexe from './assets/ZOW executable.zip'
import Timefalldocument from './assets/Timefall.txt'
import PythonProject from './assets/Python Database Project.zip'
import ConnectzApp from './assets/Connetz-main.zip'

import GameJam from './images/GameJam.jpg'
import ContactFooter from './components/Footer';

import {useMediaQuery} from 'react-responsive';

import MenuContext from "./components/MenuContext";
import {useContext} from "react";

function Projects() {

  const {isOpen} = useContext(MenuContext);
  //const isOpen = false;
  const isMobile = useMediaQuery({query: '(max-width: 768px'});
  const isDesktop = useMediaQuery({query: '(min-width: 992px'});

    const handleClick = () => {
      alert('Hello world!');
    };

    const underlinestyle = {
      borderBottom: '1px solid black',
    }

  const center =
  {
    textAlign: 'center',
    alignContent: 'center'
  }

    return(
        <div>
        {isDesktop && <div className="Projects" id='main' >
      <header>
    
        <h1>
           Welcome to my Portfolio!
        </h1>
   </header>
    
    <div id='content-wrap'>
      <body>

      <main>
        {isDesktop && <div className='ProjectImages'>
          <img src={AffirmMotiv} alt='Affirmio Homepage'/>
        </div>}
        <h1> Personal Projects</h1>
        <div className='ProjectsSections'>

          <h2>Affirm.io: </h2>

          <p> A desktop application that returns motivations from a database and allows users to add to it. Created
            using
            IntelliJ and JavaFX </p>


          <a href={Affirmio} download="Affirm" target='_blank'>
            <button type="button" className='button' onClick={handleClick}>Learn More!</button>
          </a>

          {isMobile && <a href={Affirmio} download="Affirm" target='_blank'>
            <button type="button" className='sidebutton' onClick={handleClick}>Learn More!</button>
          </a>}


        </div>
        <br></br>
        <br></br>

        {isDesktop && <div className='ProjectImages'>
          <img src={ZOW} alt='Affirmio Homepage'/>
        </div>}
        <div className='ProjectsSections'>
          <h2>Z the Orange Wonder:</h2>
          <p> A 3d hack and slash game created in Unity. The main character has powers of telekinesis and sword fighting
            abilities. This game features numerous levels including a boss fight at the end</p>
          <a href={ZOWexe} download="ZOW executable" target='_blank'>
            <button type="button"
                    className='button'
                    onClick={handleClick}>Learn More!
            </button>
          </a>

          {isMobile && <a href={ZOWexe} download="ZOW executable" target='_blank'>
            <button type="button"
                    className='sidebutton'
                    onClick={handleClick}>Learn More!
            </button>
          </a>}
        </div>

        {isDesktop && <div className='ProjectImages'>
          <img src={GameJam} alt='Affirmio Homepage'/>
        </div>}
        <div className='ProjectsSections'>
          <h2>Timefall: </h2>
          <p> A rouge-like adventure game initially created for the Google Game Jam. This project was co-founded with
            Three other members: Ronnie Burns, Taliyah Rivera, and Chiyle Briggins </p>

          <a href={Timefalldocument} download="Timefall documentation" target='_blank'>
            <button type="button"
                    className='button'
                    onClick={handleClick}>Learn More!
            </button>
          </a>

          {isMobile && <a href={Timefalldocument} download="Timefall documentation" target='_blank'>
            <button type="button"
                    className='sidebutton'
                    onClick={handleClick}>Learn More!
            </button>
          </a>}

        </div>
        <br></br>
        <br></br>

        {isDesktop && <div className='ProjectImages'>
          <img src={PythonCreatives} alt='Affirmio Homepage'/>
        </div>}
        <div className='ProjectsSections'>
          <h1>School Projects</h1>
          <h2>Creatives App: </h2>
          <p>Python integration with SQL to make a simulated App for Creative guidance</p>

          {isMobile && <a href={PythonProject} download="Source Code" target='_blank'>
            <button type='button'
                    className='sidebutton'>Learn More!
            </button>
          </a>
          }

          <a href={PythonProject} download="Source Code" target='_blank'>
            <button type='button'
                    className='button'>Learn More!
            </button>
          </a>
        </div>

        {isDesktop && <div className='ProjectImages'>
          <img src={ConnectzPic} alt="Picture of a screen"/>
        </div>}
        <div className="ProjectsSections">
          <h2>Connectz App: </h2>
          <p>An application for connecting small businesses to clients</p>

          <a href={ConnectzApp} download="Source Code" target='_blank'>
            <button type='button'
                    className='button'>Learn More!
            </button>
          </a>

          {isMobile && <a href={ConnectzApp} download="Source Code" target='_blank'>
            <button type='button'
                    className='sidebutton'>Learn More!
            </button>
          </a>}

        </div>

        <br></br>
        <br></br>
        <br></br>

      </main>

      <a
          className="App-link"
          href="https://github.com/Zorangewonder58"
          target="_blank"
          rel="noopener noreferrer"
          style={center}
      >
        <h1>Please Check out my Github!</h1>
      </a>

      </body>
    </div>


          <ContactFooter/>
        </div>
        }

      {isMobile &&
          <div className="Projects" id='main' style={{marginLeft: isOpen ? '250px' : '0'}}>
            <header>

              <h1>
                Welcome to my Portfolio!
              </h1>
            </header>

            <div id='content-wrap' style={{translateX: isOpen ? '-250px' : '0'}}>

              <body>


              <main>


                {!isOpen && <div className='ProjectImagesMobile'>
                  <img src={AffirmMotiv} alt='Affirmio Homepage'/>
                </div>}

                <h1> Personal Projects</h1>
                <div className='ProjectsSections'>

                  <h2>Affirm.io: </h2>

                  <p> A desktop application that returns motivations from a database and allows users to add to it.
                    Created using
                    IntelliJ and JavaFX </p>


                  <a href={Affirmio} download="Affirm" target='_blank'>
                    <button type="button" className='button' onClick={handleClick}>Learn More!</button>
                  </a>


                </div>
                <br></br>
                <br></br>

                {!isOpen && (<div className='ProjectImagesMobile'>
                  <img src={ZOW} alt='Affirmio Homepage'/>
                </div>)}
                <div className='ProjectsSections'>
                  <h2>Z the Orange Wonder:</h2>
                  <p> A 3d hack and slash game created in Unity. The main character has powers of telekinesis and sword
                    fighting
                    abilities. This game features numerous levels including a boss fight at the end</p>
                  <a href={ZOWexe} download="ZOW executable" target='_blank'>
                    <button type="button"
                            className='button'
                            onClick={handleClick}>Learn More!
                    </button>
                  </a>


                </div>

                <br></br>
                <br></br>

                {!isOpen && (<div className='ProjectImagesMobile'>
                  <img src={GameJam} alt='Affirmio Homepage'/>
                </div>)}

                <div className='ProjectsSections'>
                  <h2>Timefall: </h2>
                  <p> A rouge-like adventure game initially created for the Google Game Jam. This project was co-founded
                    with
                    Three other members: Ronnie Burns, Taliyah Rivera, and Chiyle Briggins </p>

                  <a href={Timefalldocument} download="Timefall documentation" target='_blank'>
                    <button type="button"
                            className='button'
                            onClick={handleClick}>Learn More!
                    </button>
                  </a>


                </div>
                <br></br>
                <br></br>

                {!isOpen && (<div className='ProjectImagesMobile'>
                  <img src={PythonCreatives} alt='Affirmio Homepage'/>
                </div>)}

                <div className='ProjectsSections'>
                  <h1>School Projects</h1>
                  <h2>Creatives App: </h2>
                  <p>Python integration with SQL to make a simulated App for Creative guidance</p>


                  <a href={PythonProject} download="Source Code" target='_blank'>
                    <button type='button'
                            className='button'>Learn More!
                    </button>
                  </a>
                </div>

                {!isOpen && (<div className='ProjectImagesMobile'>
                  <img src={ConnectzPic} alt="Picture of a screen"/>
                </div>)}

                <div className="ProjectsSections">
                  <h2>Connectz App: </h2>
                  <p>An application for connecting small businesses to clients</p>

                  <a href={ConnectzApp} download="Source Code" target='_blank'>
                    <button type='button'
                            className='button'>Learn More!
                    </button>
                  </a>

                </div>

                <br></br>
                <br></br>
                <br></br>

              </main>

              <a
                  className="App-link"
                  href="https://github.com/Zorangewonder58"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={center}
              >
                <h1>Please Check out my Github!</h1>
              </a>

              </body>
            </div>


            <ContactFooter/>
          </div>

      }

        </div>



    );
}


export default Projects;