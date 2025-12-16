import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        { name: 'Cocos Creator', level: 60, icon: '🎮' },
        { name: 'JavaScript', level: 55, icon: '🌐' },
        { name: 'TypeScript', level: 50, icon: '🚀' },
        { name: 'Data Structures', level: 55, icon: '💻' }
      ]
    },
    {
      title: 'Game Development',
      skills: [
        { name: 'Performance Optimization', level: 55, icon: '⚡' },
        { name: 'UI Implementation', level: 60, icon: '📱' },
        { name: 'Bug Fixing', level: 60, icon: '🔧' },
        { name: 'Backend Integration', level: 50, icon: '🔗' },
        { name: 'FE-BE Contracts', level: 55, icon: '📋' },
        { name: 'Code Review', level: 55, icon: '👁️' },
        { name: 'Improve Tool', level: 40, icon: '🛠️' }
      ]
    }
  ];



  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>



        <div className="certifications">
          <h3>Soft Skills</h3>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon">🎯</div>
              <h4>Self-motivated</h4>
              <p>Self-driven and curious to explore related knowledge</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🔍</div>
              <h4>Problem-solving</h4>
              <p>Effective problem-solving skills</p>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🤝</div>
              <h4>Team Player</h4>
              <p>Friendly, collaborative, and positive team member</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;