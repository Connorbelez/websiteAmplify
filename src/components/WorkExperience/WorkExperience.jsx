import { useState,useEffect } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';
import ChannelBar from '../ChannelBar/CB';
import TopNavigation from '../TopNavigation/TopNav';
// import {ContentContainer, ContentContainer1} from '../MainView/Utility';
import ContentContainer from './ContentContainer';
import MainContainer from "../MainView/MainContainer";
import {SideBar} from "../SideBar/SideBar";


const hds = [
    {
        h:"1. BlackBerry QNX",
        s:["1. Title","1. Description","1. Technologies","1. Accomplishments","1. Reflections"],
        id:1
    },
    {
        h:"2. TA - COMP2406 Web Dev",
        s:["2. Title","2. Description","2. Responsibilities","2. Technologies","2. Accomplishments"],
        id:2
    },
    {
        h:"3. TA - COMP1405 Intro to CS",
        s:["3. Title","3. Description","3. Responsibilities","3. Technologies","3. Accomplishments"],
        id:3
    }
]



export const WorkExperience = () => {

    const [topic, setTopic] = useState("Intro");

    return (
        <div className='main-container' id="MC">

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col items-center justify-center">
                    {/*<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>*/}
                    <ContentContainer topic={topic} setTopic={setTopic} ></ContentContainer>
                    {/*<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>*/}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ChannelBar channel={"About"} topic={topic} setTopic={setTopic} headers={hds}/>

                </div>
            </div>



            {/*<ChannelBar channel={"About"} topic={topic} setTopic={setTopic} headers={hds}/>           */}

            {/*<ContentContainer topic={topic} setTopic={setTopic} ></ContentContainer>*/}



        </div>
    )
}