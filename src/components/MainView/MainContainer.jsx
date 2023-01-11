import { BsPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import ChannelBar from '../ChannelBar/CB';
import { ContentContainer, BottomBar, ContentContainer1} from './Utility';
import { BG } from './HomePage';
import { ExampleComponent } from './TypeAnimation';
import {About} from "../About/About";
import TopNavigation from '../TopNavigation/TopNav';
import {WorkExperience} from '../WorkExperience/WorkExperience';
import {Projects} from "../Projects/Projects";
import {Contact} from "../Contact/Contact";

const MainContainer = (props) => {
  
    let cc = props.curComp
    console.log("curComp: "+cc);
    let theme = props.theme;
    let s = "<Connor Belenay/>";
    switch (cc){
      case "Home 💡":
        return (
          <div className='main-container' id="MC">
            <BG theme={theme} comp={cc}/>
            <div>
              <h1 className="absolute z-2 flex-center w-auto py-1 bottom-2/3
              font-bold mt-0 ml-0 mb-4 ml-16 lg:text-5xl inset-x-0 font-mono dark:text-green-500 text-black text-4xl
                text-center overflow-hidden leading-10 break-normal">
                {s} 
                </h1>
            </div>
            <div className="absolute z-2 w-auto content-center mr-0 top-1/3 overflow-hidden font-bold dark:text-white text-black text-3xl">
              <ExampleComponent />
            </div>
              
          </div>
      )
      case "About Me 💡":
        return (
          <About />
      )
      case "Work Experience 💡":
        return (
          <WorkExperience />

      )
      case "Projects 💡":
        return (
            <Projects />
      )
      case "Contact Info & Refrences 💡":
        return (
            <Contact />
      )
      default:
        return (
          <div className='main-container' id="MC">
              <ContentContainer text={"HOME D"}/>
          </div>
      )
    }
};

export default MainContainer;
