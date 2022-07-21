import React from "react";
import "../styles/Project.css";

function Project({project}) {

    return(
        <ul className="grid">
            <li className="card">
                <a href={project.deployed} target="_blank" rel="noreferrer">
                    <img className="image" src={project.image} alt={project.title} key={project.image}/>
                </a>
                <div className="card-body">
                    <h3 className="title">{project.title}</h3>
                    <h4 className="description">{project.description}</h4>

                    <a href={project.repo} target="_blank" rel="noreferrer">
                        <p className="github-button">GitHub Repository</p>
                    </a>  
                </div>
            </li>    
        </ul>

    )
}

export default Project;