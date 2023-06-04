import React from 'react';
import "./PersonalProject.css";
import ProjectMenu from '../../components/projectMenu/ProjectMenu';

function PersonalProject() {
    return (
        <div className="personal-container">
            <embed src="https://j-segers.github.io/teashop/" />
            <ProjectMenu />
        </div>
    );
}

export default PersonalProject;