import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Cocos Developer',
      company: 'EMOTION COMPANY',
      period: '07/2023 - Present',
      location: 'Ho Chi Minh City',
      description: 'Collaborate with cross-functional teams including Game Design, Art, Animation, Backend dev, and QC to develop games based on client requirements.',
      achievements: [
        'Analyze Game Design Documents and discuss feature implementation, highlighting potential challenges',
        'Coordinate with Backend to define data contracts and APIs required for project features',
        'Work with Art team to break down and optimize assets for game size efficiency',
        'Coordinate with Animation team to identify bugs (e.g., Spine-related crashes)',
        'Fix bugs reported by QC team and assist in reproducing hard-to-find bugs',
        'Manage tasks and ensure timely delivery, report project progress to team lead'
      ],
      technicalContributions: [
        'Maintain frontend code for several game titles',
        'Use Cocos Creator Engine 2.x and 3.x with JavaScript',
        'Define events and fields with Backend to establish clear FE-BE contracts',
        'Integrate server data based on FE-BE agreements',
        'Develop game flow (based on base templates)',
        'Parse necessary data for UI construction and game action scripts',
        'Implement UI based on Art demos',
        'Build action scenarios as defined by the Game Designer',
        'Review code from fellow FE developers (when needed)',
        'Optimize draw calls, resource usage, and overall game performance',
        'Improve development tools to support workflow',
        'Continuously refactor and improve code quality throughout development'
      ],
      technologies: ['Cocos Creator 2.x/3.x', 'JavaScript', 'FE-BE Integration', 'Performance Optimization']
    },
    {
      id: 2,
      title: 'Cocos Developer (Fresher)',
      company: 'GEMI COMPANY',
      period: '07/2022 - 07/2023',
      location: 'Ho Chi Minh City',
      description: 'Participate in the company\'s fresher training program. Build/assemble UI according to the art team\'s demo.',
      achievements: [
        'Participate in the company\'s fresher training program',
        'Build/assemble UI according to the art team demo',
        'Learn and understand the project\'s codebase',
        'Join projects as assigned by the team lead'
      ],
      technologies: ['Cocos Creator', 'JavaScript', 'UI Implementation']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      school: 'An Giang University',
      period: '2016 - 2019',
      description: 'Graduated with Good classification, focusing on software engineering and game development.',
      achievements: [
        'GPA: 2.74 (Good classification)',
        'Major: Software Engineering',
        'Participated in software projects at university',
        'Studied data structures and algorithms courses'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience & Education</h2>
        
        <div className="experience-content">
          <div className="work-experience">
            <h3>Work Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {index < experiences.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  
                  <div className="timeline-content">
                    <div className="experience-card">
                      <div className="experience-header">
                        <h4>{exp.title}</h4>
                        <div className="experience-meta">
                          <span className="company">{exp.company}</span>
                          <span className="period">{exp.period}</span>
                          <span className="location">{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="experience-description">{exp.description}</p>
                      
                      <div className="achievements">
                        <h5>Key Achievements:</h5>
                        <ul>
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {exp.technicalContributions && (
                        <div className="technical-contributions">
                          <h5>Technical Contributions:</h5>
                          <ul>
                            {exp.technicalContributions.map((contribution, idx) => (
                              <li key={idx}>{contribution}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="experience-technologies">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-section">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-header">
                  <h4>{edu.degree}</h4>
                  <div className="education-meta">
                    <span className="school">{edu.school}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                </div>
                
                <p className="education-description">{edu.description}</p>
                
                <div className="education-achievements">
                  <h5>Achievements:</h5>
                  <ul>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-stats">
          <div className="stat-item">
            <div className="stat-icon">💼</div>
            <div className="stat-info">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">🏢</div>
            <div className="stat-info">
              <div className="stat-number">2</div>
              <div className="stat-label">Companies Worked</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">🎮</div>
            <div className="stat-info">
              <div className="stat-number">30+</div>
              <div className="stat-label">Cocos Projects</div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Experience;