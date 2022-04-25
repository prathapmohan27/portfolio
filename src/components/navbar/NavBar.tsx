import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { Nav } from './NavBarStyle';

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLLIElement>) => {
    const section = e.currentTarget.className;
    const element = document.querySelector(`#${section}`);
    if (element !== null) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Nav>
      <li onClick={handleScroll} className="home">
        <FontAwesomeIcon icon={faHouse} />
      </li>
      <li onClick={handleScroll} className="about">
        <FontAwesomeIcon icon={faUser} />
      </li>
      <li onClick={handleScroll} className="skill">
        <FontAwesomeIcon icon={faScrewdriverWrench} />
      </li>
      <li onClick={handleScroll} className="project">
        <FontAwesomeIcon icon={faCodepen} />
      </li>
    </Nav>
  );
};

export default NavBar;
