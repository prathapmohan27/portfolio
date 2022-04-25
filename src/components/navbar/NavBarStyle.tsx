import styled from 'styled-components';

export const Nav = styled.ul`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 15rem;
  padding: 0.5rem 2rem;
  top: 90vh;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.NavBg};
  border-radius: 1.6rem;
  z-index: 10;
  li {
    cursor: pointer;
    list-style: none;
    color: inherit;
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 50%;
    &:hover {
      background-color: #a79797;
    }
  }
`;
