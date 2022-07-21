import React from "react";
import "../styles/AboutMe.css";


function AboutMe() {

    return(
        <div className="backgroundContainer">
            <div>
                <img className="img" alt="Jacob Torgeson" src="/react-profile-t0rgy/images/profile.png" />
            </div>
            <div style={{marginLeft: '20px'}}>
                <h2 className="title">About Me</h2>
                <article className="article">
                    <p>
                        Hello, my name is Jacob Torgeson and currently I'm a full time Account Sales Representive for Pepsi-Cola of Madison WI. I am currently enrolled in the University of Wisconsin's Web Development Coding Bootcamp, hoping to expand my career into Web Development. Some hobbies outside of work include golfing, kayaking, hiking, video games, tennis, movies, concerts and going out friends.
                        <br/>


                    </p>
                    
                </article>
            </div>
        </div>
    )
}

export default AboutMe;