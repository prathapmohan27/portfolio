import React from 'react';
import {
  HomeContainer,
  Section,
  ButtonContainer,
  SecondaryButton,
  PrimaryButton,
} from './HomeStyle';
import { handleScroll } from '../Global';
const Home = () => {
  return (
    <HomeContainer id="home">
      <Section>
        <h1>
          Hi,Im <span>Prathap</span>
        </h1>
        <p>Self Taught Frontend Developer.</p>
        <ButtonContainer>
          <SecondaryButton onClick={handleScroll} className="about">
            About Me
          </SecondaryButton>
          <PrimaryButton onClick={handleScroll} className="project">
            Projects
          </PrimaryButton>
        </ButtonContainer>
      </Section>
    </HomeContainer>
  );
};

export default Home;
