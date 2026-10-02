import React from 'react'

const Skills = () => {
  return (
   <section className="bg-light py-5">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="row">
          <div className="col-md-4">
            <h5>Technical</h5>
            <ul>
              <li>HTML/CSS</li>
              <li>Wordpress</li>
              <li>Elementor</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Professional</h5>
            <ul>
              <li>Graphic Design</li>
              <li>Teamwork</li>
              <li>Adaptability</li>
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Tools</h5>
            <ul>
              <li>Visual Studio Code</li>
              <li>Git & GitHub</li>
              <li>WordPress</li>
              <li>Canva</li>
              <li>CorelDraw</li>
              <li>Microsoft Office Suite</li>
              <li>AI Tools (Claude, ChatGPT and more)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills