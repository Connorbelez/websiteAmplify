import { BsPlusCircleFill } from 'react-icons/bs';
import { useState,useEffect } from 'react';
import ChannelBar from '../ChannelBar/CB';
import TopNav from "../TopNavigation/TopNav";


const intro1 = "Hi there! Thank you for taking the time to checkout my website. My name is Connor Beleznay and I'm a 3rd year " +
    "Co-Op Student and TA at Carleton University pursing a Bachelors of Computer Science with Honors. Thus far my work experience" +
    " has been focused in the Embedded and IOT space, experience I gained through my 8 months at BlackBerry QNX on their Autonomous" +
    "Vehicles team, and their Embedded Edge AI team. My time at Blackberry rounded out my high level software skills with a crash course" +
    " in low level real time systems, hardware and robotics. Quite frankly I'm still figuring out exactly what subfield of software I want to " +
    "dedicate my life to. As you'll see from my various projects and experience my interest range from IOT to ML/DL to Quant to embedded to autonmous robotics to fullstack " +
    "web development and I'm excited to be diving into distributed computing, cloud computing=. I'm a fanatically curious person, I'm compelled to leave no stone unturned once I start down techincal rabbit " +
    "holes. Simply put I'm happiest when I'm given a problem I don't yet know how to solve, a problem that leads to creative problem " +
    "solving and research that leads to new knowledge/skills. Indeed it was the creative problem solving and bottomless well of knowledge " +
    "to gain and skills to master that captured my imagination and ignited my passion for Computer Science and Software." +
    " "
const MyJourney = "My path to studying computer science at Carleton has been long and winding one. Unlike some of my more decisive peers " +
    "besides playing Baseball I had no Idea what I wanted to do out of highschool. Thankfully I was actually pretty good at the great American " +
    "pass time and earned myself a full ride scholarship to UBC, where I signed with the T-Birds varsity team to play in the NAIA league. " +
    "During my time at UBC I studied Philosophy and Psychology, but I was really there to play ball. " +
    "The value of my time as a student athlete with the UBC T-Birds can't be understated, having to balance a 30 hour/week training schedule along with a full " +
    "course load taught me work ethic and time management, and working with UBC's world class coaches shaped my perception of criticism from something to feared " +
    "to something that should be sought out and valued. "+
    " Unfortunately I suffered repeated" +
    " injuries which ended my athletic aspirations. With no burning desire to be a psychologist, lack of employers seeking fulltime " +
    "under-grad philosophers, and my foolish ambitions of pro-sports put to rest I was left without a heading in a sea of uncertainty and " +
    "depression. Following my time at UBC I did the circuit of terrible jobs, door to door sales, landscapping, insurance sales, warehouse " +
    "picker, and finally executive assistant. Then came the 2020 Apocalypse and like many I had a lot of time on my hands, I saw an add " +
    "for Harvard's CS-50 class, introduction to computer science, which was to be offered online completely free. That add changed my life. " +
    "I was immediately hooked. I became addicted to computational thinking, creative problem solving, and to building things. Reflecting on this" +
    " on how I felt during this time, the only way I can describe it was falling in love, how else could one describe finding their passion. "

const h1 = "Miniature painting"

const h2 = "Prior to my attendance at Careleton University I never shot Trap and Skeet, but once a friend convinced me to try it out I was hooked," +
    " I found it to be a much needed catharsis, and an almost meditative passtime where not thinking is the name of the game, as well as an outlet for my competitive " +
    " side. "

const h3 ="When I was 14 years old my father gave gifted me a frame from a 1976 Harley Davidson Sportster, and told me that if I was willing " +
    "to put in the work the bike would be mine. I spent the next 2 years working on the bike with my father, learning how to weld, paint, rebuild engines, make and follow" +
    "wiring diagrams. Although I was excited to finish the bike and be able to ride it the real gift was the opportunity to build something with my Dad. This " +
    "project ignited a love of building things that a decade later would drive my passion for software. The experience was so great that 2 years later, with the " +
    "bike basically completed my father upted my 14th birthday present with a 1978 Mustang Cobra II 302 V8, that needed a lot of work. So the process " +
    "repeated itself, for the next two years we restored this classic car to its former glory and I was able to drive it across the country on my way to the" +
    " University of British Columbia for my first year of school."


export const ContentContainer = ({topic,setTopic,text}) => {
let t = topic;
return (
    <div className='content-container1'>
      <TopNav title={t}/>
        <div className='content-list1'>

            <Post name="Intro" timestamp={1} text={intro1} />

            <Post name="My Journey" timestamp={2} text={MyJourney} />

            <Post name="Carleton Trap & Skeet Team" timestamp={3} text={h2} />

            <Post name="Classic Car/Bike Restoration" timestamp={4} text={h3} />

            <Post name="Miniature painting & Tabletop" timestamp={5} text={h1} />

            <Post name="Philosophy" timestamp={5} text={h1} />
        </div>

      <BottomBar />
    </div>
);

};

const BottomBar = () => (
<div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
</div>
);

const Post = ({ name, timestamp, text, id}) => {


    const seed = Math.round(Math.random() * 100);
  return (
      <div className={'post'} id={name}>
      <div className='avatar-wrapper'>
          <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
          <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
          </p>
          <p className='post-text'>{text}</p>
      </div>
      </div>
);
};

const PlusIcon = () => (
    <BsPlusCircleFill
      size='22'
      className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
    />
  );
  
export default ContentContainer