import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer, A, DarkModeButton } from './LinkStyle';

interface propsInterface {
  isDark: boolean;
  changeTheme: () => void;
}

const Link = ({ isDark, changeTheme }: propsInterface) => {
  return (
    <LinkContainer isDark={isDark}>
      <A
        href="https://github.com/prathapmohan27"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </A>
      <A
        href="https://www.linkedin.com/in/prathap-m-b104101b8/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </A>
      <DarkModeButton onClick={changeTheme}>
        {isDark ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </DarkModeButton>
    </LinkContainer>
  );
};

export default Link;
