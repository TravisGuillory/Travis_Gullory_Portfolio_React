import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../Styles/Styles';
import { ProjectItem, ProjectTitle, SkillContainer, ImgContainer, ImgItem } from './styles';



const Projects = ({ user }) => {
    //const {projects} = user;
    return (
      <Layout user={user}>
        <div>
          <SectionTitle>Projects</SectionTitle>
          <ul>
            {user.projects.map((project, i) => (
              <ProjectItem key={i}>
                <ProjectTitle>{project.displayName}</ProjectTitle>
                <p>{project.summary}</p>
                <p><a href={project.website}> {project.website} </a></p>
                <SkillContainer>
                  {[...project.languages, ...project.libraries].map((item, j) => (
                    <Pill key={j}>{item}</Pill>
                  ))}
                </SkillContainer>
                {project.images.map((img,i) =>(
                 <ImgContainer key={i}>
                    <ImgItem>
                      <a href={project.website} target='#'>
                        <img src={img.resolutions.mobile.url} height={img.resolutions.mobile.height} width={img.resolutions.mobile.width} alt={project.displayName}/>
                      </a>
                    </ImgItem>
                  </ImgContainer>
                ))}
                </ProjectItem>
            ))}
          </ul>
          
        </div>
      </Layout>
      
    );
  };

export default Projects;

 