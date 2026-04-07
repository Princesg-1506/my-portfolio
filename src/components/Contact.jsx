import React from 'react'

const Contact = () => {
  return (
<section id="contact" className="py-5">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <form>
          <input className="form-control mb-3" placeholder="Name" />
          <input className="form-control mb-3" placeholder="Email" />
          <textarea className="form-control mb-3" rows="4" placeholder="Message"></textarea>
          <button className="btn btn-dark w-100">Send Message</button>
        </form>
      </div>
    </section>  )
}

export default Contact