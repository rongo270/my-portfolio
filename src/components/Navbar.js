import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';

const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#focus', label: 'Focus' },
    { href: '#checkchange', label: 'CheckChange' },
    { href: '#tech', label: 'Tech' },
    { href: '#contact', label: 'Contact' },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top site-nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="#hero">
                    Ron<span className="gradient-text">Golan</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                    aria-controls="navMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav ms-auto align-items-lg-center">
                        {links.map((l) => (
                            <li className="nav-item" key={l.href}>
                                <a className="nav-link" href={l.href}>{l.label}</a>
                            </li>
                        ))}
                        <li className="nav-item ms-lg-2">
                            <a
                                className="nav-cta"
                                href="https://www.linkedin.com/in/ron-golan-27171028b/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Hire me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
