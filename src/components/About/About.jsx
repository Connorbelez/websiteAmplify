import { useState,useEffect } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import ChannelBar from '../ChannelBar/CB';
import TopNavigation from '../TopNavigation/TopNav';
// import {ContentContainer, ContentContainer1} from '../MainView/Utility';
import ContentContainer from './ContentContainer';


const hds = [
    {
        h:"About",
        s:["Intro","My Journey"]
    },
    {
        h:"Hobbies/ECs",
        s:["Carleton Trap & Skeet Team","Classic Car/Bike Restoration","Miniature Painting & Tabletop","Philosophy"]
    }
]



export const About = () => {

    const [topic, setTopic] = useState("Intro");

    return (
        <div className='main-container' id="MC">
        
            <ChannelBar channel={"About"} topic={topic} setTopic={setTopic} headers={hds}/>           

            <ContentContainer topic={topic} setTopic={setTopic} ></ContentContainer>
            
        </div>
    )
}