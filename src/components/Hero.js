import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Cocos Developer';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Doan Minh Thong</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              A passionate software engineer with over 3 years of experience in game development. 
              I aim to contribute to building exciting and high-quality games while 
              growing alongside the company. My goal is to help establish efficient workflows 
              that improve productivity and optimize project timelines.
            </p>
            
            <div className="hero-buttons">
              <button className="btn" onClick={scrollToProjects}>
                View Projects
              </button>
              <button className="btn btn-outline" onClick={scrollToContact}>
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="game-controller">
              <div className="controller-body">
                <div className="d-pad">
                  <div className="d-pad-center"></div>
                  <div className="d-pad-up"></div>
                  <div className="d-pad-down"></div>
                  <div className="d-pad-left"></div>
                  <div className="d-pad-right"></div>
                </div>
                <div className="buttons">
                  <div className="button button-a"></div>
                  <div className="button button-b"></div>
                  <div className="button button-x"></div>
                  <div className="button button-y"></div>
                </div>
                <div className="analog-sticks">
                  <div className="analog-stick left-stick"></div>
                  <div className="analog-stick right-stick"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;