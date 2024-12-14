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
        marquee.innerHtml += marquee.innerHTML

        const animation =gsap.fromTo(
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
    
    <div className='project_main'>
        <div className="marquee" ref={marqueeRef}><span>WORK</span></div>
        <div className="project">
            <img src={Image} alt="" />
            <p>Anoymous wave</p>
        </div>
        <div className="description">
            <h3>A messenger through which you can message anoymously using Nextjs and MongoDb</h3>
        </div>
        
    </div>
  )
}

export default Project