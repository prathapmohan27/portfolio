import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Section = styled.section`
  text-align: center;
  margin: 2rem;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.2rem;
    letter-spacing: 0.6rem;
    font-weight: 600;
    margin-top: 1rem;
    color: ${(props) => props.theme.secondaryFont};
  }
  span {
    color: #cf0649;
  }
`;

export const ButtonContainer = styled.div``;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 400;
  margin: 1rem;
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid #797979;
  background-color: transparent;
  color: inherit !important;
`;

export const PrimaryButton = styled(Button)`
  background-color: #3c83f6;
  color: #ffffff;
`;

export const A = styled.a`
  text-decoration: none;
  color: inherit;
`;
