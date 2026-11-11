import React from 'react';
import { Container, Typography, Paper, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Experiences = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer',
      institution: 'SUSE',
      date: 'March 2026 - November 2026',
      description: [
        'I contributed to the Losant platform by designing and implementing workflow nodes for Kubernetes and OpenTelemetry integrations, expanding platform capabilities and enabling customers to automate infrastructure operations and observability-driven workflows.',
        'I collaborated closely with product and engineering teams to deliver new functionality and improve application usability. I participated extensively in peer code reviews, QA verification, and agile development processes, using Jira to manage work items and track feature delivery.',
        'I developed and maintained a cross-platform application using SvelteKit and Capacitor, delivering a cohesive experience across web and mobile platforms. I focused on creating intuitive user interfaces, improving usability, and ensuring a consistent experience across devices.'
      ]
    },
    {
      type: 'work',
      title: 'Software Engineer',
      institution: 'Losant IoT',
      date: 'October 2022 - March 2026',
      description: [
        'I collaborated directly with enterprise clients to develop IoT solutions spanning device connectivity, real-time data ingestion, RESTful APIs, and front-end data visualization. These solutions were built using JavaScript/TypeScript, React, Swift/SwiftUI, the Losant Visual Workflow Engine, and MongoDB.',
        'I created dynamic UI components using Stimulus.js to extend Losant’s templating system, enabling configurable dashboards tailored to client requirements. When needed, I leveraged Python, Pandas, and NumPy to analyze telemetry datasets and provide diagnostics, analytics, and operational insights.',
        'I contributed to platform-wide improvements, including authentication and authorization features such as token-based access control, role management, and third-party identity provider integrations. I also helped promote testing best practices through unit and integration testing with Jest and team-wide TDD adoption.',
        'Working within an agile development environment, I collaborated with enterprise clients, product managers, stakeholders, and sales teams to define requirements, scope features, perform code reviews, conduct QA validation, and deliver production-ready solutions.'
      ]
    },
    {
      type: 'work',
      title: 'Undergraduate Tech Student',
      institution: 'Pacific Northwest National Laboratory',
      date: 'August 2021 - September 2022',
      description: [
        'At PNNL, I supported battery research by developing Python tools that automated the creation of graphs, tables, and data visualizations using Matplotlib and NumPy. I also developed Arduino-based software to maintain a specified pressure on sensors as battery dimensions changed during charge and discharge cycles.',
        'I expanded my design skills by creating 2D and 3D illustrations for publications and presentations using Adobe Illustrator, Adobe Dimension, and Blender. This work gave me the opportunity to combine technical communication with visual design to produce scientific imagery for researchers and stakeholders.',
        'I also assisted with the assembly and testing of coin cell batteries as part of advanced materials research efforts. Working in laboratory environments strengthened my attention to detail and exposed me to the experimental processes behind scientific research and development. One unique challenge was mastering dexterity in a glove box, where even simple tasks required patience, precision, and practice.'
      ]
    },
    {
      type: 'work',
      title: 'Corrosion and Materials Engineer',
      institution: 'Marathon Petroleum Corporation',
      date: 'July 2015 - January 2021',
      description: [
        'With my duties in the Inspection Department, I developed SQL queries to support maintenance and reliability initiatives, helping teams gather and analyze operational data more efficiently. I also led a pilot project to evaluate a web-based solution for documenting and tracking turnaround work during refinery shutdowns. Replacing manual status boards with a centralized application improved communication and increased visibility during critical maintenance events.',
        'I led Integrity Operating Window and Risk Based Inspection projects at the refinery level, coordinating cross-functional teams to assess refinery units and identify opportunities for risk reduction. I also represented the inspection department by performing failure investigations and root cause analyses, helping improve equipment reliability and operational safety. In support of these responsibilities, I completed industry training and certifications related to the inspection and maintenance of pressure-containing equipment.',
        'I mentored five co-op and intern employees, supporting both their technical development and integration into the workplace. Through peer reviews, project guidance, and regular feedback, I helped foster their professional growth while strengthening my own leadership and communication skills.'
      ]
    },
    {
      type: 'work',
      title: 'Corrosion and Materials Engineer Co-op',
      institution: 'Marathon Petroleum Corporation',
      date: 'January 2013 - May 2013 | August 2013 - December 2013 | May 2014 - August 2014',
      description: [
        'I spent three school terms co-oping with Marathon, working with the Inspection Department on a variety of engineering and reliability projects. These experiences provided valuable exposure to refinery operations and helped prepare me for my full-time role with the company after graduation.',
        'The co-op program allowed me to learn from experienced engineers, develop practical problem-solving skills, and gain firsthand experience working in an industrial environment.',
        'One unexpected benefit of the role was overcoming my fear of heights. While I am still very aware of the risks associated with working at elevation, these experiences helped me build confidence and become more comfortable in environments that initially felt intimidating.'
      ]
    },
    {
      type: 'school',
      title: 'BS Computer Science',
      institution: 'Oregon State University',
      date: 'September 2020 - December 2022',
      gpa: '3.98',
      description: [
        'I decided to change careers from Materials Engineering to Software Engineering, and Oregon State helped me achieve that goal. My favorite courses were those centered on open-ended projects where I could design and build my own solutions. In addition to the required curriculum, I completed electives in Parallel Programming, Open Source Software Development, and Mobile Software Development.',
        'For my capstone project, I developed a full-stack web application for players of the TTRPG "Dungeon World" to create and manage their characters. As someone who regularly uses digital tools for tabletop gaming, it was rewarding to build a product similar to one I would use myself.'
      ]
    },
    {
      type: 'school',
      title: 'BS Materials Science and Engineering',
      institution: 'Virginia Tech',
      date: 'August 2010 - May 2015',
      gpa: '3.20',
      description: [
        'My studies at Virginia Tech helped shape both my technical foundation and work ethic. The curriculum was rigorous and challenging, but it also reinforced the collaborative mindset that Virginia Tech engineering students are known for. While I explored a variety of engineering topics, my primary interest was the degradation and failure of materials.',
        'My capstone project focused on evaluating the effects of a potassium permanganate cleaning method on fracture surfaces. Fractured samples were prepared to simulate jet turbine failures, and the work was conducted in support of research for the National Transportation Safety Board.',
        'Outside the classroom, I participated in the Galileo Engineering Learning Community, the Materials Engineering Professional Society, the Society of Hispanic Professional Engineers, and several intramural sports teams.'
      ]
    },
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        Education and Experience
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, md: 4 },
          mt: 3,
          borderRadius: 2,
        }}
      >
        {experiences.map((exp, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 1.5,
              '&:before': { display: 'none' },
              boxShadow: 'none',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: '8px !important',
              overflow: 'hidden',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${index}-content`}
              id={`panel-${index}-header`}
              sx={{ backgroundColor: 'action.hover' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                {exp.type === 'work' ? (
                  <WorkIcon color="primary" />
                ) : (
                  <SchoolIcon color="primary" />
                )}
                <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.15rem' }, fontWeight: 600 }}>
                  {exp.title}, {exp.institution}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails sx={{ pt: 2, pb: 3, px: 3 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1, fontWeight: 500 }}>
                {exp.date}
              </Typography>

              {exp.gpa && (
                <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 2, fontWeight: 500 }}>
                  GPA: {exp.gpa}
                </Typography>
              )}

              {exp.description.map((paragraph, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{
                    mb: idx < exp.description.length - 1 ? 2 : 0,
                    lineHeight: 1.7,
                    color: 'text.primary',
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Container>
  );
};

export default Experiences;