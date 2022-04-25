import styled from 'styled-components';

export const AboutContainer = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.aboutBg};
  button {
    margin-bottom: 3rem;
  }
  p {
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    font-weight: 600;
    color: ${(props) => props.theme.secondaryFont};
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const H1 = styled.h1`
  padding-top: 3rem;
  color: #cf0649;
  text-align: center;
`;
