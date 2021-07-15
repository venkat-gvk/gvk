import React from "react";
import { projects } from "../util_Projects_skills";
import ProjectListRender from "./ProjectListRender";

const ProjectList = () => {
  return (
    <React.Fragment>
      {projects.map((project, index) => (
        <ProjectListRender project={project} key={index} />
      ))}
    </React.Fragment>
  );
};

export default ProjectList;
