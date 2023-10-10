import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
    const headerStyle = {
        padding: '20px',
        minHeight: '100vh',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    };

    return (
        <Box sx={headerStyle}>
            <Typography variant="h1" gutterBottom>
                Hi! I am Matt.
            </Typography>
            <Typography variant="h3" gutterBottom>
                I am a Software Engineer at Losant IoT. I work on the Solutions Team, developing Full-Stack Applications
                for our clients.
            </Typography>
        </Box>
    );
}

export default Header;