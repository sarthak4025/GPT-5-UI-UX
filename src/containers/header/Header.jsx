import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Build Something Extraordinary with GPT-5 by OpenAI</h1>
        <p>GPT-5, released in 2025, represents the latest evolution of OpenAI’s Generative Pretrained Transformer series. 
        It features enhanced reasoning, multi-modal understanding, and advanced agent capabilities that enable real-time 
        task automation and intelligent collaboration. GPT-5 builds upon GPT-4’s success by offering improved accuracy, 
        deeper contextual awareness, and the ability to handle text, image, and code seamlessly — setting a new benchmark 
        for AI innovation.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>Over 5,000 people explored GPT-5 powered experiences in the last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header
