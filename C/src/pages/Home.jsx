// src/components/Home.js
import React, { useEffect } from 'react';
import { useState } from 'react'
 

const Home = ({title}) => {
      const [count, setCount] = useState(0) ;
      const [valor, setValor] = useState(false);


      function handleSecondClick(e){
        console.log(e.target)
        setValor(valor => !valor)
      }

      useEffect(()=>{
        console.log(valor)
      },[valor])

  return ( 
  <>
  <div>
      <h2>{title}</h2>
      <p>Welcome to our homepage! This is where we share the latest updates and news.</p>
      <p>Click the button to increase the count:</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </div>
     
  </>
      )
};

export default Home;