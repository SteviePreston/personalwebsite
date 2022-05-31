import React from "react";
import "../stylesheets/Navbar.css";

class Navbar extends React.Component{
    render(){
        const links = [
            <a href="#intro">/intro</a>,
            <a href="#aboutme">/about-me</a>,
            <a href="#jobexperience">/jobexperience</a>,
            <a href="#projects">/projects</a>
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