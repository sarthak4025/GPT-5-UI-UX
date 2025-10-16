import React from 'react'
import "./footer.css"
import logoUrl from "../../assets/download.svg"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Ready to explore the future of AI with us?
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Get Early Access Now</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logoUrl} alt="gpt3 logo" />
          <p>Innovation Street, New Delhi 110064, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>About Us</p>
          <p>Blog</p>
          <p>Resources</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Support</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>New Delhi , India 110064</p>
          <p>+91 7838255748</p>
          <p>sarthak4803@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyrights">
        © 2025 GPT-5. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
