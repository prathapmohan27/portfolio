import styled from 'styled-components';

export const GridContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-bottom: 2rem;
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme.aboutBg};
  text-align: center;
  box-shadow: 0 0 10px #000000;
  border-radius: 0.3rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: transform 200ms linear;
  &:hover {
    transform: rotate(15deg);
  }
  img {
    width: 2rem;
    object-fit: cover;
  }
`;
