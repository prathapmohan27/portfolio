import styled from 'styled-components';

interface propsInterface {
  link: string;
}

export const ProjectContainer = styled.div`
  background-color: ${(props) => props.theme.aboutBg};
  padding-bottom: 6rem;
`;

export const ProjectGridContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1rem;
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProjectCard = styled.div<propsInterface>`
  position: relative;
  text-align: center;
  background-image: ${(props) => `url(${props.link})`};
  border-radius: 0.4rem;
  margin: 1rem;
  height: 20rem;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  &:hover > section {
    opacity: 1;
    pointer-events: all;
  }
`;

export const Title = styled.h3`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${(props) => props.theme.PCard};
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  color: inherit;
`;

export const DetailContainer = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.PCard};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  pointer-events: none;
  opacity: 0;
  transition: opacity 200ms linear;
  p {
    font-weight: 800;
  }
`;
