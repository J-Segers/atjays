import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <section id="location">
                <ul>
                    <li>Echt-Susteren</li>
                    <li>Limburg, Nederland</li>
                </ul>
            </section>

            <a href="mailto:" className="contact">Contact</a>
        </footer>
    );
}

export default Footer;  