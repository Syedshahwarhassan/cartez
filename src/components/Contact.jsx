import React from 'react'

export const Contact = () => {
  return (
    <div>
<div className="container">
  <h2 className="title">Contact Us</h2>
  <form action="#" method="POST" className="contact-form">
    <label htmlFor="name" className="label">Name</label>
    <input type="text" id="name" name="name" className="input" required />
    <label htmlFor="email" className="label">Email</label>
    <input type="email" id="email" name="email" className="input" required />
    <label htmlFor="message" className="label">Message</label>
    <textarea id="message" name="message" rows={5} className="input" required defaultValue={""} />
    <button type="submit" className="submit-btn">Submit</button>
  </form>
</div>

    </div>
  )
}
