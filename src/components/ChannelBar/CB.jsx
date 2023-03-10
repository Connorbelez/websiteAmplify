import { useState,useEffect } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];





const ChannelBar = ({topic,setTopic,headers,id}) => {

  return (
    <div className='channel-bar shadow-lg'>
      <ChannelBlock />
      <Headers setTopic={setTopic} topic={topic} headers={headers} link={id}/>
    </div>
  );
};

function Headers({setTopic,topic,headers,link}) {


    return (
        <div className='channel-container'>
            {headers.map(item => (
                <Dropdown setTopic={setTopic} topic={topic} header={item.h} selections={item.s} id={item.id} />
            ))}
        </div>
    );
}

const Dropdown = ({ header, selections, setTopic, topic, id}) => {
  const [expanded, setExpanded] = useState(true);

    //===================================================================================================




  //===================================================================================================
  return (
    <div className='dropdown'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
        <ChevronIcon expanded={expanded} />
        <h5
          className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
        >
          {header}
        </h5>
        <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} setTopic={setTopic} id={id}/>)}
    </div>
  );
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='14' className={chevClass} />
  );
};

const TopicSelection = ({ selection, setTopic, id}) => {
    const [anchorTarget, setAnchorTarget] = useState(null);

    useEffect(() => {
        setAnchorTarget(document.getElementById(selection));
    }, [selection]);

    const handleClick = event => {
        console.log("Handling click!");
        document.getElementById('my-drawer-2').click();
        event.preventDefault();
        setTopic(selection);
        anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return(
      <div className='dropdown-selection'>
        <BsHash size='24' className='text-gray-400' />

        <h5 className='dropdown-selection-text' onClick={handleClick}>{selection}</h5>
      </div>
);
}

const ChannelBlock = () => (
  <div className='channel-block'>
    <h5 className='channel-block-text'>Channels</h5>
  </div>
);

export default ChannelBar;
