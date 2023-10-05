import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Link } from '@mui/material';

const Navbar = () => {
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
                        <Link href="/contact" color="inherit">
                            Contact
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;