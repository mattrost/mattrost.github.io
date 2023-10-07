import React from 'react';

import About from './About';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <div id ='about' style={{minHeight: '100vh', paddingTop: '64px'}}>
                <About />
            </div>
            <div id ='work' style={{minHeight: '100vh', paddingTop: '64px'}}>
                <Work />
            </div>
            <div id ='projects' style={{minHeight: '100vh', paddingTop: '64px'}}>
                <Projects />
            </div>
            <div id ='contact' style={{minHeight: '100vh', paddingTop: '64px'}}>
                <Contact />
            </div>

            <div style={{ paddingBottom: '100px' }}></div>
        </>
    );
};

export default Home;