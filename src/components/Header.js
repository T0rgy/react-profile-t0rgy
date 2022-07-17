import React from "react";
import { useState } from "react";
import Project from "./pages/Project";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ContactForm from "./pages/ContactForm";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import "./styles/Header.css"


function Header() {
    const [currentPage, setCurrentPage] = useState("About Me");
    
    const handlePageRender = () => {
        switch(currentPage) {
            case "About Me": {
                return(<AboutMe />);
            }
            case "Projects": {
                // pass props that give the project data, title, image, technologies used?
                const projects = [
                {
                    title: "Book Bits",
                    image: "./images/Book-bits-homepage-screenshot.png",
                    repo: "https://github.com/Mazattack1999/book-bits",
                    deployed: "https://book-bits-blog.herokuapp.com/",
                    description: "A fullstack forum website to discuss and review users favorite books."
                },
                {
                    title: "Nasa-Spirit",
                    image: "./images/nasa-spirit-groupProject.png",
                    repo: "https://github.com/aubree-alexander/the-nasa-spirit",
                    deployed: "https://aubree-alexander.github.io/the-nasa-spirit/",
                    description:"A website that allows the end user to obtain the current weather from an Nasa's API."
                },
                {
                    title: "MERN SPA Project",
                    image: "../images/",
                    repo: "/",
                    deployed: "/",
                    description: "Coming Soon!"
                },

                ]
                return(
                    <div>
                        <h3 style={{marginLeft: "2%"}}>Click the image to be directed to the application site.</h3>
                        <ul className="card-wrapper">
                            {projects.map((project) => {
                                return <Project project={project} />;
                            })}
                        </ul>
                    </div>
                    
                );
            }
            case "Contact Me": {
                return (<ContactForm />);
            }
            case "Resume": {
                return (<Resume />);
            }
            default: {
                console.log("Something went wrong");
                break;
            }
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {handlePageRender()}
            <Footer />
        </div>
        );
}

export default Header;