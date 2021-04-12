import React from 'react';

import ProjectsTemplate from '../../common/ProjectsTemplate/ProjectsTemplate';

import projectsData from './projectsData';

const ProjectsDir = () => {
  return (
    <>
      {projectsData.map(({ id, sectionTitle, projects }) => (
        <ProjectsTemplate key={id} title={sectionTitle} projects={projects} />
      ))}
    </>
  );
};

export default ProjectsDir;
