
import './styles/App.css';
import headshot from './images/Headshot.jpg';
import collegiatepic from './images/Collegiatepic.JPEG'
import { getCurrentDate, getMoment } from '../utils/Date';

import Navbar from './components/Navbar/Navbar';

import ContactFooter from './components/Footer';

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
    backgroundImage: `url(${collegiatepic})`,
    height: "100vh",
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255,255,255, 0.7)',
  };

  return (
    <><div className="Home" id='main' style={backgroundstyle}>
      <header className="Home-header">
        <h3>{Greeting}</h3>
        <h3>
         Welcome to my Website!
        </h3>
      </header>
      
      <body>
        <div className='bottom'>
       
        </div>
      </body>

    </div>
    </>
  );
}

export default Home;
