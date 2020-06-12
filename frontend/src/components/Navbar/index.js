import React from 'react'

import logo from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img src={logo} width={55} alt="Logo"/>
          <span className="ml-2">AnswerMe</span>
        </a>
      </nav>
    </div>
  )
}
