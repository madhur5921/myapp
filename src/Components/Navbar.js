import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
return (
<nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
<div className="container-fluid">
<a className="navbar-brand" href="/">{props.title}</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    </ul>

    <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {props.switch_mode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light'? 'Dark Mode' : 'Light Mode'}</label>
</div>
    {/* <form className="d-flex" role="search">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-primary" type="submit">Search</button>
    </form> */}
</div>
</div>
</nav>
)
}

Navbar.proptotype = {
title: PropTypes.string,
About: PropTypes.string
}
