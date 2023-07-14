import React, { useContext, useState } from 'react';
import "./Project.css";
import { PersonalProjectContext } from '../../context/PersonalProjectContext';
import { Link} from 'react-router-dom';

function Project({link, imgURL, alt, projectTitle, projectType}) {

    const [destination, setDestination] = useState("");

    const {setProjectLink, setPrevious} = useContext(PersonalProjectContext);

    function updateDestination(){
        setProjectLink(link);
        setPrevious(window.location.href);
        if(projectType === "practice") {
            setDestination("/personal-project");
        } else {
            setDestination(link);
        }
    }

    return (
        <Link className="project" onMouseOver={updateDestination} to={destination}>
            <img src={imgURL} alt={alt} />
            <article className="info">
                <h3>{projectTitle}</h3>
                <h3>{projectType}</h3>
            </article>
        </Link>
    );
}

export default Project;