
import React from 'react';
import './App.css';
// import Hexagon from './Hexagon';
import Niche from './Niche';

import Me from './Me.jpg';
import city_lights from './city_lights.jpg';
import Forportfoliorb from './Forportfoliorb.png';
import pwkeeperone from './pwkeeperone.png';
import pwkeeperoneone from './pwkeeperoneone.png';


import TitleforMe from './TitleforMe';
import AnimatedTitle from './AnimatedTitle';
import AboutMeBox from './AboutMeBox';
import Qualifications from './Qualifications';
import ProgrammingLogos from './ProgrammingLogos';
import TerminalUbuntu from './TerminalUbuntu';
import Macbookproject from './Macbookproject';
import Portfoliotitle from './Portfoliotitle';
import TerminalUbuntumini from './TerminalUbuntumini';



function App(Topic,Message, link, Title) {
  return (
    <div className="App_body">

      <div className='Container_city-lights'>
      <img src={city_lights} className="App-city_lights" alt="city_lights" />

      </div>

     
    <div className="Parent_container">
    
      <Niche Topic = "Home" link=".About_parent" />
      <Niche Topic = "About"/>
      <Niche Topic = "Qualifications"/>
      <Niche Topic = "Projects"/>
      <Niche Topic = "Connect"/>
      
     
      </div>
      <div className="TitleforMe_container">
      <TitleforMe/>
      </div>
      
     
      <div class="photo_container">
     
      <img src={Me} className="App-Me" alt="Me" />
    
      </div>

      <div class="About_parent">

      <AnimatedTitle/>
      </div>
      <div class="About_me">
      <AboutMeBox/>
      
      



      </div>
      
      <div class="Portfolio_container">
      {/* amsndbnassnd */}
      <Portfoliotitle />
      {/* <Qualifications Title="Portfolio"/> */}
      </div>

      <div class="ProgrammingLogos_container">
      <ProgrammingLogos/>
      </div>
      
      <div class="TerminalUbuntu_container">
      <TerminalUbuntu/>
      {/* <Macbookproject/> */}
      </div>

      <div class="QualificationsTitle_container">
      <Qualifications/>
      </div>



      <div class="Projects_container">
      <img src={Forportfoliorb} class="Projects_container_Forportfolio" alt="Forportfolio"></img>
      <Macbookproject/>
      
  
      <TerminalUbuntumini Topic="
      This is a graphical user interface that lets you costumize your designs easily and once you???ve done that, you can proceed to uploading them automatically. This program has a mirrored vibe with the red bubble interface in the web. The title, description and tags boxes are positioned similarly. This all falls in the print on demand sphere. 
	      " Message="Normally, it would be time consuming to upoad from one design to another. I saw that it can be often be frustrating and tiring doing the same things over again and so, I slowly built this code to assist me in such a task. This now removes the limit that other similar subscription-based options one can scan on the internet.
        "/>

     
      </div>

      <div class="Projects_container2">
      <img src={pwkeeperone} class="Projects_container2_pwkeeperone" alt="pwkeeperone"></img>
      <img src={pwkeeperoneone} class="Projects_container2_pwkeeperoneone" alt="pwkeeperoneone"></img>
      <Macbookproject/>
  

      <TerminalUbuntumini Topic="
      This is graphical user interface that lets you store your different login credentials from various websites with ease. It eliminates if not lessen the number of failed attempts we often have when logging to our account for that particular site. It's like an alternate version of google password manager. You simply choose from the list and choose what emaiil you wish to see your designated password on.  " />
     
      </div>


     


    



      </div>
      
      // </div> 
 



  );
}

export default App;
