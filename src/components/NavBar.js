import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logoDark from '../assets/imgs/WebsiteLogo2021v2-dark.png'
import logoLight from '../assets/imgs/WebsiteLogo2021v2.png';

const NavBar = ({name, darkMode, setDarkMode}) =>{

    //dynamically updating page title
    const pageTitle = document.getElementById('pageTitle');

    if (name){
        const parsedName = name.split('-').map(str => {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }).join(' ');

        pageTitle.textContent = `Ammar Ahmed | ${parsedName}`
    }else{
        pageTitle.textContent = `Ammar Ahmed | Home`
    }

    //Function to switch classes for darkmode
    const switchClasses = (isDark, nodeList, classes, background=true) =>{
        //classes are always light, dark
        if (background){
            for (let i = 0; i < nodeList.length; i++){
                nodeList[i].classList.remove(`${isDark? classes[1] : classes[0]}`);
                nodeList[i].classList.add(`${isDark ? classes[0]: classes[1]}`);
            }
            
        }else{
            for (let i = 0; i < nodeList.length; i++){
                nodeList[i].classList.remove(`${isDark? classes[0] : classes[1]}`);
                nodeList[i].classList.add(`${isDark ? classes[1]: classes[0]}`);
            }
        }
    }

    //Function to call to switch to dark or light mode
    const toggleDark = isDark =>{

        const bgElems = document.querySelectorAll(`.bg-${isDark ? 'dark' : 'light'}`);
        const textElems = document.querySelectorAll(`.text-${isDark ? 'light': 'dark'}`);
        const activeElems = document.querySelectorAll(`.active-${isDark ? 'light' : 'dark'}`);
        const shadowElems = document.querySelectorAll(`.shadow-${isDark ? 'dark': 'light'}`);
        const shadowSmElems = document.querySelectorAll(`.shadow-${isDark ? 'dark' : 'light'}-sm`);

        const bgInvElems = document.querySelectorAll(`.bg-${isDark ? 'light' : 'dark'}-inv`);
        const textInvElems = document.querySelectorAll(`.text-${isDark ? 'dark': 'light'}-inv`);
        
        const bgAltXSElems = document.querySelectorAll(`.bg-${isDark? 'dark': 'light'}-alt-xs`);

        console.log(bgAltXSElems);
        
        const borderSideElems = document.querySelectorAll(`.border-side-${isDark ? 'light': 'dark'}`);

        const dmIcons = document.querySelectorAll('.darkmode-icons');

        switchClasses(isDark, bgElems, ['bg-light', 'bg-dark']);
        switchClasses(isDark, textElems, ['text-light', 'text-dark'], false);
        switchClasses(isDark, shadowElems, ['shadow-light', 'shadow-dark']);    
        switchClasses(isDark, shadowSmElems, ['shadow-light-sm', 'shadow-dark-sm']);
        switchClasses(isDark, bgInvElems, ['bg-light-inv', 'bg-dark-inv'], false);
        switchClasses(isDark, textInvElems, ['text-light-inv', 'text-dark-inv']);
        switchClasses(isDark, activeElems, ['active-light', 'active-dark'], false);
        switchClasses(isDark, borderSideElems, ['border-side-light', 'border-side-dark'], false);
        switchClasses(isDark, bgAltXSElems, ['bg-light-alt-xs', 'bg-dark-alt-xs']);

        if (isDark){
            dmIcons[0].classList.remove('activeDark');
            dmIcons[1].classList.add('activeDark');
            // nav.style.backgroundColor = 'var(--transparentbg-light)';
        }else{
            dmIcons[1].classList.remove('activeDark');
            dmIcons[0].classList.add('activeDark');
            // nav.style.backgroundColor = 'var(--transparentbg-dark)';
        }
    }

    useEffect(()=>{
        toggleDark(darkMode)
    }, [name, darkMode])

    // Darkmode Switch Toggle
    const toggle = (event) =>{
        const toggleTarg = event.target
        
        setDarkMode(toggleTarg.checked)
    }

    //Display Project Nav
    const displayProjectNav = () =>{
        const projectNav = document.getElementById('projectNav');
        const icon = document.getElementById('navMenuIcon');

        console.log('display project nav')
        console.log(name)
        if (name){
            projectNav.classList.toggle('d-none');
            projectNav.classList.toggle('d-flex');
            icon.classList.toggle('bx-menu');
            icon.classList.toggle('bx-plus')
        }
    }
    
    return (
        <nav className="navigation">
        <div className="container-fluid">
            <div className="row d-flex justify-content-between align-items-center">
                <Link to='/' className="col-lg-1 col-6">
                    <img src={darkMode ? logoLight: logoDark} alt="" className="img-fluid logo"></img>
                    
                </Link>

            
                <div className="col-lg-1 col-6 toggle-cont d-flex justify-content-end align-items-center">
                    <h1 className="darkmode-icons activeDark" id="darkIcon"><i className='bx bxs-moon' ></i></h1>
                    <label for="darkmodeToggle" className="toggle">
                        <input type="checkbox" id="darkmodeToggle" className="toggle-input" onChange={toggle} checked={darkMode}></input>
                        <div className="toggle-fill"></div>
                    </label>
                    <h1 className="darkmode-icons" id="lightIcon"><i className='bx bxs-sun' ></i></h1>
                    {
                        name ? <h1 className="text-light m-0 display-4 project-nav-menu" onClick={displayProjectNav}><i class='bx bx-menu' id="navMenuIcon"></i></h1> : null
                    }
                    
                </div>

            </div>
        </div>
    </nav>
    )
}

export default NavBar