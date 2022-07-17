import React from "react";
import "../styles/AboutMe.css";


function AboutMe() {

    return(
        <div className="backgroundColor aboutMeSection">
            <div>
                <img style={{height:"100%", borderRadius: "2rem", marginLeft:"2%", boxShadow:"0.2rem 0.2rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)", width: '90%'}} alt="Jacob Torgeson" src="./images/profile.png" />
            </div>
            <div style={{marginLeft: '10px'}}>
                <h2 className="title" style={{textAlign: 'center'}}>About Me</h2>
                {/* profile pic goes here */}
                <article className="article">
                    <p>

                    </p>
                    <br/>
                    <p>

                    </p>
                    
                </article>
            </div>
            
        </div>
    )
}

export default AboutMe;