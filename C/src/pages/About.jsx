// src/components/About.js
import React from 'react';
 

const About = ({title}) =>{
    
 return  (
    <>
    <h2>{title}</h2>
    <p
    className='font-light text-cyan-400'
    >Hello, I'm Joseph Lorenzini, a digital nomad passionate about the internet, web development technology, 
    and cryptocurrency. I founded Viento del Sur in 2009 to facilitate internet accessibility to everyone.
    <br /><br />
    I have maintained a commitment to open source and freedom since the beginning of this project. 
    My intention is to continue delivering digital solutions with humility and accessibility for everyone.
    <br /><br />
    I studied Graphic Design in Chile and earned my degree in Computer Science in Australia in 2023. 
    As a freelance developer, I'm always ready to solve your challenges wherever I am, as long as there's an internet connection.</p>
 
    </>
    
    )
};

export default About;