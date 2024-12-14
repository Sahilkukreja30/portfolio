import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef(null);
  const menuRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Navbar slide-in animation
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "bounce.out" }
    );

    // Stagger animation for menu items
    gsap.fromTo(
      menuRef.current,
      { x: -100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "power3.out" 
      }
    );
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);

    // Animate menu icon rotation and menu appearance
    gsap.to(".menu-icon", { rotate: isMenuOpen ? 0 : 90, duration: 0.3 });
    gsap.to(".menu-items", {
      height: isMenuOpen ? 0 : "auto",
      opacity: isMenuOpen ? 0 : 1,
      duration: 0.5,
      ease: "power1.inOut",
    });
  };

  return (
    <nav ref={navRef} className="navbar">
      <div className="logo">Sahil Kukreja</div>
      <div className="menu-icon" onClick={handleMenuToggle}>
        ☰
      </div>
      <ul className={`menu-items ${isMenuOpen ? "open" : ""}`}>
        {[
          "Home",
          "Projects",
        ].map((item, index) => (
          <li
            key={index}
            ref={(el) => (menuRef.current[index] = el)}
            className="menu-item"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;