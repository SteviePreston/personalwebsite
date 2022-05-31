import React from "react";
import "../stylesheets/intro.css";

import EmailIcon from '@mui/icons-material/Email';

class intro extends React.Component{
     
      render() {
        return (
          <div id="intro">
              <span className="intro-title">
                {"Hello!, I'm "}
                <span className="intro-name">{"Stevie"}</span>
                {"."}
              </span>
              <div className="intro-subtitle">I like to learn through programming.</div>
              <div className="intro-desc">
                I'm a software engineer based in Belfast. I have
                interest in deep learning, web applications,
                cyber security, and everything in between.
              </div>
              <a
                href="mailto:stevenpreston2014@gmail.com"
                className="intro-contact"
              >
                <EmailIcon></EmailIcon>
                {"  " + "Email Me!"}
              </a>
          </div>
        );
      }
    }


export default intro;