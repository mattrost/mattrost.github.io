import React from 'react';
import { Container, Typography, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Experiences = () => {
    const experiences = [
        {
            type: 'work',
            title: 'Software Engineer',
            institution: 'Losant IoT',
            date: 'October 2022 - Present',
            description: 'I collaborated directly with enterprise clients to develop IoT solutions spanning from device connectivity and real-time data ingestion to fron-end data visualization. These solutions were built using JavaScript/TypeScript, React, and occasionally Swift/SwiftUI depending on the project. On the back end, I developed secure, scalable RESTful APIs and services using the Losant Visual Workflow Engine, integrating with MongoDB for non-relational data storage.' +
                '<br />' +
                'I also created dynamic UI components using Stimulus.js to extend Losant’s templating system, enabling configurable dashboards tailored to client needs. When required, I performed data analysis in Python (Pandas, NumPy) to derive insights from exported telemetry datasets, supporting both internal diagnostics and client-facing reporting.' +
                '<br />' +
                'Beyond engineering, I collaborated with product managers, stakeholders, and the sales team to define requirements, scope features, and deliver production-ready solutions on tight sprint timelines. I also contributed to platform-wide improvements, led efforts in authentication and authorization (token-based access control, role management, third-party identity providers), and promoted testing best practices through unit/integration tests with Jest and team-wide TDD adoption.' +
                '<br />' +
                'This was a great experience as I was able to work in a fast-paced software development lifecycle, utilizing Jira for task management. During our sprints, I was expected to implement and enforce coding standards, perform code reviews, and test others\' completed items.'
        },
        {
            type: 'work',
            title: 'Undergraduate Tech Student',
            institution: 'Pacific Northwest National Laboratory',
            date: 'August 2021 - September 2022',
            description: 'This was a really cool job! My duties at the lab consisted of assisting with battery research. I developed Python scripts with other scientists to automate the creation of graphs and tables using Matplotlib and Numpy. I was also exposed to Arduino, where I created a program to maintain a specified pressure applied to a sensor as a battery\'s dimensions changed during charge and discharge.\n' +
                '<br />' +
                'I honed my graphic design skills by creating 2D and 3D illustrations for publications and presentations. This work was done using Adobe Illustrator, Adobe Dimension, and Blender. I appreciated the opportunity to tap into my creative side while producing scientific imagery.\n' +
                '<br />' +
                'Part of my responsibilities included assembling and testing coin cell batteries. My goal was to experiment with new approaches in advanced battery material research and development. One of my significant challenges was mastering dexterity in a glove box. Some days, this task allowed me to enter a zen-like state, similar to the feeling I experience when I\'m in the zone developing software.',
        },
        {
            type: 'work',
            title: 'Corrosion and Materials Engineer',
            institution: 'Marathon Petroleum Corporation',
            date: 'July 2015 - January 2021',
            description: 'With my duties in the Inspection Department, I created SQL queries for maintenance and reliability initiatives. This was very helpful to expedite data gathering. I also conducted a pilot project at a refinery to prototype a solution for increasing maintenance efficiency during plant shutdowns. The program was a web application that was used to document turnaround work. Prior to this being used, employees would have to walk to a trailer and look at a chart on a wall. This allowed for better communication during shutdowns, and fewer phone calls.' +
                '<br />' +
                'I led Integrity Operating Window and Risk Based Inspection projects at the refinery level. I formed and supervised cross-functional teams to assess multiple refinery units for these projects. I also represented the inspection department by performing failure investigations and root cause analyses. This was a very important part of my job where I felt like I could make the most positive impact. I also received training and industry certifications relating to inspection and maintenance of pressure containing equipment.' +
                '<br />' +
                'I mentored five co-op and intern employees to facilitate professional development. I was able to strengthen my knowledge by explaining topics to these employees. I conducted peer review meetings to ensure these employees were comfortable with their work, the workplace, and their developing skills. I also worked with a lot of great people throughout my time at Marathon. I am thankful and appreciative of all of them.',
        },
        {
            type: 'work',
            title: 'Corrosion and Materials Engineer Co-op',
            institution: 'Marathon Petroleum Corporation',
            date: 'January 2013 - May 2013 | August 2013 - December 2013 | May 2014 - August 2014',
            description: 'I spent three school terms co-oping with Marathon. I worked with the inspection department, where I was tasked with small projects. A lot of this work helped me prepare for my full time position that started in 2015. I was able to overcome my fear of heights throughout these co-op terms. While I no longer become petrified when elevated, I am still wary of the dangers associated with falling.',
        },
        {
            type: 'school',
            title: 'BS Computer Science',
            institution: 'Oregon State University',
            date: 'September 2020 - December 2022',
            description: 'I decided to change careers from Materials Engineering to Software Engineering! Oregon State helped me achieve this goal. My favorite classes were ones that focused on open-ended assignments, where I could build any project that I wanted to! I took the following electives on top of my required curriculum: Parallel Programming, Open Source Software Development, and Mobile Software Development.\n' +
                '<br />' +
                'My capstone project was a full-stack web application for players of the TTRPG “Dungeon World” to create and manage their in game characters. As someone who uses a web app for another TTRPG, it was nice to work on something similar to a product that I utilize.',
            gpa: '3.98',
        },
        {
            type: 'school',
            title: 'BS Materials Science and Engineering',
            institution: 'Virginia Tech',
            date: 'August 2010 - May 2015',
            description: 'My studies at Virginia Tech helped shape the person I am today. The curriculum in this program was rigorous, which helped me develop a strong work ethic. Most importantly, I was able to build lifelong connections with others during my studies. Virginia Tech\'s Engineering students are known for their collaborative nature rather than competitiveness. I took a wide variety of electives, but my primary interest was in the degradation of materials.\n' +
                '<br />' +
                'The focus of my capstone project was to identify the effect of a potassium permanganate cleaning method on fracture surfaces. Fractured samples were prepared to simulate jet turbine fractures. This work was conducted for the National Transportation Safety Board.\n' +
                '<br />' +
                'I participated in the Galileo Engineering Learning Community, Materials Engineering Professional Society, Society of Hispanic Professional Engineers, as well as various intramural sports teams.',
            gpa: '3.20',
        },
    ];

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Education and Experience
            </Typography>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                {experiences.map((experience, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel-${index}-content`}
                            id={`panel-${index}-header`}
                        >
                            {experience.type === 'work' ? (
                                <WorkIcon />
                            ) : (
                                <SchoolIcon />
                            )}
                            <Typography variant="h6" style={{ marginLeft: '8px' }}>
                                {experience.title}, {experience.institution}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="subtitle1" style={{ textAlign: 'left' }}>
                                {experience.date}
                            </Typography>
                            {experience.type === 'school' ? (
                                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>
                                    GPA: {experience.gpa}
                                </Typography>
                            ) : (
                                <Typography variant="subtitle1" style={{ textAlign: 'left' }}>
                                </Typography>
                            )}
                            {experience.description.split('<br />').map((paragraph, idx) => (
                                <React.Fragment key={idx}>
                                    <Typography variant="body2" style={{ textAlign: 'left' }}>
                                        {paragraph}
                                    </Typography>
                                    {idx < experience.description.split('<br />').length - 1 && (
                                        <br /> // Add extra space between paragraphs
                                    )}
                                </React.Fragment>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Paper>
        </Container>
    );
}

export default Experiences;