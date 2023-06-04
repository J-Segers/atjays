import React, { useState } from 'react';
import "./ProjectMenu.css";
import { Link } from 'react-router-dom';
import githubLogo from "../../assets/github-mark.png";
import back from "../../assets/return.png";

function ProjectMenu() {

    const [ isOpen, setIsOpen] = useState(false);

    const github = "https://github.com/J-Segers/teashop";

    return (
        <>
            <div className='project-menu-container'>
                <div className='project-menu' onClick={()=> setIsOpen(!isOpen)}>
                    <div className={isOpen ? "hamburger-open" : "hamburger-closed"}></div>
                </div>
                <Link className={isOpen ? 'return-open' : 'return-closed'} to={"/projects"}>
                        <img src={back} alt="" />
                </Link> 
                <Link className={isOpen ? 'github-open' : 'github-closed'} to={github}>
                    <img src={githubLogo} alt="" />
                </Link>
            </div>
        </>
    );
}

export default ProjectMenu;