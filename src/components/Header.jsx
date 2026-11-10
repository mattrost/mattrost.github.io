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
      <Typography variant="h2" gutterBottom>
        Hi! I am Matt.
      </Typography>
      <Typography variant="h4" gutterBottom>
        I am a full-stack software engineer who enjoys building products from idea to production, creating intuitive user experiences while contributing to the systems that power them.
      </Typography>
    </Box>
  );
}

export default Header;