
import './styles/App.css';
import headshot from './images/Headshot.jpg';
import { getCurrentDate, getMoment } from '../utils/Date';

import Navbar from './components/Navbar/Navbar';

import ContactFooter from './components/Footer';

import Developerimg from './images/Developer.jpg'
import ProgramBackground from './images/ProgramBackground.jpg'
import SoftDeveloperimg from './images/SoftDeveloper.jpg'

console.log(getMoment());

const currentMoment = getMoment('-')

let Greeting = "Hi There!"

if(currentMoment == "12-25")
   Greeting = "Merry Christmas!";
else if(currentMoment == "12-31")
   Greeting = "Happy New Years Eve!"
else if (currentMoment == "01-01")
   Greeting = "Happy New Year!"
else if (currentMoment == "06-09")
    Greeting = "Happy Birthday to Me!"

    //
const example = "JSX"
function Home() {

  const backgroundstyle = {
    backgroundImage: `url(${ProgramBackground})`,
    height: "100vh",
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255,255,255, 0.7)',
  };

  const borderright = {
    borderRight: '4px solid black',
  };

  const borderleft = {
    borderLeft: '4px solid black',
  }
  return (
    <><div className="Aspirations" id='main'>
      <div id='content-wrap'>
      <header>
        <h1>
          Welcome to my future
        </h1>
      </header>

      <body>
        <div className='AspirationImage'>
        <img src={Developerimg} alt='Developer'/>
        </div>

        <div className='AspirationSection' style={borderright}>
        <p>Since I've been eleven, I have been making video games and projects. It has always been my dream to one day design video games on a large scale.</p>
        <p>One day, I would make franchises to the level of Assassins Creed, Call of Duty, and Pokemon. That is my dream</p>
      </div>

      <div className='AspirationImageRight'>
        <img src={SoftDeveloperimg} alt='Developer'/>
        </div>

      <div className='AspirationSection' style={borderleft}>
        <p>As I've matriculated through College, I have started to have Aspirations in Software Development. I've grown a desire to learn more than just game development</p>
        <p>I wanted to learn as much as possible about the different applications of code and the power of programming</p>
      </div>

  <h1>How I've been working towards this</h1>

  <h3>Independent Projects</h3>

<p>When aspiring to be a developer, it is important to build your skills on your own. This can't be done in the classroom, it can only be done through independent research and experience. This can be done through personal projects, solving leetcode problems, etc. It is crucial that a developer is always learning. For this reason, I have started numerous  projects on my own to build my knowledge. This includes: An app in JavaFX, this Website, and some indie games to name a few. Pursuing these projects have taught me alot about what it means to be a developer and to problem solve.
</p>

<h3>Education</h3>

<p>For the past few years, I have been pursuing a bachelors in Computer Science at Florida Agricultural and Mechanical University. Before I attended this program, I had a vested interest in computer science, however it grew stagnant. So much so, that I initially majored in architecture. Since changing my major, my love for computer science has only grew. Attending this school has made me more curious and more passionate about the field. The more that I learn, the more I want to learn.</p>
      </body>
      </div>

      <ContactFooter />
    
    </div>
    </>
  );
}

export default Home;
