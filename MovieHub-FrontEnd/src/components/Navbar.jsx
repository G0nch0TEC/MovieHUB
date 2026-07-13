import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="/" className="logo">
          MovieHub
        </a>

        <div className="links">
            <a>Sedes</a>
            <a>Cartelera</a>
            <a>Próximos estrenos</a>
            <a>Promociones</a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar