import React from 'react';
import { Container, Typography, Paper, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const githubUrl = 'https://github.com/mattrost';
  const linkedinUrl = 'https://www.linkedin.com/in/matthew-r123';
  const emailUrl = 'mailto:mrost123@gmail.com';

  const contactLinks = [
    {
      label: 'Email',
      value: 'mrost123@gmail.com',
      url: emailUrl,
      icon: <EmailIcon color="primary" fontSize="medium" />,
    },
    {
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      url: linkedinUrl,
      icon: <LinkedInIcon color="primary" fontSize="medium" />,
    },
    {
      label: 'GitHub',
      value: 'GitHub Profile',
      url: githubUrl,
      icon: <GitHubIcon color="primary" fontSize="medium" />,
    },
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        Contact Me
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 4 },
          mt: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            fontWeight: 400,
            color: 'text.secondary',
          }}
        >
          If you'd like to get in touch or collaborate, feel free to reach out through any of the channels below:
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          {contactLinks.map((item) => (
            <Box
              key={item.label}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              {item.icon}
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {item.label}:
              </Typography>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                aria-label={`${item.label}: ${item.value}`}
                sx={{
                  color: 'primary.main',
                  fontWeight: 500,
                }}
              >
                {item.value}
              </Link>
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;