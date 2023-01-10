import { useState,useEffect } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import ChannelBar from '../ChannelBar/CB';
import TopNavigation from '../TopNavigation/TopNav';
// import {ContentContainer, ContentContainer1} from '../MainView/Utility';
import ContentContainer from './ContentContainer';


const hds = [
    {
        h:"BlackBerry QNX F22",
        s:["Term 1","Term 2"]
    },
    {
        h:"BlackBerry QNX S22",
        s:["Term 1","Term 2"]
    },
    {
        h:"Carleton TA",
        s:["1405 - Intro to CS","2406 - Web Dev"]
    }
]



export const WorkExperience = () => {

    const [topic, setTopic] = useState("Intro");

    return (
        <div className='main-container' id="MC">
        
            <ChannelBar channel={"About"} topic={topic} setTopic={setTopic} headers={hds}/>           

            <ContentContainer topic={topic} setTopic={setTopic} ></ContentContainer>
            
        </div>
    )
}