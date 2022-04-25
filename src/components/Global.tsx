import React from 'react';
import { createGlobalStyle } from 'styled-components';

interface themeInterface {
  isDark: boolean;
}

export const GlobalStyle = createGlobalStyle<themeInterface>`
html{
  scroll-behavior: smooth;
}
 body,h1,h2,h3,p {
  margin: 0;
}
body{
  font-family: 'sans-serif';
  background-color:${(props) => (props.isDark ? '#1f1e1e' : '#fbfbf2')};
  color:${(props) => (props.isDark ? '#ffff' : '#1a1a1a')} ;
  transition: background-color 1s linear;
}
`;

export const light = {
  primaryFont: '#1a1a1a',
  secondaryFont: '#4a4a4a',
  NavBg: '#cfd2cd',
  aboutBg: '#E5E7EB',
  PCard: '#fbfbf2',
};

export const dark = {
  primaryFont: '#ffff',
  secondaryFont: '#cacaca',
  NavBg: '#373737',
  aboutBg: '#000',
  PCard: '#1f1e1e',
};

export const handleScroll = (
  e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLLIElement>
) => {
  const section = e.currentTarget.className;
  const element = document.querySelector(`#${section}`);
  if (element !== null) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
