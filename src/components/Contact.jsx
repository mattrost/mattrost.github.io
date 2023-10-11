import React from 'react';
import { Container, Typography, Grid, Paper, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {

    const githubUrl = 'https://github.com/mattrost';
    const linkedinUrl = 'https://www.linkedin.com/in/matthew-r123';
    const email = 'mailto:mrost123@gmail.com';

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Contact Me
            </Typography>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5" paragraph>
                    If you'd like to get in touch or collaborate, you can reach me through the following:
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h5" gutterBottom>
                            <strong>Email:</strong>{' '}
                            <Link href={email} target="_blank" rel="noopener noreferrer">
                                <EmailIcon color="secondary"/>
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h5" gutterBottom>
                            <strong>LinkedIn:</strong>{' '}
                            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon color="secondary"/>
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h5" gutterBottom>
                            <Typography variant="h5" gutterBottom>
                                <strong>GitHub:</strong>{' '}
                                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon color="secondary"/>
                                </Link>
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Contact;