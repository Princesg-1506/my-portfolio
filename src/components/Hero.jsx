import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero-section text-center">
      <div className="container">
        <h1 className="display-4 fw-bold ">Adesegun Oluwatosin</h1>
        <p className="lead">Wordpress Builder | Frontend Developer | Technical Support Specialist | Problem Solver</p>
        <div className="mt-3">
          <a href="#projects" className="btn btn-primary me-2">View Projects</a>
          <a href="#contact" className="btn btn-outline-light">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero