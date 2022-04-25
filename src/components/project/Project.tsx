import { H1 } from '../about/AboutStyle';
import {
  ProjectCard,
  ProjectContainer,
  ProjectGridContainer,
  Title,
  DetailContainer,
} from './ProjectStyle';

import { SecondaryButton, PrimaryButton, A } from '../home/HomeStyle';

import { proData } from '../data/projectData';

const Project = () => {
  return (
    <ProjectContainer id="project">
      <H1>Project</H1>
      <ProjectGridContainer>
        {proData.map((obj, i) => {
          return (
            <ProjectCard link={obj.path} key={i}>
              <Title>{obj.title}</Title>
              <DetailContainer>
                <div>
                  <p>{obj.desc}</p>
                  <A href={obj.code} target="_blank">
                    <SecondaryButton>Code</SecondaryButton>
                  </A>
                  <A href={obj.demo} target="_blank">
                    <PrimaryButton>Demo</PrimaryButton>
                  </A>
                </div>
              </DetailContainer>
            </ProjectCard>
          );
        })}
      </ProjectGridContainer>
    </ProjectContainer>
  );
};

export default Project;
