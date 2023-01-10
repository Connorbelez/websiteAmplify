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