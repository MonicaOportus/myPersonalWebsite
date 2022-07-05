import React from "react";
import {Grid} from '@mui/material/';
import jQuery from "../images/jQuery.png";
import Subtitle from "../components/subtitle";

function MySkills() {
 return(
    <div style={{padding: "4% 0%", backgroundColor: "#F6F6F6" }}>
    <Subtitle />
     <Grid id="mySkills" container alignItems="center" justifyContent="center">
        <Grid className="skillItem">
            <span className="fa-stack fa-2x" >
                <i className="fa-regular fa-file-code fa-stack-1x htmlIcon" style={{zIndex: "1"}}></i>
                <i className="fa-solid fa-circle fa-stack-2x htmlCircle" ></i>
            </span>
            <p>HTML</p>
            <p className="skillDescription">The standard markup language for creating Web pages</p>
        </Grid>
        <Grid className="skillItem">
            <span className="fa-stack fa-2x">
                <i class="fa-brands fa-css3-alt fa-stack-1x cssIcon" style={{zIndex: "1"}}></i>
                <i className="fa-solid fa-circle fa-stack-2x cssCircle"></i>
            </span>
            <p>CSS</p>
            <p className="skillDescription">Describes how HTML elements are to be displayed on screen</p>
        </Grid>
        <Grid className="skillItem">
            <span className="fa-stack fa-2x">
                <i className="fa-brands fa-bootstrap fa-stack-1x bootstrapIcon" style={{zIndex: "1"}}></i>
                <i className="fa-solid fa-circle fa-stack-2x bootstrapCircle"></i>
            </span>
            <p>Bootstrap</p>
            <p className="skillDescription">The most popular CSS Framework for developing responsive and mobile websites</p>
        </Grid>
        <Grid className="skillItem">
            <span className="fa-stack fa-2x">
                <i class="fa-brands fa-js fa-stack-1x jsIcon" style={{zIndex: "1"}}></i>
                <i className="fa-solid fa-circle fa-stack-2x jsCircle"></i>
            </span>
            <p>Javascript</p>
            <p className="skillDescription">A scripting language used to create and control dynamic website content</p>
        </Grid>
        <Grid className="skillItem">
            <img className="jQueryLogo" src={jQuery} alt="jQuery-Img" style={{maxWidth:"6.5vh", margin: "0px 12px"}}/>
            <p>jQuery</p>
            <p className="skillDescription">A fast, small, and feature-rich JavaScript library</p>
        </Grid>
        <Grid className="skillItem">
            <span className="fa-stack fa-2x">
                <i className="fa-brands fa-node-js fa-stack-1x nodeIcon" style={{zIndex: "1"}}></i>
                <i className="fa-solid fa-circle fa-stack-2x nodeCircle"></i>
            </span>
            <p>Node.js</p>
            <p className="skillDescription">An open-source and cross-platform JavaScript runtime environment</p>
        </Grid>
        <Grid className="skillItem">
            <span className="fa-stack fa-2x">
                <i class="fa-brands fa-react fa-stack-1x reactIcon" style={{zIndex: "1"}}></i>
                <i className="fa-solid fa-circle fa-stack-2x reactCircle"></i>
            </span>
            <p>React</p>
            <p className="skillDescription">Front-end JavaScript library for building user interfaces based on UI components</p>
        </Grid>
        <Grid className="skillItem">
            <img className="muiLogo" src="https://v4.material-ui.com/static/logo.png" alt="MUI-logo" style={{maxWidth:"9.5vh", margin: "0px 12px"}}/>
            <p>MUI</p>
            <p className="skillDescription">Provides a simple, customizable, and accessible library of React components</p>
        </Grid>
     </Grid>
    </div>
    
 );
}

export default MySkills;