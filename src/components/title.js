import React from "react";
import profile from "../images/profile.png";
import {Button, Grid} from '@mui/material/';

function Title(){
    return(
        <div>
            <Grid id="titleMainBlock">
                <Grid id="titleBlock">
                    <Grid id="greetingBlock">
                        <h4 id="greeting">HELLO THERE! IT'S NICE TO MEET YOU. I'M</h4>
                        <h1 id="bigName">Monica</h1>
                    </Grid>
                    <Grid id="myDescriptionBlock">
                        <h3 id="myDescription">I'm a web developer with an eye for design, based in Montreal, Quebec.</h3>
                        <Button href="/contact" id="contactButton" size="large" variant="contained" 
                        style= {{
                            textTransform: "none", 
                            backgroundColor: "#FFDFDE", 
                            color: "black", 
                            marginTop: "4%", 
                            boxShadow: "none", 
                            border: "1px solid black",
                            fontFamily: "Montserrat"
                        }}
                        >Contact Me</Button>
                    </Grid>
                </Grid>
                <Grid id="profileBlock">
                    <img src={profile} alt="profile" id="profile"/>
                </Grid>
            </Grid>
            <div id="pinkSection"></div>
        </div>
    );
}

export default Title;