'use-client'
import { ThemeChangeContext, ThemeContext } from 'app/context';
import { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';
import logoDark from '../../public/logo_dark_1024.png'
import logoLight from '../../public/logo_light_1024.png'
//import navstyle from './navstyle.module.css';
let toggleIconDark = <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>;
let toggleIconLight = <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
                          fillRule="evenodd" 
                          clipRule="evenodd">
                        </path>;
export default function NavBar() {
  const [expand, makeExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);
  let [toggleIcon, changeIcon] = useState(toggleIconDark);
  const theme = useContext(ThemeContext);
  const switchTheme = useContext(ThemeChangeContext);
  const logo = theme === 'light' ? logoDark
    : logoLight;
  
  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  }

  function changeTheme() {
    if(theme==='light'){
        // Current Theme Light is moving to Dark mode
        // Set Light Icon to switch at light mode
        changeIcon(toggleIconLight);
    }else{
      // Current Theme Dark is moving to Light mode
        // Set Dark Icon to switch at Dark mode
      changeIcon(toggleIconDark);
    }
    switchTheme(theme, true);
  }

  useEffect(() => {
    console.log('navbar use effect');
    const body = document.body;
    const toggleTheme = document.querySelector('#switch-toggle');
    const toggle = document.querySelector('.toggleInner');
    console.log(`toggle is null ${toggle==null || toggle==undefined} `);
    console.log(`toggleTheme is null ${toggleTheme==null || toggleTheme==undefined} `);
    window.addEventListener('scroll', scrollHandler);
    if (theme === "dark" && toggle != null && toggle != undefined) {
      console.log('add dark-mode');
      toggleTheme?.classList.remove('-translate-x-2');
      toggleTheme?.classList.add('translate-x-full');
      toggle.classList.add("toggle-active");
    } else {
      console.log('remove dark-mode');
      toggleTheme?.classList.remove('translate-x-full');
      toggleTheme?.classList.add('-translate-x-2');
      toggle?.classList.remove("toggle-active");
    }
  }, [theme]);

  return (
    <nav 
      className='flex flex-nowrap flex-row justify-start fixed w-full 
                 pr-8 pl-8 pt-1 pb-1'>
      <div className='flex flex-nowrap text-center max-w-screen-xl mr-auto ml-auto pl-3 pr-3 w-full justify-between'>
        <a href="/" className='flex flex-grow-0 flex-shrink-1 p-1 mr-4'>
          <Image src={logo} 
            className="w-16" 
            alt="Carmine Sacco" 
            width="48"
            height="40"/>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" 
          className="toggleInner inline-flex items-center p-2 w-10 h-10 
            justify-center text-sm text-gray-500 rounded-lg md:hidden 
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="flex flex-grow flex-row items-center" id="navbar-default">
          <ul className=" font-normal text-black-900 flex flex-row
            items-center p-4 space-x-4 ml-auto d:p-0 mt-4 md:mt-0">
            <li>
              <a href="/" 
                className='block py-2 pl-3 pr-4 dark:text-white 
                  after:rounded-2xl after:block 
                  after:transition-all 
                  after:duration-300 after:ease-out
                  after:h-1 after:w-0 after:bg-primaryLight
                  dark:after:bg-primaryDark
                  hover:after:w-full' 
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/about" 
                className='block py-2 pl-3 pr-4 dark:text-white 
                  after:rounded-2xl after:block 
                  after:transition-all 
                  after:duration-300 after:ease-out
                  after:h-1 after:w-0 after:bg-primaryLight
                  dark:after:bg-primaryDark
                  hover:after:w-full'>
                About
              </a>
            </li>
            <li>
              <a href="/project" 
                className='block py-2 pl-3 pr-4 dark:text-white 
                  after:rounded-2xl after:block 
                  after:transition-all 
                  after:duration-300 after:ease-out
                  after:h-1 after:w-0 after:bg-primaryLight
                  dark:after:bg-primaryDark
                  hover:after:w-full'>
                Projects
              </a>
            </li>
            <li>
              <a href="/resume" 
                className='block py-2 pl-3 pr-4 dark:text-white 
                  after:rounded-2xl after:block 
                  after:transition-all 
                  after:duration-300 after:ease-out
                  after:h-1 after:w-0 after:bg-primaryLight
                  dark:after:bg-primaryDark
                  hover:after:w-full'>
                Resume
              </a>
            </li>
            <li hidden>
              <a href="/blog" 
                className='block py-2 pl-3 pr-4 dark:text-white 
                  after:rounded-2xl after:block 
                  after:transition-all 
                  after:duration-300 after:ease-out
                  after:h-1 after:w-0 after:bg-primaryLight
                  dark:after:bg-primaryDark
                  hover:after:w-full'>
                Blog
              </a>
            </li>
            <li>
              <button className="w-12 h-5 rounded-full bg-black-800 flex 
                items-center transition duration-300 focus:outline-none shadow
                dark:bg-white"
                onClick={() => changeTheme()}>
                <div id="switch-toggle" 
                  className="w-7 h-7 relative rounded-full transition 
                    duration-500 transform bg-primaryDark -translate-x-2 p-1 
                    text-black-900">
                  <svg id="theme-toggle-icon" 
                    className="w-5 h-5" 
                    fill="white" 
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    {toggleIcon}
                  </svg>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}