import React, { useEffect, useRef } from 'react'
import './Intro.css'
import gsap from 'gsap';
import Image from '../../assets/intro.jpg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
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
        <div className="marquee" ref={marqueeRef}><h2 className='text3'>ABOUT ME</h2></div>
        <div className="intro">
            <div className='image'>
                <img id="mainImage" src={Image} alt="" />
            </div>
            <div class="bg-services"><svg id="bg-two" height="270px" width="270px" filter="blur(300px)" xmlns="http://www.w3.org/2000/svg"><circle r="48%" cx="50%" cy="50%" fill="var(--maxgreenyellow)"></circle></svg></div>
            <h3 className='intro_1'>
            Hello, <b>I'm Sahil Kukreja!</b> A curious Web Developer and Tech Enthusiast who loves building innovative, efficient, and scalable solutions. I specialize in React.js, Node.js, and crafting dynamic user interfaces.Check out my projects and let’s bring ideas to life!
            </h3>
        </div>
    </div>
    
  )
}

export default Intro