import { SplineScene } from './components/SplineScene'
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Code2, Award, Briefcase, GraduationCap } from 'lucide-react'
import { portfolioData } from './data'

function App() {
    const { name, about, experience, projects, skills, education, contact, certifications } = portfolioData;

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="portfolio-container">
            {/* Navigation */}
            <nav className="navbar">
                <div className="logo" onClick={() => handleScroll('home')} style={{ cursor: 'pointer' }}>
                    {name.split(' ')[0]}.
                </div>
                <div className="nav-links">
                    <a onClick={() => handleScroll('about')} href="#about">About</a>
                    <a onClick={() => handleScroll('experience')} href="#experience">Experience</a>
                    <a onClick={() => handleScroll('projects')} href="#projects">Work</a>
                    <a onClick={() => handleScroll('contact')} href="#contact">Contact</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="gradient-text">Full Stack and AI Agent Developer</span> <br />
                        Hey, I'm {name.split(' ')[0]}.
                    </h1>
                    <p className="hero-subtitle">
                        {about.split('.')[0]}.
                    </p>
                    <div className="hero-cta">
                        <button className="btn primary" onClick={() => handleScroll('projects')}>View Projects</button>
                        <button className="btn secondary" onClick={() => handleScroll('contact')}>Contact Me</button>
                    </div>
                </div>

                {/* 3D Spline Scene Wrapper */}
                <div className="spline-wrapper">
                    <SplineScene
                        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                        className="spline-canvas"
                    />
                </div>

                <div className="scroll-indicator" onClick={() => handleScroll('about')} style={{ cursor: 'pointer' }}>
                    <span>Scroll</span>
                    <ChevronDown size={20} className="bounce" />
                </div>
            </section>

            {/* Rest of the Content Wrapper */}
            <main className="main-content">

                {/* About & Education */}
                <section id="about" className="section-padding">
                    <div className="section-header">
                        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                    </div>
                    <div className="about-grid">
                        <div className="glass-card full-height">
                            <h3 className="card-title"><Code2 className="card-icon" /> Background</h3>
                            <p className="about-text">{about}</p>

                            <div className="mt-2rem">
                                <h3 className="card-title"><Award className="card-icon" /> Certifications</h3>
                                <div className="chips-container">
                                    {certifications.map((cert, index) => (
                                        <span key={index} className="chip">{cert}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="glass-card full-height">
                            <h3 className="card-title"><GraduationCap className="card-icon" /> Education</h3>
                            <div className="timeline">
                                {education.map((edu, index) => (
                                    <div key={index} className="timeline-item">
                                        <div className="timeline-dot"></div>
                                        <div className="timeline-content">
                                            <h4>{edu.degree}</h4>
                                            <span>{edu.institution}</span>
                                            <p className="text-muted">{edu.year}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience & Skills */}
                <section id="experience" className="section-padding bg-alt">
                    <div className="section-header">
                        <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
                    </div>

                    <div className="split-grid">
                        <div className="experience-list">
                            {experience.map((exp, index) => (
                                <div key={index} className="glass-card experience-card">
                                    <div className="card-header">
                                        <h3 className="role">{exp.role}</h3>
                                        <span className="duration">{exp.duration}</span>
                                    </div>
                                    <ul className="achievements-list">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="skills-container glass-card">
                            <h3 className="card-title"><Briefcase className="card-icon" /> Expertise</h3>

                            <div className="skill-group">
                                <h4>AI Frameworks</h4>
                                <div className="chips-container">
                                    {skills.ai_frameworks.map((skill, i) => (
                                        <span key={i} className="chip accent">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-group">
                                <h4>Languages & Tech</h4>
                                <div className="chips-container">
                                    {[...skills.languages, ...skills.web].map((skill, i) => (
                                        <span key={i} className="chip">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-group">
                                <h4>Leadership</h4>
                                <div className="chips-container outline">
                                    {skills.leadership.map((skill, i) => (
                                        <span key={i} className="chip">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="section-padding">
                    <div className="section-header">
                        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card glass-card" onClick={() => (project as any).github ? window.open((project as any).github, '_blank') : null}>
                                <div className="project-content">
                                    <h3 className="project-title">{project.name}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    <div className="project-result">
                                        <strong>Impact:</strong> {project.result}
                                    </div>
                                    {(project as any).github && (
                                        <div className="mt-2rem">
                                            <a href={(project as any).github} target="_blank" rel="noreferrer" className="btn secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }} onClick={(e) => e.stopPropagation()}>
                                                <Github size={14} style={{ marginRight: '0.5rem' }} /> View Source
                                            </a>
                                        </div>
                                    )}
                                </div>
                                {/* Visual placeholder for a project image/graphic if it was there */}
                                <div className="project-hover-effect">
                                    <ExternalLink size={24} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact form below */}
                <section id="contact" className="section-padding contact-section bg-alt">
                    <div className="contact-form-container">
                        <h2 className="contact-form-title">Contact me</h2>
                        <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="e2bb9150-3403-4600-992f-0bca5d8aa3ba" />
                            {/* Make the subject line descriptive */}
                            <input type="hidden" name="subject" value="New Submission from Portfolio" />
                            <div className="form-group">
                                <input type="text" name="name" className="form-input" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-input" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" className="form-input form-textarea" placeholder="Message" required></textarea>
                            </div>
                            {/* Add a honeypot to prevent spam */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                            <button type="submit" className="btn-submit">Send</button>
                        </form>
                    </div>
                </section>

            </main>

            {/* Social Links floating */}
            <div className="social-links">
                <a href={contact.github} target="_blank" rel="noreferrer" title="Github"><Github size={20} /></a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
                <a href={`mailto:${contact.email}`} title="Email"><Mail size={20} /></a>
            </div>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App
