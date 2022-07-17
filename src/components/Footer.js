import React from "react";
import "./styles/Footer.css";

function Footer() {
    return(
        <footer>
            <h2 className="reachOut">Feel free to reach out to me throught the following links:</h2>
            <nav >
                <ul className="footerNavbar">
                    <li>
                        <a href="https://github.com/T0rgy" target="_blank" rel="noreferrer"><i className="fab fa-github fa-5x footerIcon"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jacob-torgeson-a6ba11230/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-5x footerIcon"></i></a>
                    </li>

                    <li>
                        <a href="mailto:jctorge@gmail.com"><i className="fas fa-envelope fa-5x footerIcon"></i></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;