import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import '../styles/contact.css';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d7it14u', 'template_wtj4ncd', form.current, '4ldZQ2icyz6HsYZzP')
            .then(() => {
                alert('Message sent successfully!');
                form.current.reset();
            }, () => {
                alert('Failed to send message. Please try again.');
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h3 className="contact-header">Let's connect!</h3>
                    <p><span className="icon">👤</span> Ron Golan</p>
                    <p><span className="icon">📧</span> rongo123321@gmail.com</p>
                    <p><span className="icon">📞</span> 058-4270100</p>
                    <p><span className="icon">🔗</span> <a href="http://www.linkedin.com/in/ron-golan-27171028b" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    <p><span className="icon">🐙</span> <a href="https://github.com/rongo270" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" name="from_name" placeholder="Your Name" required />
                    <input type="email" name="from_email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
