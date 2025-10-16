import React from 'react';
import { Feature } from '../../components';
import "./features.css";

const featuresData = [
  {
    title: "Smarter, Faster, and More Capable",
    text: "GPT-5 uses advanced reasoning and multi-modal understanding to handle text, code, and visuals in real time — helping you make smarter decisions faster than ever before."
  },
  {
    title: "True Autonomous Agents",
    text: "With integrated agent capabilities, GPT-5 can plan, execute, and adapt — automating tasks, connecting APIs, and performing actions on your behalf safely and intelligently."
  },
  {
    title: "Context that Never Fades",
    text: "Enhanced long-term memory allows GPT-5 to retain context across sessions, understand evolving goals, and provide deeply personalized, continuous assistance."
  },
  {
    title: "A New Era of Collaboration",
    text: "GPT-5 transforms how people and AI work together — blending creativity, analysis, and automation to unlock innovation across every field and industry."
  }
];

const Features = () => {
  return (
    <div className="gpt5__features section__padding" id="features">
      <div className="gpt5__features-heading">
        <h1 className="gradient__text">
          Step Into the Future with GPT-5 — The Era of Intelligent Collaboration Has Begun
        </h1>
        <p>Request Early Access to Experience the Power of GPT-5</p>
      </div>

      <div className="gpt5__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
