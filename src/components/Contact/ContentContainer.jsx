import { BsPlusCircleFill } from 'react-icons/bs';
import { useState,useEffect } from 'react';
import ChannelBar from '../ChannelBar/CB';
import TopNav from "../TopNavigation/TopNav";

let gh = "Connorbelez"
let li = "connorb"
let email1 = "connor.belez@gmail.com"
let email2 = "connorbeleznay@cmail.carleton.ca"

//s:["Erik Johnson - Senior Systems Engineer @ QNX", "Mike Shane - Senior Software Developer @ QNX","Michael Chalupa - Senior FAE @ QNX"]

let r1 = ';';
let r2 = ";";
let r3 = "";
export const ContentContainer = ({topic,setTopic,text}) => {
let t = topic;
return (
    <div className='content-container1'>
      <TopNav title={t}/>
        <div className='content-list1'>

            <Post name="Email 1" timestamp={1} text={email1} />

            <Post name="Email 2" timestamp={2} text={email2} />

            <Post name="Github" timestamp={3} text={gh} />

            <Post name="LinkedIn" timestamp={4} text={li} />

            <Post name="Erik Johnson - Senior Systems Engineer @ QNX" timestamp={5} text={r1} />

            <Post name="Mike Shane - Senior Software Developer @ QNX" timestamp={6} text={r2} />
            <Post name="Michael Chalupa - Senior FAE @ QNX" timestamp={7} text={r3} />
        </div>

      <BottomBar />
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