import React from "react";
import "../stylesheets/Projects.css";

class Projects extends React.Component{
    ProjectList = () => {
        const classes = useStyles();
        const [value, setValue] = React.useState(0);
      
        const projectItems = {
          "BT": {
            projectSubTitle: "Software Engineering Placement",
            techStack: "Python",
            desc: [
              "Developed within the BT secure payments team under BT's subteam 'ETC.' as part of the Digital space.",
              "Worked in a plethora of areas within the project: Frontend (thistle), Backend (Buynet) & CLI Tools (Batch Payment Interface) ",
              "Relevant technologies/tools used: WLS, SuperPutty, Postman, Citrix, SQL Plus, Oracle SQL Developer, Git, VI & RHEL VM."
            ]
          },
          "BT": {
            projectSubTitle: "Software Engineering Placement",
            techStack: "Python",
            desc: [
              "Developed within the BT secure payments team under BT's subteam 'ETC.' as part of the Digital space.",
              "Worked in a plethora of areas within the project: Frontend (thistle), Backend (Buynet) & CLI Tools (Batch Payment Interface) ",
              "Relevant technologies/tools used: WLS, SuperPutty, Postman, Citrix, SQL Plus, Oracle SQL Developer, Git, VI & RHEL VM."
            ]
          },
          "BT": {
            projectSubTitle: "Software Engineering Placement",
            techStack: "Python",
            desc: [
              "Developed within the BT secure payments team under BT's subteam 'ETC.' as part of the Digital space.",
              "Worked in a plethora of areas within the project: Frontend (thistle), Backend (Buynet) & CLI Tools (Batch Payment Interface) ",
              "Relevant technologies/tools used: WLS, SuperPutty, Postman, Citrix, SQL Plus, Oracle SQL Developer, Git, VI & RHEL VM."
            ]
          },
          "BT": {
            projectSubTitle: "Software Engineering Placement",
            techStack: "Python",
            desc: [
              "Developed within the BT secure payments team under BT's subteam 'ETC.' as part of the Digital space.",
              "Worked in a plethora of areas within the project: Frontend (thistle), Backend (Buynet) & CLI Tools (Batch Payment Interface) ",
              "Relevant technologies/tools used: WLS, SuperPutty, Postman, Citrix, SQL Plus, Oracle SQL Developer, Git, VI & RHEL VM."
            ]
          }
        };
        return (
            <div className="projects">

            </div>
        );
    }
}

export default Projects;