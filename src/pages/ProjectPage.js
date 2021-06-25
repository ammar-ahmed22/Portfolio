import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

//content
import projectContent from '../components/projectContent';

//images
import wb from '../assets/imgs/wbmockup.png';
import reno from '../assets/imgs/undraw_under_construction_46pa.svg';
import flow from '../assets/imgs/flowmodorov3.png';
import wbdesign from '../assets/imgs/wbdesign.png';
import excel from '../assets/imgs/excel.png';
import before from '../assets/imgs/BeforeReno.png';
import after from '../assets/imgs/AfterReno.png';

const images = [
    {
        name: 'waterloobasics',
        image: wb
    },
    {
        name: 'home-renovation',
        image: reno
    },
    {
        name: "design-image",
        image: wbdesign
    },
    {
        name: 'flowmodoro',
        image: flow
    },
    {
        name: 'home-renovation-before',
        image: before
    },
    {
        name: "home-renovation-after",
        image: after
    },
    {
        name: "home-renovation-excel",
        image: excel
    }
]

const ProjectPage = ({match, darkMode, setDarkMode}) =>{

    const name = match.params.name;


    const project = projectContent.filter(item =>{
        return item.name === name;
    })[0]

    const image = images.filter(item =>{
        return item.name === name;
    })[0].image
    
    let indexOfPage = null;

    for (let i = 0; i < projectContent.length; i++){
        if (projectContent[i].name === name){
            indexOfPage = i
        }
    }

    const pageControls = (index, projectContent) =>{
        if (index === 0){
            return (
                <Link to={projectContent[index + 1].name} className="project-btn text-decoration-none mx-2 project-control text-center shadow-dark-sm rounded rounded-pill" onClick={closeProjectNav}>Next <i class='bx bx-right-arrow-alt' ></i></Link>
            )
        }else if (index !== 0 && index !== projectContent.length - 1){
            return (
                <>
                <Link to={projectContent[index - 1].name} className="project-btn text-decoration-none mx-2 project-control text-center shadow-dark-sm rounded rounded-pill" onClick={closeProjectNav}><i class='bx bx-left-arrow-alt' ></i> Previous</Link>
                <Link to={projectContent[index + 1].name} className="project-btn text-decoration-none mx-2 project-control text-center shadow-dark-sm rounded rounded-pill" onClick={closeProjectNav}>Next <i class='bx bx-right-arrow-alt' ></i></Link>
                </>
            )
        }else{
            return (
                <Link to={projectContent[index - 1].name} className="project-btn text-decoration-none mx-2 project-control text-center shadow-dark-sm rounded rounded-pill" onClick={closeProjectNav}><i class='bx bx-left-arrow-alt' ></i> Previous</Link>
            )
        }
    }

    const closeProjectNav = () =>{
        const match = window.matchMedia("(max-width: 768px)");
        const projectNav = document.getElementById('projectNav');
        const icon = document.getElementById('navMenuIcon');

        if (match.matches){
            projectNav.classList.toggle('d-flex');
            projectNav.classList.toggle('d-none');
            icon.classList.toggle('bx-menu');
            icon.classList.toggle('bx-plus');
        }
    }

    console.log(`index of page: ${indexOfPage}`)


    console.log(project)

    return (
        <>
        <NavBar name={name} darkMode={darkMode} setDarkMode={setDarkMode}/>

    

        <div className="container my-4">
            <div className="row">
                <h1 className="text-light text-center fw-bold project-title display-1">{project.content.title}</h1>
            </div>

            <div className="row d-flex justify-content-center my-4">
                <div className="col-lg-6 projectpage-card shadow-dark" style={{backgroundColor:project.content.color}}>
                    <img src={image} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
        
        <div className="container my-4">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-12">
                    <div className="context-content my-4">
                        {
                            project.content.contextContent.map(item =>{
                                return (
                                    <h6 className="text-light fw-light"><b>{item.type}</b> : {item.text}</h6>
                                )
                            })
                        }
                    </div>
                    <div className="text-content">
                    {
                    project.content.textContent.map(item => {
                        if (item.type === 'title'){
                            return (
                                <h2 className="text-light my-3 fw-bold fs-1" id={item.text.split(' ').join('-')}>{item.text}</h2>
                            )
                        }else if (item.type === 'para'){
                            return (
                                <p className="text-light fs-5">{item.text}</p>
                            )
                        }else if (item.type === 'image'){
                            return (
                                <figure className="figure">
                                    <img src={images.filter(imgItem => {
                                    return imgItem.name === item.name
                                })[0].image} alt="" className="figure-img img-fluid rounded shadow-dark"/>
                                    <figcaption className="figure-caption text-center">{item.caption}</figcaption>
                                </figure>
                                
                            )
                        }else if (item.type === 'button'){
                            return (
                                <a href={item.link} target="_blank" className="project-btn text-decoration-none fw-light shadow-dark-sm my-4 rounded rounded-pill">{item.text} <i class='bx bxs-right-arrow-alt link-arrow'></i></a>
                            )
                        }else if (item.type === 'subtitle'){
                            return (
                                <h3 className="text-light my-3 fw-bold fs-3">{item.text}</h3>
                            )
                        }else if (item.type === 'ordered-list'){
                            return (
                                <ol className="text-light fs-5">
                                    {
                                        item.text.map(listItem => {
                                            return (
                                                <li>{listItem}</li>
                                            )
                                        })
                                    }
                                </ol>
                            )
                        }
                    })
                }
                    </div>
                </div>
                
            </div>
        </div>

        <div className="project-nav-cont col-md-2 col-8 d-md-flex d-none flex-column justify-content-center bg-dark-alt-xs " id="projectNav">
            <Link to="/" className="project-btn text-decoration-none mx-2 text-center project-control shadow-dark-sm rounded rounded-pill">Home <i className="bx bxs-home"></i></Link>
            <ul className="project-nav border-side-light my-4">
                {
                    project.content.textContent.map(item =>{
                        if (item.type === 'title'){
                            return (
                                <li className="project-nav-item "><a href={`#${item.text.split(' ').join('-')}`} className="project-nav-link text-decoration-none text-light fs-4 " onClick={closeProjectNav}>{item.text}</a></li>
                            )
                        }
                    })
                }
            </ul>
            
            <div className="project-nav-buttons d-flex">
                {
                    pageControls(indexOfPage, projectContent)
                }
            </div>
           
        </div>
        
        </>
        
    )
}

export default ProjectPage