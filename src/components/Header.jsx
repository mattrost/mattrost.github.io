import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
    const headerStyle = {
        textAlign: 'center',
        padding: '20px',
    };

    return (
        <Box sx={headerStyle}>
            <Typography variant="h1" gutterBottom>
                Hi!
            </Typography>
            <Typography variant="h3">
                I am a Software Engineer
            </Typography>
        </Box>
    );
}

export default Header;