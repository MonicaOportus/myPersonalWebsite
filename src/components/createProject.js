import React from "react";
import Project from "./project";

function CreateProject(projects) {
    return(
        <Project
            key={projects.id}
            img={projects.img}
            title={projects.title}
            description={projects.description}
        />
    );
}

export default CreateProject;