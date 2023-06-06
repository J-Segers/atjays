import React from 'react';
import "./Projects.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Project from "../../components/project/Project"

function Projects() {
    return (
        <>
            <Header />
            <main id={"main-projects"}>
                <Project src={"https://j-segers.github.io/teashop/"}/>
                <Project src={"https://j-segers.github.io/teashop/"}/>
            </main>
            <Footer />
        </>
       
    );
}

export default Projects;