import React from "react";
import Title from "../components/title";
import Navbar from "../components/navbar";
import MySkills from "../components/mySkills";
import Footer from "../components/footer";

function Homepage() {
    return(
        <div>
            <Navbar/>
            <Title/>
                <MySkills/>
            <Footer/>
        </div>
    );
}

export default Homepage;