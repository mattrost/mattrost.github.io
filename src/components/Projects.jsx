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
                'Collaborated with senior capstone team to create a web application using agile project management. Implemented front end API requests, created dice roller functionality, created a rules and resources page, as well as authentication with Auth0.',
            ],
        },
        {
            title: 'Bevy Game Development Tutorial',
            stack: 'Rust',
            date: 'May 2022',
            description: [
                'Created a video game with the Rust Language and the Bevy game engine crate to demonstrate how to make a simple Asteroids style game with an Entity-Component-System architecture to new Rust and Bevy users. Wrote a tutorial on development of the simple game, using the Bevy engine, as well as the Entity-Component-System architecture using markdown and Rust crate mdBook.',
            ],
            repository: 'https://github.com/mattrost/Asteroids-Clone-Demonstration',
        },
        {
            title: 'Small Shell',
            stack: 'C',
            date: 'February 2022',
            description: [
                'Utilized the Unix process API to write a custom shell in C allowing users to run commands with the unistd library. Designed custom commands with code built into the shell and allowed execution of other commands by leveraging the exec family of functions. Implemented custom signal handlers, foreground/background support, and input/output redirection.',
            ],
            repository: 'https://github.com/mattrost/Small-Shell',
        },
        {
            title: 'Full Stack Ice Cream Review App',
            stack: 'React/Node/MongoDB/Express/JavaScript',
            date: 'August 2021',
            description: [
                'Applied agile methods to plan and develop a full stack web application in the MERN stack. Brainstormed with a development team to pitch product ideas. Created a Flask microservice hosted on Heroku to return a summary of ice cream brands utilizing the Wikipedia API. Incorporated a teammate\'s microservice to dynamically search the Kroger API and find prices of specific ice cream items.',
            ],
            repository: 'https://github.com/mattrost/ice-cream',
        },
        {
            title: 'Graph Implementation',
            stack: 'Python',
            date: 'June 2021',
            description: [
                'Created a Python program for directed and undirected graph data structures, including Depth/Breadth First Searches and Dijkstra\'s Algorithm. Implemented directed graph with adjacency-matrix, undirected graph with adjacency-list. Employed unit testing to ensure algorithms perform satisfactorily.',
            ],
            repository: 'https://github.com/mattrost/Graph-Implementation',
        },
        {
            title: 'String Primitives and Macros',
            stack: 'x86 Assembly, MASM',
            date: 'June 2021',
            description: [
                'Devised a program that includes macros and procedures to take a user string input and convert by individual byte to numeric form to store into an array and convert back by byte to string for output. Calculated average and sum of numbers by using string primitives instead of numbers.',
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
