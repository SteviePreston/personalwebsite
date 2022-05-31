import React from "react";
import "../stylesheets/footer.css";

import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

class footer extends React.Component{
  
      render() {
        return (
            <div className="footer-text">
                <p>
                    Made and designed by <a href="mailto:stevenpreston2014@gmail.com"><span className="footer-name">Stevie</span></a> with ♥
                </p>
                <div className="footer-logos">
                <a href="mailto:stevenpreston2014@gmail.com">
                    <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
                </a>
                <a href="https://github.com/SteviePreston">
                    <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                </a>
                <a href="https://www.linkedin.com/in/steviep-ai/">
                    <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
                </a>
                </div>
            </div>
        );
      }
    }

export default footer;