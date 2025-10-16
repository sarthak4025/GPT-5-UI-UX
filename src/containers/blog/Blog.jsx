import React from 'react'
import { Article } from '../../components'
import "./blog.css"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js"

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Discover the latest updates and insights from the world of AI innovation.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article 
            imgUrl={blog01} 
            date="Oct 15, 2025" 
            title="How GPT-5 is redefining creativity and problem-solving in 2025." 
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article 
            imgUrl={blog02} 
            date="Oct 12, 2025" 
            title="AI-powered apps transforming industries around the world." 
          />
          <Article 
            imgUrl={blog03} 
            date="Oct 10, 2025" 
            title="The rise of agent-based AI: Smarter interactions for a smarter future." 
          />
          <Article 
            imgUrl={blog04} 
            date="Oct 08, 2025" 
            title="Why ethical AI development is more crucial than ever." 
          />
          <Article 
            imgUrl={blog05} 
            date="Oct 05, 2025" 
            title="How developers are using AI to accelerate innovation." 
          />
        </div>
      </div>
    </div>
  )
}

export default Blog
