import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ toggleTheme, themeMode }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const navItems = [
        { label: 'Education and Experience', id: 'work' },
        { label: 'Projects', id: 'projects' },
        { label: 'About', id: 'about' },
        { label: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setDrawerOpen(false); // close drawer on click
    };

    return (
        <>
            <AppBar position="fixed" style={{ zIndex: 1000 }}>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Matthew Rost
                            </Typography>
                        </Grid>

                        <Grid item>
                            {isMobile ? (
                                <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                                    <MenuIcon />
                                </IconButton>
                            ) : (
                                <>
                                    {navItems.map((item) => (
                                        <ScrollLink
                                            key={item.id}
                                            to={item.id}
                                            smooth={true}
                                            duration={500}
                                            offset={-64}
                                        >
                      <span
                          style={{
                              color: '#fff',
                              marginRight: '20px',
                              cursor: 'pointer',
                          }}
                          onClick={() => scrollToSection(item.id)}
                      >
                        {item.label}
                      </span>
                                        </ScrollLink>
                                    ))}
                                    <IconButton onClick={toggleTheme} color="inherit">
                                        {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                    </IconButton>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <List sx={{ width: 250 }}>
                    {navItems.map((item) => (
                        <ListItem key={item.id} onClick={() => scrollToSection(item.id)}>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                    <ListItem onClick={toggleTheme}>
                        <ListItemText
                            primary={themeMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        />
                        {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
