import React from 'react'
import BannerUSA from './BannerUSA'

import './Header.css'
import logo from './images/ffiec-logo.svg'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Data Publication', href: '/data-publication/' },
  { name: 'Tools', href: '/tools/' }
]

const Header = () => {
  return (
    <React.Fragment>
      <a className="skipnav" href="#main-content">
        Skip to main content
      </a>
      <header className="hmda-header header header-basic" role="banner">
        <BannerUSA />
        <div className="nav-container">
          <div className="logo" id="logo">
            <span className="logo-text">
              <a className="nav-link" href="/" aria-label="Home">
                <img alt="FFIEC" src={logo} height="32" />
                Home Mortgage Disclosure Act
              </a>
            </span>
          </div>
          <nav className="nav">
            <ul className="nav-primary">
              {links.map(link => {
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={
                        link.name === 'Home' ? 'nav-link active' : 'nav-link'
                      }
                    >
                      {link.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
