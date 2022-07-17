import React from "react";
import "../styles/Project.css";

function Project({project}) {

    return(
        <li className="card">
            <a href={project.deployed} style={{textDecoration: "none", color: "black"}} target="_blank" rel="noreferrer">
                <img className="image" src={project.image} alt={project.title} />
            </a>
            <div className="card-body">
                <h2 style={{marginTop: "1rem", fontSize: "1.25rem"}}>{project.title}</h2>
                <h3 style={{marginTop: "1rem", fontSize: "1.25rem"}}>{project.description}</h3>

                <a href={project.repo} target="_blank" rel="noreferrer">
                    <p className="github-button">Github Repository</p>
                </a>  
            </div>
         </li>
    )
}

export default Project;