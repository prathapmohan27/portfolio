import styled from 'styled-components';

interface propsDark {
  isDark: boolean;
}

export const LinkContainer = styled.div<propsDark>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50vh;
  left: 0;
  color: ${(props) => (props.isDark ? 'yellow' : 'black')};
  z-index: 10;
`;

export const A = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

export const DarkModeButton = styled.div`
  color: inherit;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;
