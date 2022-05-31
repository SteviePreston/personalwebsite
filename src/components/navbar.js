import React from "react";
import "../stylesheets/Navbar.css";

class Navbar extends React.Component{
    render(){
        const links = [
            <a href="#intro">./Introduction</a>,
            <a href="#aboutme">./About Me</a>,
            <a href="#jobexperience">./Job Experience</a>,
            <a href="#projects">./Projects</a>
          ];

        return (
            <div className="navbar-links">
                {links.map((link, i) => (
                    <div>{link}</div>
                ))}
              </div>
        );
    }
}

export default Navbar;