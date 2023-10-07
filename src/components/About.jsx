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
                    Hello, I'm Matthew Rost, a Software Engineer based in Cincinnati, OH. I have dedicated myself to the ever-evolving world
                    of software development. Currently, I am fortunate to be a part of the dynamic team at Losant, where
                    I contribute my skills and expertise to create innovative software solutions. As someone deeply
                    immersed in the realm of technology, I constantly strive to learn and grow in my field, always eager
                    to take on new challenges and explore the endless possibilities that software engineering offers.
                    Join me on this journey as we delve deeper into the fascinating world of coding and innovation.
                </Typography>
                <Typography variant="body1" paragraph>
                    In addition to my professional journey, I hold a diverse educational background that has greatly
                    enriched my perspective as a Software Engineer. I earned my Bachelor of Science in Materials Science
                    and Engineering from Virginia Tech in 2015, where I honed my analytical and problem-solving skills
                    in a field that combines science and engineering to create cutting-edge materials and technologies.
                </Typography>
                <Typography variant="body1" paragraph>
                    Building on this foundation, I further expanded my knowledge by pursuing another Bachelor of
                    Science, this time in Computer Science, at Oregon State University. In 2022, I successfully
                    completed my computer science degree, equipping myself with a robust set of programming skills and a
                    deep understanding of the principles that underpin the digital world we live in.
                </Typography>
                <Typography variant="body1" paragraph>
                    I am passionate about [Your Interests/Hobbies] and love [What You Love Doing].
                </Typography>
                <Typography variant="body1" paragraph>
                    Here are some of my skills and expertise:
                </Typography>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    {/* Add more skills */}
                </ul>
            </Paper>
        </Container>
    );
}

export default About;