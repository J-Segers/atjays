import React from 'react';
import "./About.css";
import Footer from "../../components/footer/Footer";
import Header from '../../components/header/Header';
import profileImg from "../../assets/20230830_235751.jpg"
import frontend from "../../assets/4884785.jpg";
import backend from "../../assets/13992.jpg";

function About() {
    return (
        <div id="about-container">
            <Header />
            <main className='personal-info'>
                <section>
                    <div className="profile">
                        <img src={profileImg} alt="" className="profile-img" />
                    </div>
                    <article>
                        Hello, my name is Jethro and I am a junior fullstack developer from the Netherlands.
                        I have been working on becoming a fullstack developer over the last few years.
                    </article>
                </section>
                
                <section>
                    <article>
                        On the backend I work with Java springboot and postgresql.
                    </article>
                    <img src={backend} alt="" />
                </section>

                <section>
                    <img src={frontend} alt="" />
                    <article>
                        On the frontend I work mainly with React and have been exploring the use of typescript recently.
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default About;