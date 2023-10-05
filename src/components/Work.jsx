import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const Work = () => {
    // Define your work experience data (replace with your actual work experience details)
    const workExperience = [
        {
            jobTitle: 'Job Title 1',
            company: 'Company 1',
            date: 'Month Year - Month Year',
            description: 'Description of your responsibilities and achievements at Company 1.',
        },
        {
            jobTitle: 'Job Title 2',
            company: 'Company 2',
            date: 'Month Year - Month Year',
            description: 'Description of your responsibilities and achievements at Company 2.',
        },
        // Add more work experience entries as needed
    ];

    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Work Experience
                </Typography>
                <List>
                    {workExperience.map((experience, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <WorkIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={`${experience.jobTitle}, ${experience.company}`}
                                secondary={`${experience.date}`}
                            />
                            <Typography variant="body2">
                                {experience.description}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    );
}

export default Work;