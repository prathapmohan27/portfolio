import { AboutContainer, H1 } from './AboutStyle';
import { PrimaryButton } from '../home/HomeStyle';

const About = () => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    const section = e.currentTarget.name;
    const element = document.querySelector(`#${section}`);
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <AboutContainer id="about">
      <H1>About Me</H1>
      <p>
        I'm currently an undergraduate looking to improve my software and web
        development knowledge. I study Dr.Mahalingam College of Engineering and
        Technology,i'm majoring in computer science.The Odin Project's Full
        Stack JavaScript Curriculum is just one of the ways I'm learning to code
        now. I like to watch Anime,Web series and reading manga.
      </p>
      <div>
        <PrimaryButton onClick={handleScroll} name="contact">
          Let's Talk
        </PrimaryButton>
      </div>
    </AboutContainer>
  );
};

export default About;
