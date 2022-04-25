import React from 'react';
import {
  HomeContainer,
  Section,
  ButtonContainer,
  SecondaryButton,
  PrimaryButton,
} from './HomeStyle';

const Home = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    const section = e.currentTarget.name;
    const element = document.querySelector(`#${section}`);
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <HomeContainer id="home">
      <Section>
        <h1>
          Hi,Im <span>Prathap</span>
        </h1>
        <p>Self Taught Frontend Developer.</p>
        <ButtonContainer>
          <SecondaryButton onClick={handleScroll} name="about">
            About Me
          </SecondaryButton>
          <PrimaryButton onClick={handleScroll} name="project">
            Projects
          </PrimaryButton>
        </ButtonContainer>
      </Section>
    </HomeContainer>
  );
};

export default Home;
