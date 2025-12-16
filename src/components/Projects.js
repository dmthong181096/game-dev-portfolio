import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Client Game Projects',
      category: 'mobile',
      image: '/api/placeholder/400/250',
      description: 'Các dự án game mobile được phát triển cho clients tại EMOTION COMPANY với Cocos Creator.',
      technologies: ['Cocos Creator', 'JavaScript', 'Backend APIs', 'Spine Animation'],
      features: ['Cross-platform Mobile', 'Backend Integration', 'Performance Optimization', 'Asset Management'],
      demoUrl: '#',
      codeUrl: '#',
      status: 'completed'
    },
    {
      id: 2,
      title: 'UI Implementation Projects',
      category: 'mobile',
      image: '/api/placeholder/400/250',
      description: 'Xây dựng và lắp ráp UI components theo design từ art team, đảm bảo responsive và user-friendly.',
      technologies: ['Cocos Creator', 'JavaScript', 'UI Components'],
      features: ['Responsive Design', 'Art Integration', 'User Experience', 'Component Reusability'],
      demoUrl: '#',
      codeUrl: '#',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Performance Optimization',
      category: 'mobile',
      image: '/api/placeholder/400/250',
      description: 'Tối ưu hóa performance cho mobile games, giảm memory usage và cải thiện frame rate.',
      technologies: ['Cocos Creator', 'JavaScript', 'Profiling Tools'],
      features: ['Memory Optimization', 'Asset Compression', 'Draw Call Reduction', 'Loading Time Improvement'],
      demoUrl: '#',
      codeUrl: '#',
      status: 'in-progress'
    },
    {
      id: 4,
      title: 'Bug Fixing & QA Support',
      category: 'mobile',
      image: '/api/placeholder/400/250',
      description: 'Sửa lỗi được báo cáo bởi QC team và hỗ trợ reproduce các bugs khó tìm.',
      technologies: ['Cocos Creator', 'JavaScript', 'Debugging Tools'],
      features: ['Bug Reproduction', 'Code Analysis', 'Testing Support', 'Quality Assurance'],
      demoUrl: '#',
      codeUrl: '#',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Backend Integration',
      category: 'web',
      image: '/api/placeholder/400/250',
      description: 'Tích hợp frontend game với backend services, định nghĩa data contracts và APIs.',
      technologies: ['JavaScript', 'REST APIs', 'Data Contracts'],
      features: ['API Integration', 'Data Management', 'Error Handling', 'Real-time Updates'],
      demoUrl: '#',
      codeUrl: '#',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Code Review & Mentoring',
      category: 'mobile',
      image: '/api/placeholder/400/250',
      description: 'Review code từ fellow developers và cải thiện code quality trong team.',
      technologies: ['JavaScript', 'Git', 'Code Standards'],
      features: ['Code Quality', 'Best Practices', 'Team Collaboration', 'Knowledge Sharing'],
      demoUrl: '#',
      codeUrl: '#',
      status: 'in-progress'
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'pc', label: 'PC Games' },
    { key: 'mobile', label: 'Mobile Games' },
    { key: 'web', label: 'Web Games' },
    { key: 'vr', label: 'VR/AR' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        
        {/* Filter buttons will be shown when projects are added */}
        {false && (
          <div className="project-filters">
            {filters.map(filter => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}

        <div className="projects-empty">
          <div className="empty-state">
            <div className="empty-icon">🚧</div>
            <h3>Projects Under Development</h3>
            <p>
              I'm currently in the process of compiling and preparing projects for presentation. 
              Please check back later to see my complete portfolio!
            </p>
            <div className="coming-soon">
              <span>Coming Soon...</span>
            </div>
          </div>
        </div>

        <div className="projects-cta">
          <h3>Interested in My Work?</h3>
          <p>I'm always ready to discuss collaboration opportunities and exciting game projects!</p>
          <button className="btn" onClick={() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;