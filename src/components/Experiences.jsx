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
      institution: 'SUSE',
      date: 'March 2026 - November 2026',
      description: 'I contributed to the Losant platform by designing and implementing workflow nodes for Kubernetes and OpenTelemetry integrations, expanding platform capabilities and enabling customers to automate infrastructure operations and observability-driven workflows.' +
        '<br />' +
        'I collaborated closely with product and engineering teams to deliver new functionality and improve application usability. I participated extensively in peer code reviews, QA verification, and agile development processes, using Jira to manage work items and track feature delivery.' +
        '<br />' +
        'I developed and maintained a cross-platform application using SvelteKit and Capacitor, delivering a cohesive experience across web and mobile platforms. I focused on creating intuitive user interfaces, improving usability, and ensuring a consistent experience across devices.'
    },
    {
      type: 'work',
      title: 'Software Engineer',
      institution: 'Losant IoT',
      date: 'October 2022 - March 2026',
      description: 'I collaborated directly with enterprise clients to develop IoT solutions spanning device connectivity, real-time data ingestion, RESTful APIs, and front-end data visualization. These solutions were built using JavaScript/TypeScript, React, Swift/SwiftUI, the Losant Visual Workflow Engine, and MongoDB.' +
        '<br />' +
        'I created dynamic UI components using Stimulus.js to extend Losant’s templating system, enabling configurable dashboards tailored to client requirements. When needed, I leveraged Python, Pandas, and NumPy to analyze telemetry datasets and provide diagnostics, analytics, and operational insights.' +
        '<br />' +
        'I contributed to platform-wide improvements, including authentication and authorization features such as token-based access control, role management, and third-party identity provider integrations. I also helped promote testing best practices through unit and integration testing with Jest and team-wide TDD adoption.' +
        '<br />' +
        'Working within an agile development environment, I collaborated with enterprise clients, product managers, stakeholders, and sales teams to define requirements, scope features, perform code reviews, conduct QA validation, and deliver production-ready solutions.'
    },
    {
      type: 'work',
      title: 'Undergraduate Tech Student',
      institution: 'Pacific Northwest National Laboratory',
      date: 'August 2021 - September 2022',
      description: 'At PNNL, I supported battery research by developing Python tools that automated the creation of graphs, tables, and data visualizations using Matplotlib and NumPy. I also developed Arduino-based software to maintain a specified pressure on sensors as battery dimensions changed during charge and discharge cycles.' +
        '<br />' +
        'I expanded my design skills by creating 2D and 3D illustrations for publications and presentations using Adobe Illustrator, Adobe Dimension, and Blender. This work gave me the opportunity to combine technical communication with visual design to produce scientific imagery for researchers and stakeholders.' +
        '<br />' +
        'I also assisted with the assembly and testing of coin cell batteries as part of advanced materials research efforts. Working in laboratory environments strengthened my attention to detail and exposed me to the experimental processes behind scientific research and development. One unique challenge was mastering dexterity in a glove box, where even simple tasks required patience, precision, and practice.'
    },
    {
      type: 'work',
      title: 'Corrosion and Materials Engineer',
      institution: 'Marathon Petroleum Corporation',
      date: 'July 2015 - January 2021',
      description: 'With my duties in the Inspection Department, I developed SQL queries to support maintenance and reliability initiatives, helping teams gather and analyze operational data more efficiently. I also led a pilot project to evaluate a web-based solution for documenting and tracking turnaround work during refinery shutdowns. Replacing manual status boards with a centralized application improved communication and increased visibility during critical maintenance events.' +
        '<br />' +
        'I led Integrity Operating Window and Risk Based Inspection projects at the refinery level, coordinating cross-functional teams to assess refinery units and identify opportunities for risk reduction. I also represented the inspection department by performing failure investigations and root cause analyses, helping improve equipment reliability and operational safety. In support of these responsibilities, I completed industry training and certifications related to the inspection and maintenance of pressure-containing equipment.' +
        '<br />' +
        'I mentored five co-op and intern employees, supporting both their technical development and integration into the workplace. Through peer reviews, project guidance, and regular feedback, I helped foster their professional growth while strengthening my own leadership and communication skills.'
    },
    {
      type: 'work',
      title: 'Corrosion and Materials Engineer Co-op',
      institution: 'Marathon Petroleum Corporation',
      date: 'January 2013 - May 2013 | August 2013 - December 2013 | May 2014 - August 2014',
      description: 'I spent three school terms co-oping with Marathon, working with the Inspection Department on a variety of engineering and reliability projects. These experiences provided valuable exposure to refinery operations and helped prepare me for my full-time role with the company after graduation.' +
        '<br />' +
        'The co-op program allowed me to learn from experienced engineers, develop practical problem-solving skills, and gain firsthand experience working in an industrial environment.' +
        '<br />' +
        'One unexpected benefit of the role was overcoming my fear of heights. While I am still very aware of the risks associated with working at elevation, these experiences helped me build confidence and become more comfortable in environments that initially felt intimidating.'
    },
    {
      type: 'school',
      title: 'BS Computer Science',
      institution: 'Oregon State University',
      date: 'September 2020 - December 2022',
      description: 'I decided to change careers from Materials Engineering to Software Engineering, and Oregon State helped me achieve that goal. My favorite courses were those centered on open-ended projects where I could design and build my own solutions. In addition to the required curriculum, I completed electives in Parallel Programming, Open Source Software Development, and Mobile Software Development.' +
        '<br />' +
        'For my capstone project, I developed a full-stack web application for players of the TTRPG "Dungeon World" to create and manage their characters. As someone who regularly uses digital tools for tabletop gaming, it was rewarding to build a product similar to one I would use myself.',      gpa: '3.98',
    },
    {
      type: 'school',
      title: 'BS Materials Science and Engineering',
      institution: 'Virginia Tech',
      date: 'August 2010 - May 2015',
      description: 'My studies at Virginia Tech helped shape both my technical foundation and work ethic. The curriculum was rigorous and challenging, but it also reinforced the collaborative mindset that Virginia Tech engineering students are known for. While I explored a variety of engineering topics, my primary interest was the degradation and failure of materials.' +
        '<br />' +
        'My capstone project focused on evaluating the effects of a potassium permanganate cleaning method on fracture surfaces. Fractured samples were prepared to simulate jet turbine failures, and the work was conducted in support of research for the National Transportation Safety Board.' +
        '<br />' +
        'Outside the classroom, I participated in the Galileo Engineering Learning Community, the Materials Engineering Professional Society, the Society of Hispanic Professional Engineers, and several intramural sports teams.',
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
                    <br />
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