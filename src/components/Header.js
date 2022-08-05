import React from "react";
import { useState } from "react";
import Project from "./pages/Project";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ContactForm from "./pages/ContactForm";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";


function Header() {
    const [currentPage, setCurrentPage] = useState("About Me");
    
    const handlePageRender = () => {
        switch(currentPage) {
            case "About Me": {
                return(<AboutMe />);
            }
            case "Projects": {
                // pass props that give the project data, title, image, technologies used
                const projects = [
                {
                    title: "Book Bits",
                    image: "/react-profile-t0rgy/images/book-bits-homepage-screenshot.png",
                    repo: "https://github.com/Mazattack1999/book-bits",
                    deployed: "https://book-bits-blog.herokuapp.com/",
                    description: "A fullstack forum website to discuss and review users favorite books."
                },
                {
                    title: "Nasa-Spirit",
                    image: "./react-profile-t0rgy/images/nasa-spirit-groupProject.png",
                    repo: "https://github.com/aubree-alexander/the-nasa-spirit",
                    deployed: "https://aubree-alexander.github.io/the-nasa-spirit/",
                    description:"A website that allows the user to obtain the current weather from Nasa's API."
                },
                {
                    title: "Budget Tracker",
                    image: "./react-profile-t0rgy/images/screencapture-budget-tracker.png",
                    repo: "https://github.com/T0rgy/budget-tracker-19",
                    deployed: "https://mighty-earth-76606.herokuapp.com/",
                    description: "This application allows users to subtract expenses and add deposits to their budget with or without a connection. If the user enters transactions offline, the changes will be stored and then displayed when they're brought back online. This application uses Service workers, IndexDB, MongoDB and Web Manifest for offline functionality and is deployed on Heroku."
                },
                {
                    title: "Note Taker",
                    image: "./react-profile-t0rgy/images/screencapture-note-taker.png",
                    repo: "https://github.com/T0rgy/note-taker",
                    deployed: "https://note-takert0rgy.herokuapp.com/",
                    description: "Need a simple and attractive way to keep notes? This project allows you to quickly add a new note with a title and text to keep track of your tasks. It also allows deleting a note when it's no longer needed."
                },
                {
                    title: "Password Generator",
                    image: "./react-profile-t0rgy/images/screencapture-password-generator.png",
                    repo: "https://github.com/T0rgy/password-generator",
                    deployed: "https://t0rgy.github.io/password-generator/",
                    description: "A simple application to generate a password after answering prompts to determine what/how many characters to use."
                },
                {
                    title: "Weather Dashboard",
                    image: "./react-profile-t0rgy/images/screencapture-weather-dashboard.png",
                    repo: "https://github.com/T0rgy/weather-dashboard",
                    deployed: "https://t0rgy.github.io/weather-dashboard/",
                    description: "This is a Weather application that gives back basic weather data from 'openweathermap.org' after a user enters a city name. They are also presented with a 5 day forcast and previous searched city history."
                },
                {
                    title: "Cup-of-code",
                    image: "./react-profile-t0rgy/images/cupofcodeHome.png",
                    repo: "https://github.com/T0rgy/cup-of-code",
                    deployed: "https://polar-headland-37122.herokuapp.com/",
                    description: "This is a Coffee Shop website that is used to create orders from a menu."
                }

                ]
                return(
                    <div>
                        {projects.map((project) => {
                            return <Project project={project} />;
                        })}
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