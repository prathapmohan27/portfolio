import { H1 } from '../about/AboutStyle';
import styled from 'styled-components';

const ContactContainer = styled.div`
  text-align: center;
  a {
    margin-top: 2rem;
    color: inherit;
    font-size: 2vw;
    font-weight: 800;
    @media only screen and (max-width: 768px) {
      font-size: 5vw;
    }
  }
  p {
    margin-top: 3rem;
  }
  margin-bottom: 8rem;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <H1>Contact</H1>
      <p> write me an e-mail at:</p>
      <a href="mailto:prathapmohan2704@gmail.com">prathapmohan2704@gmail.com</a>
    </ContactContainer>
  );
};

export default Contact;
