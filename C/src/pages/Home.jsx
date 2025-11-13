// src/components/Home.js
import React, { useEffect } from 'react';
import { useState } from 'react'
import ProjectSummaryCard from '../components/ProjectSummaryCard';
 

const Home = ({title}) => {
      const [count, setCount] = useState(0) ;
      const [display, setDisplay] = useState(false);


      function handleSecondClick(e){
        console.log(e.target)
        setDisplay(valor => !valor)
      }

      useEffect(()=>{
        console.log(display)
      },[display])

  return ( 
  <>
  <div>
      <h2></h2>
      <p>Welcome to my {title}page!</p>
      {display && (
        
        <ProjectSummaryCard />

      )}
     
  </div>
      <button 
      onClick={handleSecondClick}
      >Display Technical Test</button>
  </>);
};

export default Home;