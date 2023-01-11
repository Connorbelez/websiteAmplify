import { BsPlusCircleFill } from 'react-icons/bs';
import { useState,useEffect } from 'react';
import ChannelBar from '../ChannelBar/CB';
import TopNav from "../TopNavigation/TopNav";


let c1 = "Under Construction";
let c2 = "Under Construction";
let c3 = "Under Construction";
let c4 = "Under Construction";
let c5 = "Under Construction";

export const ContentContainer = ({topic,setTopic,text}) => {
let t = topic;
return (
    <div className='content-container1'>
      <TopNav title={t}/>
        <div className='content-list1'>

            <Post name="Virtual Tutor/Assistant - Embedded" timestamp={1} text={c1} />

            <Post name="GPT3 Powered Notes App" timestamp={2} text={c2} />

            <Post name="NLP for Email Chrome Extension" timestamp={3} text={c3} />

            <Post name="Rust Quant CLT" timestamp={3} text={c3} />

        </div>


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
          <img src={'CB2.ico'} alt='' className='avatar' />
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