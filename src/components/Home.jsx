import React from 'react';
import { Box } from '@mui/material';

import Header from './Header';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    const sectionStyle = {
        minHeight: '100vh',
        paddingTop: '64px',
    };

    const paddingBottomStyle = {
        paddingBottom: '100px',
    };

    return (
        <>
            <Box>
                <Header />
            </Box>
            <Box id="work" sx={sectionStyle}>
                <Experiences />
            </Box>
            <Box id="projects" sx={sectionStyle}>
                <Projects />
            </Box>
            <Box id="about" sx={sectionStyle}>
                <About />
            </Box>
            <Box id="contact" sx={sectionStyle}>
                <Contact />
            </Box>
            <Box sx={paddingBottomStyle}></Box>
        </>
    );
};

export default Home;