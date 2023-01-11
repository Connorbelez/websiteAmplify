import { useState } from 'react';
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

import {BsReverseLayoutTextSidebarReverse} from 'react-icons/bs'
import useDarkMode from '../../hooks/useDarkMode';

const TopNavigation = ({title}) => {
  return (
    <div className='top-navigation'>
        <ExpandIcon />
      <HashtagIcon />
      <Title text={title}/>
      <ThemeIcon />
      <Search />
      <BellIcon />
      {/*<UserCircle />*/}
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon' />
      ) : (
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};

const Search = () => (
  <div className='search'>
    <input className='search-input' type='text' placeholder='Search...' />
    <FaSearch size='18' className='text-secondary my-auto' />
  </div>
);

const ExpandIcon = () => {
    return (
        <div>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                <BsReverseLayoutTextSidebarReverse size='24' className='top-navigation-icon' />
            </label>
        </div>

    )
};
const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
const HashtagIcon = () => {
    return(
        <div>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                <FaHashtag size='20' className='title-hashtag' />
            </label>
        </div>

    )
};
const Title = ({text}) => <h5 className='title-text'>{text}</h5>;

export default TopNavigation;
