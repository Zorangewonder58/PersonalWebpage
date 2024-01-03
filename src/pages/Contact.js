
import './styles/App.css';
import headshot from './images/Headshot.jpg';
import { getCurrentDate, getMoment } from '../utils/Date';

import TechBackground from "./images/TechnologyBackground.png";

import Navbar from './components/Navbar/Navbar';

import ContactFooter from './components/Footer';
import ContactForm from '../utils/ContactForm';
import { useHref } from 'react-router-dom';

console.log(getMoment());

const currentMoment = getMoment('-')

const  script = document.createElement('script')
script.src = "https://platform.linkedin.com/badges/js/profile.js";

script.async = true;
document.body.appendChild(script);

let Greeting = "Hi There!"

if(currentMoment == "12-25")
   Greeting = "Merry Christmas!";
else if(currentMoment == "12-31")
   Greeting = "Happy New Years Eve!"
else if (currentMoment == "01-01")
   Greeting = "Happy New Year!"
else if (currentMoment == "06-09")
    Greeting = "Happy Birthday to Me!"



   /* <br></br>
   <div className="socials">
        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="jaden-adonal-williams" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/jaden-adonal-williams?trk=profile-badge"
        alt='Link to LinkedIn Profile'></a></div>
        
        <p></p>
        <a href="https://www.instagram.com/lj.will03/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>*/
    //
const example = "JSX"
function Contact() {

  const backgroundstyle = {
    backgroundImage: `url(${TechBackground})`,
  };

  function LinkedIn ()
  {
    const LinkedInUrl = "https://www.linkedin.com/in/jaden-adonal-williams/";

    window.open(LinkedInUrl, "_blank");
  };

  function Github ()
  {
    const GithubUrl = "https://github.com/Zorangewonder58";

    window.open(GithubUrl, "_blank");
    
  }
  return (
    <div className='Contact' id='main'>
    <header>
      <div >
      <h1>
       Feel free to Reach Out!
      </h1>
      </div>
    </header>

    <main>
      

        <h2>Anything Unclear?</h2>
        <h2>Would you like to talk further about me?</h2>
        
        <h3>Feel free to message me on the following social media</h3>
        <div className='social'>

        <button
        type='button'
        className='button'
        onClick={LinkedIn}
        >Click here for my LinkedIn</button>
        <button
          type='button'
          className='button'
          onClick={Github}
        >Click here for my Github</button>

        </div>

      <div className="ContactForm">
        <h2>Please fill out this form to get in contact with me</h2>
      <ContactForm />


      </div>
    </main>

    <ContactFooter />
    </div>
    
    
  );
}

export default Contact;
