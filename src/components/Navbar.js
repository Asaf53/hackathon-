import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
            <div className="container ">
                <Link to="/" className='navbar-brand'>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify-content-between" style={{ marginLeft: 'auto' }}>
                        <li className="nav-item">
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/movies" className='nav-link'>Movies</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar