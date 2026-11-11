import React from 'react';
import { Container, Typography, Paper, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({ title, stack, date, description, repository }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 3, md: 4 },
        mb: 3,
        borderRadius: 2,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          boxShadow: 6,
        },
      }}
    >
      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          mb: 2,
          fontWeight: 500,
        }}
      >
        {stack} &bull; {date}
      </Typography>

      <Box component="ul" sx={{ pl: 2, m: 0, mb: repository ? 2 : 0 }}>
        {description.map((point, index) => (
          <Box component="li" key={index} sx={{ py: 0.5 }}>
            <Typography variant="body2" sx={{ lineHeight: 1.7, color: 'text.primary' }}>
              {point}
            </Typography>
          </Box>
        ))}
      </Box>

      {repository && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
          <GitHubIcon fontSize="small" color="action" />
          <Link
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{
              fontWeight: 500,
              fontSize: '0.875rem',
              color: 'primary.main',
            }}
          >
            View Repository
          </Link>
        </Box>
      )}
    </Paper>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'RPG Character Creation Website',
      stack: 'Next.js / React / TypeScript / MySQL',
      date: 'November 2022',
      description: [
        'Collaborated with a senior capstone team to develop a full-stack web application for creating and managing Dungeon World characters. I implemented frontend API integrations, authentication using Auth0, a virtual dice roller, and a searchable rules and resources section while working within an agile development process.',
      ],
    },
    {
      title: 'Bevy Game Development Tutorial',
      stack: 'Rust',
      date: 'May 2022',
      description: [
        'Created a tutorial game in Rust using the Bevy game engine to demonstrate core game development concepts, including Entity-Component-System (ECS) architecture. I also wrote a companion tutorial using mdBook to help new Rust and Bevy developers learn the engine and its development patterns.',
      ],
      repository: 'https://github.com/mattrost/Asteroids-Clone-Demonstration',
    },
    {
      title: 'Small Shell',
      stack: 'C',
      date: 'February 2022',
      description: [
        'Developed a custom Unix shell in C using the Unix process API and unistd library. The shell supports command execution, built-in commands, foreground and background processes, input/output redirection, and custom signal handling through the exec family of functions.',
      ],
      repository: 'https://github.com/mattrost/Small-Shell',
    },
    {
      title: 'Full Stack Ice Cream Review App',
      stack: 'React / Node / MongoDB / Express / JavaScript',
      date: 'August 2021',
      description: [
        'Collaborated with a development team to build a full-stack MERN application for reviewing and exploring ice cream products. I developed a Flask microservice hosted on Heroku that leveraged the Wikipedia API to generate brand summaries and integrated teammate-developed services to provide dynamic grocery pricing information through the Kroger API.',
      ],
      repository: 'https://github.com/mattrost/ice-cream',
    },
    {
      title: 'Graph Implementation',
      stack: 'Python',
      date: 'June 2021',
      description: [
        'Implemented directed and undirected graph data structures in Python using adjacency matrices and adjacency lists. The project included breadth-first search, depth-first search, Dijkstra’s shortest path algorithm, and unit testing to validate algorithm correctness.',
      ],
      repository: 'https://github.com/mattrost/Graph-Implementation',
    },
    {
      title: 'String Primitives and Macros',
      stack: 'x86 Assembly, MASM',
      date: 'June 2021',
      description: [
        'Developed a program in x86 Assembly and MASM utilizing macros, procedures, and string primitives to convert user input between string and numeric representations. The application performed aggregate calculations while emphasizing low-level memory manipulation and assembly language programming concepts.',
      ],
      repository: 'https://github.com/mattrost/String-Primitives-and-Macros/',
    },
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        Projects
      </Typography>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Container>
  );
};

export default Projects;