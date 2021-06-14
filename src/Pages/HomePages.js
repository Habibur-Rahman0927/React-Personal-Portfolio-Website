import React from 'react';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const HomePages = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">Hi, I am <span>Habibur Rahman</span></h1>
                <p className="h-sub-text">Hello, Everyone I am Habibur Rahaman.I study at Dhaka Polytechnic Institute in computer scince.I am expert web design and developing.I must give you a better Services than Others.I have an exquisite blend of experience in HTML, CSS, BOOTSTRAP, JQUERY, JAVASCRIPT, REACT, NODE JS, EXPRESS JS, MONGODB etc and I am ready to start working on your projects.I assure you that you'll get your job done correctly,on time and within your budget.Please feel free to contact with me any time</p>
            </header>
            <div className="icons">
                <Link to={{ pathname: "https://www.facebook.com/mdhabibur.rahaman.9400/" }} target="_blank"  className="icon-holder"><FontAwesomeIcon icon={faFacebook} className="icon fb"></FontAwesomeIcon></Link>
                <Link to={{ pathname: "https://github.com/Habibur-Rahman0927" }} target="_blank" className="icon-holder"><FontAwesomeIcon icon={faGithub} className="icon gh"></FontAwesomeIcon></Link>
                <Link to={{ pathname: "https://www.linkedin.com/in/habibur-rahman-40ba03214/" }} target="_blank" className="icon-holder"><FontAwesomeIcon icon={faLinkedin} className="icon li"></FontAwesomeIcon></Link>
            </div>
        </div>
    );
};

export default HomePages;