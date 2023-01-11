import { BsPlusCircleFill } from 'react-icons/bs';
import { useState,useEffect } from 'react';
import ChannelBar from '../ChannelBar/CB';
import TopNav from "../TopNavigation/TopNav";

let gh = "Connorbelez"
let li = "connorb"
let email1 = "connor.belez@gmail.com"
let email2 = "connorbeleznay@cmail.carleton.ca"

//s:["Erik Johnson - Senior Systems Engineer @ QNX", "Mike Shane - Senior Software Developer @ QNX","Michael Chalupa - Senior FAE @ QNX"]

let r1 = 'Connor has a strong ability to identify and learn the new skills/frameworks' +
    ' required to solve high-level problems. His good communication skills allow him' +
    ' to intelligently justify the decisions he makes. We worked together on a 10 person' +
    ' team tackling a short-timeline project and he was great to have on the team. ' +
    'He demonstrated an adaptability that helped him effectively fill multiple roles ' +
    'during his time with BlackBerry QNX. I highly recommend Connor and encourage any ' +
    'interviewer to ask about his personal projects as I found these very interesting.';
let r2 = "Connor is a smart and hard working Engineer that is not afraid to develop skills" +
    " required to take on the task at hand. Connor worked under me on a high visibility project " +
    "with an immovable deadline and was able to rapidly adjust priorities as required. " +
    "Connor has a strong grasp of fundamentals and is eager to learn. His communication s" +
    "kills are excellent and was able to articulate the nature of a problem quickly. " +
    "Connor's quirky and sarcastic sense of humour will be missed, I highly recommend" +
    " Connor if you need to get the job done.";
let r3 = "As a second term Co-op Connor took the experiences made during" +
    "the first term nad leveraged them successfully in the second term. Connor" +
    " was a solid contributor to the CES Demo team. Connor completed a number of " +
    "software development tasks along with resolving a bug that was critical " +
    "to the success of the demos. As a team member Connor did a great job mentoring" +
    " his team members and helping them quickly come up to speed on teh many " +
    "new technologies that are incorporated into the system. Connor did a great job being a " +
    "solid team member and leader during the second term.";
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

const Post = ({ name, timestamp, text, id}) => {


    const seed = Math.round(Math.random() * 100);
  return (
      <div className={'post'} id={name}>
      <div className='avatar-wrapper'>
          <img src={`CB2.ico`} alt='' className='avatar' />
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