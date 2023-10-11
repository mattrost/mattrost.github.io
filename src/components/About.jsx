import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                About Me
            </Typography>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h6" paragraph style={{ textAlign: 'left' }}>
                    Hi! I'm Matt Rost, a Software Engineer and former Materials Engineer based in Cincinnati, OH. After becoming increasingly stressed out from working in oil refineries, I decided to take the plunge into Software Engineering in 2020. I chose to make this big change so I could work with something that I was more passionate about! I attended Oregon State University’s Computer Science program.
                </Typography>
                <Typography variant="h6" paragraph style={{ textAlign: 'left' }}>
                    I am currently part of the team at Losant IoT, where I contribute to software solutions for our clients. My work here is as a full-stack engineer. I work mostly with React, StimulusJS, Turbo Frames, JavaScript, TypeScript, and Python. I am very enthusiastic about learning and am fortunate that every day leads to new opportunities.
                </Typography>
                <Typography variant="h6" paragraph style={{ textAlign: 'left' }}>
                    I am interested in FOSS and would love to contribute to more projects! Let me know if there is something cool you would like to collaborate on. There are not any languages or tech stacks that I am afraid of conquering!
                </Typography>
                <Typography variant="h6" paragraph style={{ textAlign: 'left' }}>
                    Some of my hobbies include playing guitar, making music, playing video games, table-top role playing games, rock climbing, hiking, spinning classes, photography, and brewing coffee. One of my fondest memories is trying out a new guitar at my local store while Peter Frampton was shopping. My favorite video games are Baldur's Gate, Escape Velocity: Override, and Jet Grind Radio.
                </Typography>
                <Typography variant="h6" paragraph style={{ textAlign: 'left' }}>
                    I am very lucky to work in a field that allows me to make things!
                </Typography>
            </Paper>
        </Container>
    );
}

export default About;