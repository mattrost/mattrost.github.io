import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const Projects = () => {
    // Define your project data (replace with your actual project details)
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of Project 1.',
            link: '#', // Add a link to the project or details
        },
        {
            title: 'Project 2',
            description: 'Description of Project 2.',
            link: '#', // Add a link to the project or details
        },
        // Add more projects as needed
    ];

    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    My Projects
                </Typography>
                <Grid container spacing={3}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href={project.link} target="_blank" rel="noopener noreferrer" size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    );
}

export default Projects;