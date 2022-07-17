import React from "react";
import "../styles/Resume.css";

function Resume() {
    return(
        <div>
            <a className="resume" href="./images/jacob-torgeson-resume.pdf" target="_blank" rel="noreferrer"><i className="far fa-file"></i> Resume Download</a>
            <h1>Web Develop Skills and Technologies</h1>
            <div className="proficiency-wrapper">
                <div className="frontend">
                    <h2 style={{textDecorationLine: "underline", fontSize: 30, color: "black"}}>Frontend:</h2>
                    <ul>
                        <li>
                            HTML5
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            Bootstrap
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            jQuery
                        </li>
                    </ul>
                </div>
                <div className="backend">
                    <h2 style={{textDecorationLine: "underline", fontSize: 30, color: "black"}}>Backend:</h2>
                    <ul className="backend">
                        <li>
                            MySQL
                        </li>
                        <li>
                            MongoDB
                        </li>
                        <li>
                            Express.js
                        </li>
                        <li> 
                            Node.js
                        </li>
                        <li>
                            Sequelize
                        </li>
                        <li>
                            Mongoose
                        </li>
                        <li>
                            GraphQL
                        </li>
                    </ul> 
                </div>

            </div>

        </div>
    )
}

export default Resume;