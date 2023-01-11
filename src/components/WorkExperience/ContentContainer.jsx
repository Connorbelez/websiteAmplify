import { BsPlusCircleFill } from 'react-icons/bs';
import { useState,useEffect } from 'react';
import ChannelBar from '../ChannelBar/CB';
import TopNav from "../TopNavigation/TopNav";


const title = "Applications Engineer - Autonomous Vehicles Team (04/2022-08/2022)\n\n Software Engineer - Embedded Edge AI Team (08/2022-01/2023)";
const description = 'During my first term I led a team of 3 co-op engineers where we had full owner' +
    'ship over a project designed to give the FAE’s a mobile platform to demon' +
    'strate QNX’s capabilities in context of autonomous vehicles. I had a large ' +
    'degree of agency in what I wanted to work on and was allowed the freedom ' +
    'to design and implement complex systems. The second work term was a much different experience as I was placed on a ' +
    'team working on an actual product with an actual paying client that would ' +
    'be shown at CES 2023, with a very real and very tight deadline. ' +
    'During this term I participated in weekly stand up meetings where sprint ' +
    'goals were assigned to me. Though I did not have the freedom to work on ' +
    'what I wanted, I did have the ability to make design decisions within my ' +
    'limited scope, given I could justify them adequately.'


const tech = 'C/C++, RTOS, Linux, CI-CD, Python, DDS, ROS2, QNX, SSH, RP-LiDAR, OpenCV, Camera'


const Achievements = 'Under Construction'
const reflections = 'Under Construction'



export const ContentContainer = ({topic,setTopic,text}) => {
    let t = topic;
    return (
        <div className='content-container1'>
            <TopNav title={t}/>
            <div className='content-list1'>

                <Post name="1. Title" timestamp={1} text={title} />


                <Post name="1. Description" timestamp={2} text={description} />

                <Post name="1. Technologies" timestamp={3} text={tech} />

                <Post name="1. Accomplishments" timestamp={4} text={Achievements} />

                <Post name="1. Reflections" timestamp={5} text={reflections} />

            </div>

            {/*<BottomBar />*/}
        </div>
    );

};



const BottomBar = () => (
<div className='bottom-bar'>
    {/*<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>*/}
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
</div>
);

const Post = ({ name, timestamp, text, id, content}) => {


    const seed = Math.round(Math.random() * 100);
    if (!content) {

        return (
            <div className='post' id={name}>
                <div className='avatar-wrapper'>
                    <img src={`CB2.ico`} alt='' className='avatar'/>
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
    } else {
        return (
        <div className='post' id={name}>
            <div className='avatar-wrapper'>
            <img src={`CB2.ico`} alt='' className='avatar'/>
            </div>
        <div className='post-content'>
            <p className='post-owner'>
                {name}
                <small className='timestamp'>{timestamp}</small>
            </p>
            {content}
        </div>
    </div>
        );
    }

};

const PlusIcon = () => (
    <div>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <BsPlusCircleFill
            size='22'
            className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
            />
        </label>

    </div>

  );
  
export default ContentContainer