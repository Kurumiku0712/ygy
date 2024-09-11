import React from 'react';
import './Navbar.css';

function Navbar() {

    const handleNavClick = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        const offset = 70; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <a href=" ">
                        <img className="logo" src="./assets/images/logo.png" alt="" />
                    </a>
                    <ul>
                        <li>
                            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}className="menu-item">主页</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}className="menu-item">技能</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}className="menu-item">项目</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}className="menu-item">联系</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
