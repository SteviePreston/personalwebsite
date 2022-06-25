import React from "react";
import "../stylesheets/Jobexperience.css";

//? TODO:Add additional Experience 
class Jobexperience extends React.Component{

            JobList = () => {
            const classes = useStyles();
            const [value, setValue] = React.useState(0);
          
            const experienceItems = {
              "BT": {
                jobTitle: "Software Engineering Placement",
                duration: "SEP 2021 - AUG 2022",
                desc: [
                  "Developed within the BT secure payments team under BT's subteam 'ETC.' as part of the Digital space.",
                  "Worked in a plethora of areas within the project: Frontend (thistle), Backend (Buynet) & CLI Tools (Batch Payment Interface) ",
                  "Relevant technologies/tools used: WLS, SuperPutty, Postman, Citrix, SQL Plus, Oracle SQL Developer, Oracle Golden Gate, Git, VI & RHEL."
                ]
              }
            };

        return (
            <div className="jobs">

            </div>
        );
    }
}

export default Jobexperience;