import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        About Me
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}
        >
          Hi! I'm Matt Rost, a full-stack software engineer and former materials engineer based in Cincinnati, OH. After several years working in oil refineries, I decided to take the plunge into software engineering in 2020. I made the career change because I wanted to spend my time building things that genuinely excited me, and Oregon State University's Computer Science program helped me make that transition.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}
        >
          Since then, I've had the opportunity to work on a variety of projects spanning full-stack web development, mobile applications, IoT platforms, platform engineering, and cloud-native technologies. I enjoy building products from idea to production, creating intuitive user experiences while also contributing to the systems that power them.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}
        >
          I am a strong believer in continuous learning and enjoy exploring new technologies, programming languages, and development approaches. I'm also interested in free and open-source software and would love to contribute to more open-source projects. If you're building something interesting, I'd be happy to chat.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}
        >
          Outside of software, I enjoy playing guitar, writing music, video games, tabletop RPGs, running, hiking, photography, and brewing coffee. One of my favorite memories is trying out a guitar at my local music store while Peter Frampton happened to be shopping. My favorite games are Baldur's Gate, Escape Velocity: Override, and Jet Grind Radio.
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', lineHeight: 1.7 }}
        >
          I feel incredibly fortunate to work in a field that allows me to create things every day.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;