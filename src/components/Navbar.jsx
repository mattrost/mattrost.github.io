import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { AppBar, Toolbar, Typography, Grid, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon

const Navbar = ({ toggleTheme, themeMode }) => {
    const linkStyle = {
        color: '#fff', // Link text color
        marginRight: '20px',
        cursor: 'pointer',
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    };

    const [isNavbarVisible, setNavbarVisibility] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;
            const isMobile = viewportHeight <= 736 || viewportWidth <= 736;
            setNavbarVisibility(!isMobile);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <AppBar position="fixed" style={{  zIndex: 1000, display: isNavbarVisible ? 'block' : 'none' }}>
            <Toolbar style={{ minHeight: '64px' }}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h4">
                            Matthew Rost
                        </Typography>
                    </Grid>
                    <Grid item>
                        <ScrollLink to="work" spy={true} smooth={true} offset={0} duration={500}>
                          <span style={linkStyle} onClick={() => scrollToSection('work')}>
                            Education and Experience
                          </span>
                        </ScrollLink>
                        <ScrollLink to="projects" spy={true} smooth={true} offset={0} duration={500}>
                          <span style={linkStyle} onClick={() => scrollToSection('projects')}>
                            Projects
                          </span>
                        </ScrollLink>
                        <ScrollLink to="about" spy={true} smooth={true} offset={0} duration={500}>
                          <span style={linkStyle} onClick={() => scrollToSection('about')}>
                            About
                          </span>
                        </ScrollLink>
                        <ScrollLink to="contact" spy={true} smooth={true} offset={0} duration={500}>
                          <span style={linkStyle} onClick={() => scrollToSection('contact')}>
                            Contact
                          </span>
                        </ScrollLink>
                        <IconButton onClick={toggleTheme} color="inherit">
                            {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>

        </AppBar>
    );
}

export default Navbar;