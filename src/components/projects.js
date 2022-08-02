import React from "react";
import "../stylesheets/Projects.css";

//? TODO: Add detials of projects and implement 3 x 2 flex box
class Projects extends React.Component{
    ProjectList = () => {
        const classes = useStyles();
        const [value, setValue] = React.useState(0);
      
        const projectItems = {
          "BT": {
            projectSubTitle: "Thistle",
            techStack: "Java, JavaScript, JSP, SQL",
            desc: [
              "Thistle is the payments frontend project which connects to Buynet to handle payments using customer details.",
              "Thistle encrypts senstive customer details and stores the encrypted details in the database.",
              "Relevant technologies/tools used: WLS, SuperPutty, Postman, Citrix, SQL Plus, Oracle SQL Developer, Git, VI & RHEL VM."
            ]
          },
          "BT": {
            projectSubTitle: "Buynet",
            techStack: "Java",
            desc: [
              "Buynet handles all payments, It contacts the merchant & banks to handle payments. It handles a range of transaction types.",
              "Worked in a plethora of areas within the project: Frontend (thistle), Backend (Buynet) & CLI Tools (Batch Payment Interface) ",
              "Relevant technologies/tools used: WLS, SuperPutty, Postman, Citrix, SQL Plus, Oracle SQL Developer, Git, VI & RHEL VM."
            ]
          },
          "BT": {
            projectSubTitle: "Batch Payment Interface",
            techStack: "Java",
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