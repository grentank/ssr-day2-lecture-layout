import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Home</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-link" href="/about">About</a>
            <a className="nav-link" href="/students">Students</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
