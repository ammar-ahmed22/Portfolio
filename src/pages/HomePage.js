import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

import profilePic from '../assets/imgs/RedWaterlooEdit.jpg'
import wb from '../assets/imgs/wbmockup.png';
import reno from '../assets/imgs/undraw_under_construction_46pa.svg';
import flow from '../assets/imgs/flowmodorov3.png';

const HomePage = ({match, darkMode, setDarkMode}) =>{
    const name = match.params.name;
    
    return (
        <>
        <NavBar name={name} darkMode={darkMode} setDarkMode={setDarkMode}/>
        <section className="main" id="main">
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <p className="display-4 text-light fw-bold">
                        Hey I'm Ammar 👋 
                    </p>

                    <p className="text-light h4 my-3">
                        I’m a <strong>Nanotechnology Engineering</strong> student at the <strong>University of Waterloo</strong>. I hope to pursue a career in the field where <strong>biotechnology</strong> 🧬 and <strong>software development</strong> 💻 intersect.
                    </p>

                    <p className="text-light h4 my-3">
                        I’m a lifelong learner due to which I embark on various projects ranging from <strong>web development</strong> 🖥️ , <strong>app development</strong> 📱, and even some <strong>home renovation</strong>🔨
                    </p>

                    <p className="text-light h4 my-3">
                        I'm always up to taking on new projects so if you have anything in mind, feel free to <strong><a href="#">connect</a></strong> or take a look at my <strong><a href="#">resume.</a></strong>
                    </p>

                    <p className="text-light fw-lighter mt-3 h6">Technologies used to create and host this site:</p>
                    <p className="text-light fw-lighter h6">~ React (State management for darkmode persistence, modular content display)</p>
                    <p className="text-light fw-lighter h6">~ Bootstrap (Responsive styling, classes for darkmode switching)</p>
                    <p className="text-light fw-lighter mb-3 h6">~ Firebase (Hosting)</p>

                    <a href="#projects" className=" text-center fw-light text-decoration-none fs-6 scroll-btn d-flex justify-content-center align-items-center shadow-dark-sm">Projects <i class='bx bxs-down-arrow-alt' ></i></a>
                </div>
    
                <div className="col-md-6 d-flex justify-content-center align-items-center m-md-0 my-5">
                    <img src={profilePic} alt="" className="img-fluid shadow-dark img "></img>
                </div>
            </div>
        </div>
    </section>

    <section className="projects my-5" id="projects">
        <div className="container">
            <div className="row">
                <p className="display-4 text-light fw-bold text-center">Projects 🚧</p>
            </div>

            <div className="row d-flex justify-content-evenly align-items-end my-4">

                <div className="col-md-4 col-12 project-card shadow-dark d-flex justify-content-center align-items-center m-4 p-0 m-md-0" id="wb-proj">
                    <img src={wb} alt="" className="img-fluid project-img p-3"></img>

                    <div className="project-desc bg-light-inv ">
                        <p className="text-dark-inv text-center p-3 m-0 h5 fw-bold">WaterlooBasics</p>
                    </div>
                    <Link to="/waterloobasics" className="stretched-link"></Link>
                </div>
                <div className="col-md-4 col-12 project-card shadow-dark d-flex justify-content-center align-items-center m-md-0 m-4" id="reno-proj">
                    <img src={reno} alt="" className="img-fluid project-img p-3"></img>
                    <div className=" bg-light-inv " id="reno-id">
                        <p className="text-dark-inv text-center p-3 m-0 h5 fw-bold">Home Renovation</p>
                    </div>

                    <Link to='/home-renovation' className="stretched-link"></Link>
                </div>

                
            </div>

            <div className="row d-flex justify-content-center mb-5">
                <div className="col-md-4 col-12 project-card shadow-dark d-flex justify-content-center align-items-center" id="flow-proj">
                    <img src={flow} alt="" className="img-fluid project-img p-3"></img>
                    <div className="project-desc bg-light-inv ">
                        <p className="text-dark-inv text-center p-3 m-0 h5 fw-bold">Flowmodoro</p>
                    </div>

                    <Link to="/flowmodoro" className="stretched-link"></Link>
                </div>
                
            </div>
        </div>
    </section>

    
    </>
    )
}


export default HomePage