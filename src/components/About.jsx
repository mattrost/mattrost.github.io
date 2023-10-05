import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" paragraph>
                    Hello! I'm [Your Name], a [Your Profession] based in [Your Location].
                </Typography>
                <Typography variant="body1" paragraph>
                    I am passionate about [Your Interests/Hobbies] and love [What You Love Doing].
                </Typography>
                <Typography variant="body1" paragraph>
                    Here are some of my skills and expertise:
                </Typography>
                <ul>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    <li>Skill 3</li>
                    {/* Add more skills */}
                </ul>
            </Paper>
        </Container>
    );
}

export default About;