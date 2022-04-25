import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import Home from './components/home/Home';
import Link from './components/link/Link';
import NavBar from './components/navbar/NavBar';
import Project from './components/project/Project';
import Skill from './components/skill/Skill';
import { GlobalStyle, light, dark } from './components/Global';

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [theme, setTheme] = useState<any>({});
  useEffect(() => {
    if (isDark) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  }, [isDark]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle isDark={isDark} />
        <Link isDark={isDark} changeTheme={changeTheme} />
        <NavBar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </ThemeProvider>
    </>
  );
}

export default App;
