import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css'; // Renamed for clarity and future maintenance

const WhatGPT5 = () => (
  <div className="gpt5__whatgpt5 section__margin" id="wgpt5">
    <div className="gpt5__whatgpt5-feature">
      <Feature
        title="What is GPT-5?"
        text="GPT-5 (Generative Pre-trained Transformer 5) is OpenAI’s most advanced multimodal AI model, capable of understanding and generating text, images, audio, and structured data in real time. Building upon GPT-4, it delivers enhanced reasoning, long-term memory, and autonomous agent capabilities — setting a new standard for human-AI collaboration."
      />
    </div>

    <div className="gpt5__whatgpt5-heading">
      <h1 className="gradient__text">The future of intelligence is already here.</h1>
      <p>Explore the New Era of AI</p>
    </div>

    <div className="gpt5__whatgpt5-container">
      <Feature
        title="AI Assistants"
        text="GPT-5 powers next-generation agents that can plan, reason, and act — automating workflows, generating content, analyzing data, and managing complex real-world tasks autonomously."
      />
      <Feature
        title="Knowledge & Research"
        text="With advanced multimodal learning and deep contextual reasoning, GPT-5 can synthesize knowledge across domains — empowering researchers, educators, and data scientists to innovate faster and smarter."
      />
      <Feature
        title="Innovation & Creativity"
        text="From design to storytelling, GPT-5 fuels creativity by blending logic, emotion, and imagination — enabling developers, artists, and entrepreneurs to build truly intelligent experiences."
      />
    </div>
  </div>
);

export default WhatGPT5;
