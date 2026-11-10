import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Project = ({ title, stack, date, description, repository }) => {
    const theme = useTheme();

    return (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" gutterBottom>
                {stack} | {date}
            </Typography>
            <List>
                {description.map((point, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={point} />
                    </ListItem>
                ))}
            </List>
            {repository && (
                <Typography variant="body2">
                    Repository:{' '}
                    <a
                        href={repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: theme.palette.custom?.linkColor || theme.palette.primary.main,
                            textDecoration: 'underline',
                        }}
                        onMouseOver={e => (e.target.style.color = '#bb86fc')}  // Optional hover color
                        onMouseOut={e => (e.target.style.color = theme.palette.custom?.linkColor || theme.palette.primary.main)}
                    >
                        {repository}
                    </a>
                </Typography>
            )}
        </Paper>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'RPG Character Creation Website',
            stack: 'Next.js/React/TypeScript/MySQL',
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
            stack: 'React/Node/MongoDB/Express/JavaScript',
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
        <Container>
            <Typography variant="h3" gutterBottom>
                Projects
            </Typography>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </Container>
    );
};

export default Projects;
