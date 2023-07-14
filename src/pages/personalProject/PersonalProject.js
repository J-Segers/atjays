import React, { useContext} from 'react';
import "./PersonalProject.css";
import ProjectMenu from '../../components/projectMenu/ProjectMenu';
import { PersonalProjectContext } from '../../context/PersonalProjectContext';

export default function PersonalProject() {
    const { projectLink } = useContext(PersonalProjectContext);

    return (
        <div className="personal-container">
            <embed src={projectLink}/>
            <ProjectMenu />
        </div>
    );
}