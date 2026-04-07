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
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Professional</h5>
            <ul>
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Tools</h5>
            <ul>
              <li>POS Systems</li>
              <li>Networking Basics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills