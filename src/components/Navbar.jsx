import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Link, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon

const Navbar = ({ toggleTheme, themeMode }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h4">
                            Matthew Rost
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Link href="/about" color="inherit" style={{ marginRight: '20px' }}>
                            About
                        </Link>
                        <Link href="/work" color="inherit" style={{ marginRight: '20px' }}>
                            Work
                        </Link>
                        <Link href="/projects" color="inherit" style={{ marginRight: '20px' }}>
                            Projects
                        </Link>
                        <Link href="/contact" color="inherit" style={{ marginRight: '20px' }}>
                            Contact
                        </Link>
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