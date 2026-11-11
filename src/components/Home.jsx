import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Experiences from './Experiences';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import ScrollTopButton from './ScrollTopButton';

const sectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  py: { xs: 8, md: 10 },
  boxSizing: 'border-box',
  scrollMarginTop: '64px',
};

const Home = () => {
  return (
    <Box component="main">
      <Header />

      <Box id="work" component="section" sx={sectionStyle}>
        <Experiences />
      </Box>

      <Box id="projects" component="section" sx={sectionStyle}>
        <Projects />
      </Box>

      <Box id="about" component="section" sx={sectionStyle}>
        <About />
      </Box>

      <Box id="contact" component="section" sx={sectionStyle}>
        <Contact />
      </Box>

      <ScrollTopButton />
    </Box>
  );
};

export default Home;