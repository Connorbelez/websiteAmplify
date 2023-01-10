
import './App.css';
import {SideBar} from './components/SideBar/SideBar';
import MainContainer from './components/MainView/MainContainer';
import {useState} from 'react';
import useDarkMode from './hooks/useDarkMode';
// const PageSwitchHandler = () => {
//   const [componentToShow, setComponentToShow] = useState("home");

// }

function App() {
  const [componentToShow, setComponentToShow] = useState("Home 💡");
  const [darkTheme, setDarkTheme] = useDarkMode();
  const pageSwitchHandler = (newVal) => {
    console.log("PAGE SWITCH HANDLER! :" + newVal );
    
    if(newVal !== componentToShow){
      setComponentToShow(newVal);
    }else{
      console.log("SAME AS BEFORE SKIPPING!");
    }
  }

  return (

    <div className='flex h-screen'>

        <SideBar pshOnClick={pageSwitchHandler} theme={darkTheme} setTheme={setDarkTheme} curComp={componentToShow}/>

        <MainContainer theme={darkTheme} curComp={componentToShow}/>



    {/*  <div className="drawer drawer-mobile">*/}
    {/*    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />*/}
    {/*    <div className="drawer-content flex flex-col items-center justify-center">*/}
    {/*      <MainContainer theme={darkTheme} curComp={componentToShow}/>*/}
    {/*      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>*/}

    {/*    </div>*/}
    {/*    <div className="drawer-side">*/}
    {/*      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>*/}
    {/*      <SideBar pshOnClick={pageSwitchHandler} theme={darkTheme} setTheme={setDarkTheme} curComp={componentToShow}/>*/}

    {/*    </div>*/}
    {/*  </div>*/}

    </div>

  );
}

export default App;
