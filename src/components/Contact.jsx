import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Contact = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Contact Me
                </Typography>
                <Typography variant="body1" paragraph>
                    If you'd like to get in touch, you can reach me through the following methods:
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2" gutterBottom>
                            <strong>Email:</strong> your.email@example.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="body2" gutterBottom>
                            <strong>Phone:</strong> (123) 456-7890
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Contact;