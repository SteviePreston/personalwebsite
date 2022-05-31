import React from "react";
import "../stylesheets/Footer.css";

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

class Footer extends React.Component{
  
      render() {
        return (
            <div className="footer-text">
                <div className="footer-logos">
                <a href="mailto:stevenpreston2014@gmail.com">
                    <EmailIcon style={{ fontSize: 20 }}></EmailIcon>
                </a>
                <a href="https://github.com/SteviePreston">
                    <GitHubIcon style={{ fontSize: 20 }}></GitHubIcon>
                </a>
                <a href="https://www.linkedin.com/in/steviep-ai/">
                    <LinkedInIcon style={{ fontSize: 20 }}></LinkedInIcon>
                </a>
                </div>
            </div>
        );
      }
    }

export default Footer;