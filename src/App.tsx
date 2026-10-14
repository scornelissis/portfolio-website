import { useState } from "react";
import { portfolioContent } from "./content";
import type { Skill } from "./content";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg
    aria-hidden="true"
    className={diagonal ? "icon icon-diagonal" : "icon"}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const {
    profile,
    projects,
    academicProjects,
    experience,
    skillGroups,
    linkedinPosts,
  } = portfolioContent;
  const resumeUrl = `${import.meta.env.BASE_URL}simon-cornelissis-resume.pdf`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#work">
        Skip to main content
      </a>
      <header>
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Simon Cornelissis, home">
            Simon Cornelissis<span className="brand-dot">.</span>
          </a>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`} role="navigation" aria-label="Mobile navigation">
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-label="Introduction">
          <div className="hero-kicker" aria-hidden="true">
            <span>Bachelor of Applied Computer Science</span>
            <span className="hero-location">Portfolio / 2026</span>
          </div>
          <h1>
            I build software
            <br />
            <span>for the real world.</span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-intro">
              <p>
                I’m Simon. I like learning how systems fit together and making
                tools that people can actually use.
              </p>
              <div className="hero-links" aria-label="External profile links">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)">
                  GitHub <Arrow diagonal />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)">
                  LinkedIn <Arrow diagonal />
                </a>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Download resume (opens in new tab)">
                  Resume <Arrow diagonal />
                </a>
              </div>
            </div>
            <a className="circle-link" href="#work" aria-label="Explore selected work">
              <Arrow />
            </a>
          </div>
          <div className="hero-grid" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="section work" id="work" aria-labelledby="work-heading">
          <div className="section-head">
            <p className="eyebrow" id="work-heading">01 / Projects</p>
            <p className="section-intro">
              A few things I’ve built to solve a problem or learn how something
              works.
            </p>
          </div>

          <div className="projects" role="feed" aria-label="Projects list">
            {projects.map((project, index) => (
              <a
                className={`project-row project-${project.theme}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                aria-label={`${project.title} project on GitHub (opens in new tab)`}
              >
                <div className="project-top" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="project-copy">
                  <div className="project-title">
                    <span className="project-label">GitHub project</span>
                    <h2>{project.title}</h2>
                  </div>
                  <p>{project.description}</p>
                </div>
                <div className="project-meta">
                  <span aria-label={`Technology: ${project.technology}`}>{project.technology}</span>
                  <span className="project-arrow" aria-hidden="true"><Arrow diagonal /></span>
                </div>
              </a>
            ))}
          </div>

          <details className="academic-projects">
            <summary aria-label="Toggle academic projects list">
              <div>
                <span className="academic-kicker">Coursework and team projects</span>
                <h2>Academic projects</h2>
              </div>
              <div className="academic-summary-meta">
                <span>{String(academicProjects.length).padStart(2, "0")} projects</span>
                <span className="academic-toggle" aria-hidden="true">
                  <span />
                  <span />
                </span>
              </div>
            </summary>
            <div className="academic-list">
              {academicProjects.map((project, index) => (
                <article className="academic-row" key={project.title}>
                  <span className="academic-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="academic-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="academic-stack" aria-label="Technologies used">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </details>
        </section>

        <section className="section about" id="about" aria-labelledby="about-heading">
          <div className="about-title">
            <p className="eyebrow" id="about-heading">02 / About</p>
            <h2>
              I like figuring out
              <br />
              <span>how things work.</span>
            </h2>
          </div>
          <div className="about-body">
            <p className="about-lead">
              I’m Simon Cornelissis, a third-year Applied Computer Science student
              at Howest. I enjoy backend and systems work, but I’m happy wherever
              there is a real problem to solve.
            </p>
            <p>
              At Allison Off-Highway Drive & Motion Systems, I build network and
              automation tooling in Rust and Python and design digital work
              instructions for manufacturing teams. I like talking to the people
              who will use what I build.
            </p>
            <a className="text-link" href={`mailto:${profile.email}`} aria-label="Send email to Simon Cornelissis">
              Send me an email <Arrow />
            </a>
          </div>
        </section>

        <section className="section experience" aria-labelledby="experience-heading">
          <p className="eyebrow" id="experience-heading">03 / Experience</p>
          <div className="experience-list" role="feed" aria-label="Work experience list">
            {experience.map((item) => (
              <article className="experience-row" key={`${item.year}-${item.role}`}>
                <span className="experience-year">{item.year}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <p className="experience-detail">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" aria-labelledby="toolbox-heading">
          <div className="section skills-inner">
            <p className="eyebrow" id="toolbox-heading">04 / Toolbox</p>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <details className="skill-group" key={group.title}>
                  <summary aria-label={`Toggle ${group.title} skills group`}>
                    <span className="skill-group-title">{group.title}</span>
                    <span className="skill-count">
                      {String(group.skills.length).padStart(2, "0")} skills
                    </span>
                    <span className="skill-toggle" aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </summary>
                  <div className="skill-list" role="group" aria-label={`${group.title} skills`}>
                    {group.skills.map((skill) => (
                      <button
                        type="button"
                        className={
                          selectedSkill?.name === skill.name ? "is-selected" : ""
                        }
                        aria-pressed={selectedSkill?.name === skill.name}
                        onClick={() =>
                          setSelectedSkill((current) =>
                            current?.name === skill.name ? null : skill,
                          )
                        }
                        key={skill.name}
                      >
                        {skill.name}
                      </button>
                    ))}
                    {selectedSkill &&
                      group.skills.some(
                        (skill) => skill.name === selectedSkill.name,
                      ) && (
                        <div className="skill-inline-evidence" aria-live="polite">
                          <div className="skill-evidence-meta">
                            <span>Experience</span>
                            <span>{selectedSkill.source}</span>
                          </div>
                          <div className="skill-evidence-copy">
                            <h3>{selectedSkill.name}</h3>
                            <p>{selectedSkill.context}</p>
                          </div>
                        </div>
                      )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section site-story" aria-labelledby="story-heading">
          <div className="site-story-heading">
            <p className="eyebrow" id="story-heading">05 / This website</p>
            <h2>Why this site looks like this.</h2>
          </div>
          <div className="site-story-body">
            <p className="site-story-lead">
              I wanted a portfolio that gets to the point. You should be able to
              see what I’ve built, what I know, and how to reach me without
              digging around.
            </p>
            <p>
              It is built with React, TypeScript, Vite, and Tailwind CSS. It works
              across screen sizes, loads quickly, and keeps the content in one
              file so it is easy to update.
            </p>
            <div className="stack-list" aria-label="Website technology stack">
              <span>React 19</span>
              <span>TypeScript</span>
              <span>Vite</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </section>

        <div className="linkedin-footer-viewport">
          <section className="section linkedin-section" id="linkedin" aria-labelledby="linkedin-heading">
            <div className="linkedin-heading">
              <p className="eyebrow" id="linkedin-heading">06 / From LinkedIn</p>
              <h2>More from me.</h2>
              <p>I post about projects, school, and things I’m learning.</p>
              <a
                className="text-link"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Simon Cornelissis on LinkedIn (opens in new tab)"
              >
                Follow on LinkedIn <Arrow diagonal />
              </a>
            </div>
            {linkedinPosts.length > 0 ? (
              <div className="linkedin-posts" aria-label="LinkedIn posts">
                {linkedinPosts.map((post) => (
                  <iframe
                    key={post.embedUrl}
                    src={post.embedUrl}
                    title={post.title}
                    loading="lazy"
                    allowFullScreen
                  />
                ))}
              </div>
            ) : (
              <a
                className="linkedin-placeholder"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find Simon Cornelissis on LinkedIn (opens in new tab)"
              >
                <span className="linkedin-in" aria-hidden="true">in</span>
                <div>
                  <p className="eyebrow">LinkedIn</p>
                  <h3>Find me on LinkedIn.</h3>
                </div>
                <Arrow diagonal />
              </a>
            )}
          </section>

          <footer id="contact" aria-labelledby="contact-heading">
            <div className="footer-top">
              <p className="eyebrow" id="contact-heading">Have an idea or opportunity?</p>
              <h2>
                Send me
                <br />
                a message.
              </h2>
              <a className="footer-email" href={`mailto:${profile.email}`} aria-label={`Send email to ${profile.email}`}>
                {profile.email} <Arrow />
              </a>
            </div>
            <div className="footer-bottom">
              <div className="social-links" aria-label="Social media links">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)">
                  GitHub <Arrow diagonal />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in new tab)"
                >
                  LinkedIn <Arrow diagonal />
                </a>
              </div>
              <a
                className="footer-resume"
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume (opens in new tab)"
              >
                Download resume <Arrow diagonal />
              </a>
              <a href="#top" aria-label="Scroll back to top of page">Back to top ↑</a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
