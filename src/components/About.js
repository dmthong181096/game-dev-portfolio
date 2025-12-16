import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>My Story</h3>
              <p>
                I'm Doan Minh Thong, a Cocos Developer with a passion for creating 
                engaging and high-quality game experiences. With over 3 years of experience 
                in game development, I've participated in various projects from mobile games 
                to complex interactive applications.
              </p>
              <p>
                My expertise focuses on Cocos Creator engine with JavaScript, along with 
                experience in performance optimization, data management, and working with 
                cross-functional teams. I always strive to improve workflows and 
                ensure product quality.
              </p>
            </div>

            <div className="about-card">
              <h3>Development Philosophy</h3>
              <p>
                I believe game development is not just about code, but also about understanding 
                players and creating meaningful experiences. I always focus on 
                performance optimization and ensuring games run smoothly on all devices.
              </p>
              <p>
                Effective teamwork, clear communication, and continuous learning are 
                values I always pursue in my career.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Companies Worked</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">Cocos Projects</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">2.74</div>
              <div className="stat-label">Graduation GPA</div>
            </div>
          </div>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">🎮</div>
            <h4>Game Design</h4>
            <p>Creative gameplay mechanics and innovative level design</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">⚡</div>
            <h4>Performance</h4>
            <p>Optimization for all platforms and devices</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">🔧</div>
            <h4>Technical Skills</h4>
            <p>Deep knowledge of engine architecture and tools development</p>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default About;