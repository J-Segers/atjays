import React from 'react';
import "./Project.css";

function Project({link, url, alt, projectTitle, projectType}) {
    return (
        <div className="project">
            <a href={link}>
                <img src={url} alt={alt} />
            </a>
            <article className="info">
                <h3>{projectTitle}</h3>
                <h3>{projectType}</h3>
            </article>
        </div>
    );
}

export default Project;