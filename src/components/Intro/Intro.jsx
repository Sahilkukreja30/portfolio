import React, { useEffect, useRef } from 'react'
import './Intro.css'
import gsap from 'gsap';
import Image from '../../Assets/intro.jpg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Intro() {

    const marqueeRef = useRef();
    useEffect(()=>{
        const marquee = marqueeRef.current;
        marquee.innerHtml += marquee.innerHTML

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
    <div className='about_main'>
        <div className="marquee" ref={marqueeRef}><span>About me</span></div>
        <div className="intro">
            <div className='image'>
                <img src={Image} alt="" />
            </div>
            <h3>
            Hello, <b>I'm Sahil Kukreja!</b> A curious Web Developer and Tech Enthusiast who loves building innovative, efficient, and scalable solutions. I specialize in React.js, Node.js, and crafting dynamic user interfaces.Check out my projects and let’s bring ideas to life!
            </h3>
        </div>
    </div>
    
  )
}

export default Intro