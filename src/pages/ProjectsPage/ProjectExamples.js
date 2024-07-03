import AffirmMotiv from "../images/Affirmio Motivation.png";
import Affirmio from "../assets/Affirm.io(Complete App).zip";
import ZOW from "../images/ZOW.png";
import ZOWexe from "../assets/ZOW executable.zip";
import GameJam from "../images/GameJam.jpg";
import Timefalldocument from "../assets/Timefall.txt";
import PythonCreatives from "../images/Pythoncreatives .png";
import PythonProject from "../assets/Python Database Project.zip";
import ConnectzPic from "../images/ConnectzAppPicture.png";
import ConnectzApp from "../assets/Connetz-main.zip";

function Affirmio() {

    return (

        <div className='ProjectImages'>
        <img src={AffirmMotiv} alt='Affirmio Homepage'/>
    </div>
    <h1> Personal Projects</h1>
    <div className='ProjectsSections'>

        <h2>Affirm.io: </h2>

        <p> A desktop application that returns motivations from a database and allows users to add to it. Created
            using
            IntelliJ and JavaFX </p>


        <a href={Affirmio} download="Affirm" target='_blank'>
            <button type="button" className='button' onClick={handleClick}>Learn More!</button>
        </a>


    </div>
    <br></br>
    <br></br>
)
    ;
}

function ZOW() {
   return ( <div className='ProjectImages'>
        <img src={ZOW} alt='Affirmio Homepage'/>
    </div>

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


    </div>);
}

function Timefall() {
    return(<div className='ProjectImages'>
        <img src={GameJam} alt='Affirmio Homepage'/>
    </div>

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


    </div>
    <br></br>
    <br></br>);
}

function Creatives() {
    return (<div className='ProjectImages'>
        <img src={PythonCreatives} alt='Affirmio Homepage'/>
    </div>
    <div className='ProjectsSections'>
        <h1>School Projects</h1>
        <h2>Creatives App: </h2>
        <p>Python integration with SQL to make a simulated App for Creative guidance</p>


        <a href={PythonProject} download="Source Code" target='_blank'>
            <button type='button'
                    className='button'>Learn More!
            </button>
        </a>
    </div>)
}

function Connectz() {
 return(<div className='ProjectImages'>
    <img src={ConnectzPic} alt="Picture of a screen"/>
</div>
<div className="ProjectsSections">
    <h2>Connectz App: </h2>
    <p>An application for connecting small businesses to clients</p>

    <a href={ConnectzApp} download="Source Code" target='_blank'>
        <button type='button'
                className='button'>Learn More!
        </button>
    </a>)}
