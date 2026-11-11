import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      id="header"
      component="header"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        pt: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
          }}
        >
          Hi! I am Matt.
        </Typography>

        <Typography
          variant="h5"
          component="p"
          sx={{
            fontWeight: 400,
            color: 'text.secondary',
            lineHeight: 1.6,
            fontSize: { xs: '1.1rem', sm: '1.35rem', md: '1.5rem' },
          }}
        >
          I am a full-stack software engineer who enjoys building products from idea to production, creating intuitive user experiences while contributing to the systems that power them.
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;