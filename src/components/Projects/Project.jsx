import React from 'react'
import './Project.css'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from '../../assets/anoy.jpg';

function Project() {
    const marqueeRef = useRef();
    useEffect(()=>{
        const marquee = marqueeRef.current;

        gsap.fromTo(
            marquee,
            { x: "100%",
                duration:5,
                ease:"linear",
             }, 
            {
              x: "-100%",
              duration: 5, 
              ease: "linear", 
              repeat: -1, 
            }
          );
        
    },[]);
  return (
    
    <div className='project_main' id='project'>
        <div className="marquee" ref={marqueeRef}><h1>WORK</h1></div>
        <div className="project">
            <img src={Image} alt="" />
            <p>Anoymous wave</p>
        </div>
        <div class="bg-services2"><svg id="bg-two" height="270px" width="270px" filter="blur(100px)" xmlns="http://www.w3.org/2000/svg"><circle r="48%" cx="50%" cy="50%" fill="var(--maxgreenyellow)"></circle></svg></div>
        <div className="description">
            <h3>A messenger through which you can message anoymously using Nextjs and MongoDb</h3>
        </div>
        
    </div>
  )
}

export default Project