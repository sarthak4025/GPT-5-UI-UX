import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../assets/download.svg"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt5'>What is GPT-5?</a></p>
    <p><a href='#capabilities'>AI Capabilities</a></p>
    <p><a href='#innovation'>Use Cases</a></p>
    <p><a href='#resources'>Resources</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="GPT-5 Logo" />
        </div>

        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>

        <div className="gpt3__navbar-wrapper">
          <div className="gpt3__navbar-sign">
            <p>Sign in</p>
            <button type='button'>Join Now</button>
          </div>

          {/* Responsive menu for mobile devices */}
          <div className="gpt3__navbar-menu">
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }

            {toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu />
                </div>
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type='button'>Join Now</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
