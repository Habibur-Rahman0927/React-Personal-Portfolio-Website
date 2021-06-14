import React from 'react';
import avatar from '../img/habib fiver.jpg';
import { NavLink } from "react-router-dom";
import '../Styles/Navbar.scss'

const Navbar = ({navToggle,setNavToggle}) => {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="Habib profile images" />
                </div>
                <ul className="nav-items">
                    <li onClick={() => setNavToggle(false)} className="nav-item"><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li onClick={() => setNavToggle(false)} className="nav-item"><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
                    <li onClick={() => setNavToggle(false)} className="nav-item"><NavLink to="/portfolios" exact activeClassName="active">Portfolios</NavLink></li>
                    <li onClick={() => setNavToggle(false)} className="nav-item"><NavLink to="/blogs" exact activeClassName="active">Blogs</NavLink></li>
                    <li onClick={() => setNavToggle(false)} className="nav-item"><NavLink to="/contact" exact activeClassName="active">Contact</NavLink></li>
                </ul>
                <footer className="footer">
                    <p><small>Create By Coder ROCK | © 2021 All right reserved.</small></p>
                </footer>
            </nav>

        </div>
    );
};

export default Navbar;