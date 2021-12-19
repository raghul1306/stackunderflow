import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="navbar-contents">
            <h1>{ props.title }</h1>
            <nav className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Post Question</Link>
            </nav>
        </div>
    );
}

export default Navbar;