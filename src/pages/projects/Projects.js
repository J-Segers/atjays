import React from 'react';
import "./Projects.css";
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import projectFiles from '../../data/projects';
import Project from '../../components/project/Project';


export default function Projects() {

    return (
        <>
        <Header />
            <main id={"main-projects"}>
            {projectFiles.map((item) => {
                            return <Project 
                            link={item.link} 
                            imgURL={item.img} 
                            alt={item.alt}
                            projectTitle={item.title}
                            projectType={item.type}
                            />
                        })}
            </main>
            <Footer />
        </>
    );

}

