import React from "react";
import "./styles/Footer.css";

function Footer() {
    return(
        <footer>
            <h2 style={{textAlign: "center", fontSize: "20px", marginTop: '20px'}}>Feel free to reach out to me throught the following links:</h2>
            <nav >
                <ul style={{margin: 40, position: "relative", bottom: 0}} className="footerNavbar">
                    <li>
                        <a className="footerLink" href="https://github.com/T0rgy" target="_blank" rel="noreferrer"><i className="fab fa-github fa-5x footerIcon"></i></a>
                    </li>
                    <li>
                        <a className="footerLink" href="https://www.linkedin.com/in/jacob-torgeson-a6ba11230/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-5x footerIcon"></i></a>
                    </li>

                    <li>
                        <a className="footerLink" href="mailto:jctorge@gmail.com"><i className="fas fa-envelope fa-5x footerIcon"></i></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;