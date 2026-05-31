import React from 'react';
import '../styles/footer.css';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <a className="footer-brand" href="#hero">Ron<span className="gradient-text">Golan</span></a>
                <p className="footer-tag">Mobile Developer · Android &amp; iOS · Open for work</p>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/ron-golan-27171028b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/rongo270" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://play.google.com/store/apps/developer?id=rongo" target="_blank" rel="noopener noreferrer">Google Play</a>
                    <a href="https://apps.apple.com/us/developer/ron-golan/id6772835016" target="_blank" rel="noopener noreferrer">App Store</a>
                </div>
                <p className="footer-copy">© {year} Ron Golan. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
