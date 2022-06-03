import React from "react";
import "../stylesheets/Navbar.css";

class Navbar extends React.Component{
    render(){
        const links = [
            <a href="#intro">./Introduction.sh</a>,
            <a href="#aboutme">./AboutMe.sh</a>,
            <a href="#jobexperience">./JobExperience.sh</a>,
            <a href="#projects">./Projects.sh</a>
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