import React from "react";
import { Typography, Grid, Button } from "@mui/material";

export default function Success() {
     return(
        <Grid id="successPage">
            <i className="fa-solid fa-envelope-circle-check fa-10x" style={{color: "#87D184", paddingLeft: "20px"}}></i>
            <Typography style={{
                fontFamily: "Playfair display", 
                fontWeight: 600,
                fontSize: "7vh",
                paddingTop: "4vh",
                color: "gray"
            }}>Thank you!</Typography>
            <Typography style={{
                fontFamily: "Montserrat", 
                fontWeight: 400,
                fontSize: "3vh",
                paddingTop: "2vh",
                color: "gray"
                }}> Your message was successfully sent!</Typography>
            <Button id="succesHomeButton" href="/" variant="contained" type="submit" style={{backgroundColor: "#87D184", marginTop: "4vh", fontFamily: "Montserrat"}}>Continue</Button>
        </Grid>
     );
 }